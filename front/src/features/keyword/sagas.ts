import { call, put, takeEvery } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { SEARCH_KEYWORD } from '@src/features/keyword/constants';
import { setKeyword } from '@src/features/keyword/actions';
import { Post, SearchKeywordAction } from './types';

function* searchKeyword(action: SearchKeywordAction) {
  try {
    const response: AxiosResponse = yield call(
      axios.get,
      `keywords/search/${action.payload.keyword}`,
    );

    if (response.status !== 200) {
      alert('요청에 실패했습니다.');
      return;
    }

    const posts = Array.isArray(response.data.posts)
      ? response.data.posts
          .filter((post: { title?: string; link?: string }) => post.title && post.link)
          .map(
            (post: {
              title: string;
              bloggerName: string;
              description: string;
              link: string;
              bloggerLink?: string;
            }): Post => ({
              ...post,
              link: new URL(post.link),
              bloggerLink: post.bloggerLink ? new URL(post.bloggerLink) : undefined,
            }),
          )
      : [];

    yield put(
      setKeyword({
        ...response.data,
        posts,
      }),
    );
  } catch (e) {
    console.log(e.message);
  }
}

export default function* keywordSaga() {
  yield takeEvery(SEARCH_KEYWORD, searchKeyword);
}
