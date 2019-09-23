import { Blog } from '@src/models/Blog';
import axios, { AxiosResponse } from 'axios';
import { put, select, takeEvery } from 'redux-saga/effects';
import {
  BlogState,
  CheckPostExistenceAction,
  NaverSort,
  SearchBlogAction,
  SearchPostRankAction,
} from '@src/features/blog/types';
import { CHECK_POST_EXISTENCE, SEARCH_BLOG, SEARCH_POST_RANK } from './constants';
import { setBlog, setPostExistence, setPostRank } from './actions';

const defaultSort: NaverSort = NaverSort.SIMILAR;
const defaultSearchCount: number = 100;

function* searchBlog(action: SearchBlogAction) {
  try {
    const response: AxiosResponse = yield axios.get(`blog`, {
      params: { url: action.payload },
    });

    if (response.statusText !== 'OK') {
      alert('요청에 실패했습니다.');
      return;
    }
    yield put(setBlog(Blog.fromJson(response.data)));
  } catch (e) {
    alert('요청에 실패했습니다.');
  }
}

const fetchSearchPost = (blog: Blog | null, keyword: string): Promise<AxiosResponse> => {
  if (!blog || !blog.link) throw new Error('블로그 주소가 존재하지 않습니다.');

  return axios.get('naver/posts/search', {
    params: {
      blogLink: blog.link.href,
      keyword,
      sort: defaultSort,
      display: defaultSearchCount,
    },
  });
};

function* checkPostExistence(action: CheckPostExistenceAction) {
  try {
    const blog: BlogState = yield select(store => store.blog);
    const response = yield fetchSearchPost(blog.blog, action.payload.keyword);
    yield put(
      setPostExistence(action.payload.post, response.status === 200 ? !!response.data : false),
    );
  } catch (error) {
    yield put(setPostExistence(action.payload.post, false));
  }
}

function* searchPostRank(action: SearchPostRankAction) {
  try {
    const blog: BlogState = yield select(store => store.blog);
    const response = yield fetchSearchPost(blog.blog, action.payload.keyword);
    yield put(
      setPostRank(action.payload.post, response.status === 200 ? Number(response.data) : Number(0)),
    );
  } catch (error) {
    yield put(setPostRank(action.payload.post, 0));
  }
}

export default function* blogSaga() {
  yield takeEvery(SEARCH_BLOG, searchBlog);
  yield takeEvery(CHECK_POST_EXISTENCE, checkPostExistence);
  yield takeEvery(SEARCH_POST_RANK, searchPostRank);
}
