import React, { Component } from 'react';
// import uuid from 'uuid';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
// import Todos from './components/Todos';
import About from './components/pages/About';
import './App.css';
import AddBlogPost from './components/AddBlogPost';

class App extends Component {
  state = {
    todos: []
  };

  // fetch data
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
  }

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  deleteTodo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => {
        if (res) {
          this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
          });
        }
      })
    // this.setState({
    //   todos: this.state.todos.filter(todo => todo.id !== id)
    // });
  };

  addBlogPost = data => {
    // Using an API
    axios.post("https://jsonplaceholder.typicode.com/posts", {
      ...data,
    })
      .then(res =>
        this.setState({ todos: [...this.state.todos, res.data] })
      );


    // const newTodo = { id: uuid.v4(), title, completed: false };
    // this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return <Router>
      <div className="app">
        <div className="container">
          <Header />

          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddBlogPost addBlogPost={this.addBlogPost} />
              {/* <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} /> */}
            </React.Fragment>
          )} />

          <Route path="/about" component={About}>

          </Route>

        </div>
      </div>
    </Router>
  }
}

export default App;
