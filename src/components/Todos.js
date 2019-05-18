import React, { Component } from 'react';
import TodoItem from './Todoitem';
import PropTypes from 'prop-types';


class Todos extends Component {
  render() {
    return this.props.items.map((todo)=>(
      <TodoItem key ={todo.id} todo={todo} markCompleted={this.props.markCompleted} deloption={this.props.deloption} />
    ))
  }
}

Todos.propTypes = {
  todos : PropTypes.array
}

export default Todos;
