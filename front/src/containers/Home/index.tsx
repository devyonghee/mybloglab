import { connect } from 'react-redux';
import { RootAction, RootState } from '@src/store/types';
import { bindActionCreators, Dispatch } from 'redux';
import { createActions as keywordActions } from '@src/features/keyword/actions';
import Container from './Container';

type OwnProps = {};

const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
  blog: state.keyword.blog,
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>, ownProps: OwnProps) => {
  return bindActionCreators({
    searchKeyword: keywordActions.search,
  }, dispatch);
};

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default Home;