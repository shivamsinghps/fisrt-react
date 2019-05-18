import React, { Component } from 'react';
import PropTypes from 'prop-types';



class TodoItem extends Component {
  getstyle = () => {
    return {
    backgroundColor :'#f5f5f5',
    border:'1px dotted',
    padding : '2px',
    textDecoration:this.props.todo.completed?'line-through':'none'
  }


  }
  render() {

    const {title,id} = this.props.todo
    return (

      <div style = {this.getstyle()}>
      <p>
      <input type ='checkbox' onChange={this.props.markCompleted.bind(this,id)}/>
      {title}
      <button style={btnstyle} onClick={this.props.deloption.bind(this,id)}>x</button>
      </p>
      </div>
    )

  }
}

 TodoItem.propTypes ={
   todo:PropTypes.object.isRequired
 }

const btnstyle = {
  backgroundColor:'red',
  padding:'3px',
  color:'white',
  borderRadius:'30%',
  cursor:'pointer',
  float:'right'

}


export default TodoItem;
