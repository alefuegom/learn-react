import React, {Component} from 'react';
import PropTypes from 'prop-types';
class Task extends Component{
    
    StyleCompleted(){
        return{
            fontSize:'20px',
            color: this.props.task.done ? 'pink':'black',
        }
    }

    render(){
        const {task} = this.props
        return(
            <div style={this.StyleCompleted()}>
                {task.title} - 
                {task.description} 
                ({task.id})
                <input type="checkbox"/>
                <button style = {btnDelete}>
                    x
                </button>
            </div>
            );
    }
}
Task.propTypes = {
    task: PropTypes.object.isRequired
}
const btnDelete = {
    fontSize: '18px',
    background: 'orange',
    color: 'white',
}
export default Task