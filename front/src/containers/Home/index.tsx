import { connect } from 'react-redux';
import { RootAction, RootState } from '@src/store/types';
import { bindActionCreators, Dispatch } from 'redux';
import { createActions as blogActions } from '@src/features/blog/actions';
import Container from './Container';

const mapStateToProps = (state: RootState) => ({
  blog: state.blog.blog,
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => {
  return bindActionCreators(
    {
      searchBlog: blogActions.searchBlog,
      checkPostExistence: blogActions.checkPostExistence,
      searchPostRank: blogActions.searchPostRank,
    },
    dispatch,
  );
};

const Home = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);

export default Home;
