import React, { Component, Suspense } from 'react';
import Layout from './components/Layout/';
import {
  Route,
  Switch,
  BrowserRouter as Router,
  withRouter,
} from 'react-router-dom';

// Import Css
import './assets/css/materialdesignicons.min.css';
import './Apps.scss';

import Index from './pages/JarvisLink/index.js';

// import "./assets/css/colors/default.css";

// Include Routes
import routes from './routes/allRoutes';

class App extends Component {
  Loader = () => {
    return (
      <div id="preloader">
        <div id="status">
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <Layout>
        {/* <Section /> */}
        <Index />
        {/* <WrappedComponent></WrappedComponent> */}
      </Layout>
    );
  }
}

export default withRouter(App);
