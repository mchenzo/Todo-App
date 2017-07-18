import React, { Component } from 'react';
import {inject, observer} from 'mobx-react'


@inject('store') @observer
class NewTask extends Component{

	render(){
		return (
			<div>
				<input 
						id='input'
						className='newTasker'
						onChange={(event) => this.props.store.handleNewTask(event.target.value)} />
				<button 
						className='addTask'
						onClick={() => this.props.store.handleAddTaskButton()} > + </button>
			</div>
		)
	}
}

export default NewTask