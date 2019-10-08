import axios, { AxiosResponse } from 'axios';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import {
  BlogState,
  CheckPostExistenceAction,
  NaverSort,
  SearchBlogAction,
  SearchPostRankAction,
} from '@src/features/blog/types';
import moment from 'moment';
import { CHECK_POST_EXISTENCE, SEARCH_BLOG, SEARCH_POST_RANK } from './constants';
import { Post } from './types';
import { setBlog, setPostProperty } from './actions';

const defaultSort: NaverSort = NaverSort.SIMILAR;
const defaultSearchCount: number = 100;

function* searchBlog(action: SearchBlogAction) {
  try {
    const response: AxiosResponse = yield call(axios.get, 'blog', {
      params: { url: action.payload },
    });

    if (response.status !== 200) {
      alert('요청에 실패했습니다.');
      return;
    }

    const { title } = response.data;
    const link = response.data.link ? new URL(response.data.link) : undefined;
    const image = response.data.image ? new URL(response.data.image) : undefined;
    const posts = Array.isArray(response.data.posts)
      ? response.data.posts
          .filter((post: { title?: string }) => post.title)
          .map(
            (post: { title: string; link?: string; created?: string }): Post => ({
              title: post.title,
              isExist: { loading: false, value: undefined },
              rank: { loading: false, value: undefined },
              link: post.link ? new URL(post.link) : undefined,
              created: post.created ? moment(post.created) : undefined,
            }),
          )
          .sort((post1: Post, post2: Post) => {
            if (!!post1.created && !!post2.created)
              return post1.created.isBefore(post2.created) ? 1 : -1;
            if (post1.created && !post2.created) return -1;
            if (!post1.created && post2.created) return 1;
            return 0;
          })
      : [];

    yield put(setBlog({ title, link, image, posts }));
  } catch (e) {
    alert('요청에 실패했습니다.');
  }
}

const fetchSearchPost = (keyword: string, link?: URL): Promise<AxiosResponse> => {
  if (!link) throw new Error('블로그 주소가 존재하지 않습니다.');

  return axios.get('naver/posts/search', {
    params: {
      blogLink: link.href,
      keyword,
      sort: defaultSort,
      display: defaultSearchCount,
    },
  });
};

function* checkPostExistence(action: CheckPostExistenceAction) {
  const blog: BlogState = yield select(store => store.blog);
  if (!blog.posts.length) return;
  const index = blog.posts.findIndex(post => post === action.payload.post);

  yield put(setPostProperty<'isExist'>(index, 'isExist', { loading: true, value: undefined }));

  try {
    const response = yield call(fetchSearchPost, action.payload.keyword, blog.link);
    yield put(
      setPostProperty<'isExist'>(index, 'isExist', {
        loading: false,
        value: response.status === 200 ? !!response.data : false,
      }),
    );
  } catch (error) {
    console.log(error.message);
    yield put(
      setPostProperty<'isExist'>(index, 'isExist', {
        loading: false,
        value: false,
      }),
    );
  }
}

function* searchPostRank(action: SearchPostRankAction) {
  const blog: BlogState = yield select(store => store.blog);
  if (!blog.posts.length) return;
  const index = blog.posts.findIndex(post => post === action.payload.post);

  yield put(setPostProperty<'rank'>(index, 'rank', { loading: true }));

  try {
    const response = yield fetchSearchPost(action.payload.keyword, blog.link);
    yield put(
      setPostProperty<'rank'>(index, 'rank', {
        loading: false,
        value: response.status === 200 ? Number(response.data) : Number(0),
      }),
    );
  } catch (error) {
    console.log(error.message);
    yield put(
      setPostProperty<'rank'>(index, 'rank', {
        loading: false,
        value: Number(0),
      }),
    );
  }
}

export default function* blogSaga() {
  yield takeEvery(SEARCH_BLOG, searchBlog);
  yield takeEvery(CHECK_POST_EXISTENCE, checkPostExistence);
  yield takeEvery(SEARCH_POST_RANK, searchPostRank);
}
