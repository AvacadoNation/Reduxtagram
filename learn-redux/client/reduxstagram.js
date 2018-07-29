// let's go!
import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';
 //import Main from './components/Main';
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
//binder that allows us to use redux with react
//Provider exposes store to application
import { Provider } from 'react-redux';
//default export vs named export
import store, { history } from './store';
  /*used to be browserHistory, Main */

const router = ( 
    
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
             <IndexRoute component={PhotoGrid}>
                 </IndexRoute>
                 <Route path="/view/:postId" component={Single}>
                     </Route>
             </Route>
         </Router>
  </Provider>
)
render(router, document.getElementById('root'));