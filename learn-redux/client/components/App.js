import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

//in this case, our state is our posts and our comments
function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
} 

//with dispatch, think dispatching action
//no longer need to manually run dispatch b/c it'll pass our actioncreators vis props
function mapDispatchToProps(dispatch) {
return bindActionCreators(actionCreators, dispatch);
}
// use connect instead of react.createClass, call it against Main
const App =  connect(mapStateToProps, mapDispatchToProps)(Main);
export default App;