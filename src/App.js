import React, { Component } from 'react';
import TaskList from './components/task_list';
import NewTask from './components/new_task';
import {Provider} from 'mobx-react';
import store from './components/todostore';



class App extends Component {

    render(){

        return(
            <Provider store={store}>
                <div>
                    <NewTask />
                    <TaskList />
                </div>
            </Provider>
        )
    }
}

export default App;
