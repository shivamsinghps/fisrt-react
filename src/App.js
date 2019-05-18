import React, { Component } from 'react';
import Header from './components/layout/Header'
import AddTodos from './components/AddTodos'
import uuid from 'uuid'


import Todos from './components/Todos';

class App extends Component {
state = {
  todos :[
    {id:uuid.v4(),
      title:'chcha ko dabadena',
      completed:false
    },
    {id:uuid.v4(),
      title:'chcha ko phod dena',
      completed:false
    },
    {id:uuid.v4(),
      title:'chcha ki marlena',
      completed: false
    }
  ]
}

  deloption = (id) =>{
    this.setState({todos:[...this.state.todos.filter(todo => todo.id !== id )]})
  }



  markCompleted = (id) =>{
    this.setState({todos:this.state.todos.map(todo =>
    {
      if(todo.id === id){
        todo.completed=!todo.completed
      }
      return todo;
    }
  )})

  }

  addTodo =(title) =>{
    const newtodo = {
      id :uuid.v4(),
      title,
      completed:false
    }
    this.setState({todos:[...this.state.todos,newtodo]})
  }

  render() {

    return (
      <div className="App">
      <div className="container">
      <Header />
      <h1></h1>
      <AddTodos addTodo={this.addTodo}/>
      <Todos items={this.state.todos} markCompleted ={this.markCompleted} deloption={this.deloption} />
      </div>
      </div>
    );
  }
}

export default App;
