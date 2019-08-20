import { connect } from 'react-redux';
import { RootAction, RootState } from '../../store/types';
import { bindActionCreators, Dispatch } from 'redux';
import { createActions as keywordActions } from '../../features/keyword/actions';
import Container from './Container';

type OwnProps = {};

const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
  blogList: state.keyword.blogList,
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