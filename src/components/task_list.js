import React from 'react';
import {inject, observer} from 'mobx-react';


const TaskList = (props) => {
	//props.tasks props.removeTask
	//props.store
	const listOfTasks = props.store.tasks.map((task, i) => {
		return (<li key={task}>{task}
					<button className='removeTask'
							onClick={() => props.store.removeTodo(task)}> x </button>
				</li>
		)
		// return (
		// 	<li key={task}>{task}
		// 		<button className='removeTask'
		// 				onClick={props.store.removeTodo(i)} > x </button>
		// 	}
		// 	</li>
		// )
	});

	return (
		<ul>{listOfTasks}</ul>
	)

}

export default inject('store')(observer(TaskList));