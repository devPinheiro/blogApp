import React, { Component } from 'react'
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle() {
    return {
        display: '',
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: this.props.todo.completed ? 'line-through' : 'none'  
    }
  }
  render() {
      const {id, title} = this.props.todo;
    return (
    <div style={this.getStyle()}>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> 
         <p>{ title }</p>
        <span style={{ color: 'red' }} onClick={this.props.deleteTodo.bind(this, id)}>X</span>
      </div>
    )
  }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired 
}
export default TodoItem
