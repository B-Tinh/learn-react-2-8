import React, {Component} from 'react';


class TaskForm extends Component{
	render(){
		return(
				<div className="panel panel-warning">
	                <div className="panel-heading">
	                    <h3 className="panel-title">
	                        Them Cong Viec
	                        <span className="fa fa-times-circle text-right">

	                        </span>
	                    </h3>
	                </div>
	                <div className="panel-body">
	                    <form>                               
	                        <div className="form-group">
	                            <label>Ten:</label>
	                            <input type="text" className="form-control" name="name" />
	                        </div> 
	                        <div className="form-group">
	                            <label>Trang Thai:</label>
	                            <input type="text" className="form-control" name="status" />
	                        </div> 
	                        <select name="" id="input" className="form-control">
	                            <option value="">Kich Hoat</option>
	                            <option value="">An</option>
	                       </select> 
	                       <div className="text-center">                          
	                            <button type="submit" className="btn btn-warning mt-15">
	                                <span className="fa fa-plus mr-5"></span>Luu Lai
	                            </button>&nbsp;
	                            <button type="submit" className="btn btn-danger mt-15">
	                                <span className="fa fa-close mr-5"></span>Huy Bo
	                            </button>
	                        </div>
	                    </form>
	                </div>
	            </div>
			);
	}
}

export default TaskForm;