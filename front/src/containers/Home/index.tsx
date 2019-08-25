import { connect } from 'react-redux';
import { RootAction, RootState } from '@src/store/types';
import { bindActionCreators, Dispatch } from 'redux';
import { createActions as keywordActions } from '@src/features/blog/actions';
import Container from './Container';

type OwnProps = {};

const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
  blog: state.blog.blog,
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>, ownProps: OwnProps) => {
  return bindActionCreators({
    searchBlog: keywordActions.searchBlog,
    searchPostRank: keywordActions.searchPostRank,
  }, dispatch);
};

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default Home;