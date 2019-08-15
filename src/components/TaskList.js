import React, {Component} from 'react';

import TaskItem from './TaskItem';
class TaskList extends Component{

    constructor(props){
        super(props);
        this.state = {
            filterName : '',
            filterStatus : -1
        }
    }

    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus,
        )
        this.setState({
            [name] : value
        });
    }
 
    render(){
        let { tasks } = this.props;
        let { filterName, filterStatus } = this.state
        let elmTasks = tasks.map((task, index) => {
            return <TaskItem 
                        key={task.id}
                        index={index}
                        task = {task}
                        onUpdateStatus = {this.props.onUpdateStatus}
                        onDelete = {this.props.onDelete}
                        onUpdate = {this.props.onUpdate}
                    />
        });
        return(
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Ten</th>
                        <th className="text-center">Trang Thai</th>
                        <th className="text-center">Hoat Dong</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input 
                            type="text" 
                            name="filterName" 
                            className="form-control"
                            value={ filterName } 
                            onChange={this.onChange}
                            />
                        </td>
                        <td>
                            <select 
                                name="filterStatus" 
                                className="form-control"
                                value={ filterStatus } 
                                onChange={this.onChange}
                            >
                                <option value={-1}>Tat Ca</option>
                                <option value={0}>An</option>
                                <option value={1}>Kich Hoat</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {elmTasks}
                </tbody>
            </table>

        );
    }
}
    

export default TaskList;
