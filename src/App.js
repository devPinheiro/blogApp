import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './layout/Header';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const Loading = () => <p>Loading ...</p>;

class App extends Component { 
  render() {
    return <Suspense fallback={<Loading />}>
        <Router>
          <div className='app'>
            <Header />
            <div className='container'>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/post/:id' component={BlogPage} />
            </div>
          </div>
        </Router>
      </Suspense>;
  }
}

export default App;
