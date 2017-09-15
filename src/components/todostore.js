import {observable, action} from 'mobx';

class TodoStore {
	@observable tasks = []
	@observable newTask = ''

	@action addTodo = (task) => {
		if (this.tasks.indexOf(task) === -1) 
			{this.tasks.push(task)}
	}
	@action removeTodo = (task) => {
		let deleteIndex = this.tasks.indexOf(task)
		if (deleteIndex === this.tasks.length - 1){
			this.tasks.pop()
		} else if (deleteIndex === 0) {
			this.tasks.shift()
		} else {
			this.tasks = this.tasks.slice(0, deleteIndex).concat(this.tasks.slice(deleteIndex + 1))
		}
	}
	@action handleNewTask = (task) => {			//the input handlesNewTask and updates the newTask while the user types in a new task
		this.newTask = task;
	}
	@action handleAddTaskButton = () => {		//the + button adds the newTask to tasks and clears newTask
		let task = this.newTask
		this.addTodo(task)
		document.getElementById('input').value = ''
		this.newTask = ''
	}

}

var store = new TodoStore();

export default store

