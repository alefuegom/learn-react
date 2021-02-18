import React, {Component} from 'react';

class TaskForm extends Component{

    state = {
        title: '',
        description: '',
    }
    onSubmit = (event) =>{
        console.log(this.state)
        event.preventDefault()

    }
    onChange = (e) =>{
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render(){
        return (<form onSubmit={this.onSubmit}>
            <input name ="title" onChange= {this.onChange} value={this.state.title} type="text" placeholder="Write here a task title"/>
            <br/>
            <textarea name="description" onChange= {this.onChange} value={this.state.description}  type="text" placeholder="Write here a task description"/>
            <button type="submit">Save current task</button>
        </form>)
    }
}
export default TaskForm;