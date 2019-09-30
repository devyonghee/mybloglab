import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Container from './Container';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({}, dispatch);
};

const Home = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);

export default Home;
