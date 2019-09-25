import { connect } from 'react-redux';
import { RootState } from '@src/store/types';
import { bindActionCreators, Dispatch } from 'redux';
import * as blogActions from '@src/features/blog/actions';
import Container from './Container';

const mapStateToProps = (state: RootState) => ({
  blog: state.blog.blog,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      searchBlog: blogActions.searchBlog,
      searchPostRank: blogActions.searchPostRank,
      checkPostExistence: blogActions.checkPostExistence,
    },
    dispatch,
  );
};

const Home = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);

export default Home;
