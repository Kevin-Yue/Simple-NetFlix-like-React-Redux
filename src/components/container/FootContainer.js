import { connect } from 'react-redux';
import { Footer } from '../presentational/Footer';

const mapStateToProps = state => ({
  mylist: state.mylist
});

export default connect(mapStateToProps)(Footer);
