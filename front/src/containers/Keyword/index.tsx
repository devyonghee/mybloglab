import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as keywordActions from '@src/features/keyword/actions';
import Container from './Container';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      searchKeyword: keywordActions.searchKeyword,
    },
    dispatch,
  );
};

const Home = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);

export default Home;
