import React, { Component } from 'react';


class TaskForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			id: '',
			name: '',
			status: false
		}
	}

	componentDidMount() {
		if (this.props.taskEditing) {
			this.setState({
				id: this.props.taskEditing.id,
				name: this.props.taskEditing.name,
				status: this.props.taskEditing.status
			});
		}
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps && nextProps.taskEditing) {
			this.setState({
				id: nextProps.taskEditing.id,
				name: nextProps.taskEditing.name,
				status: nextProps.taskEditing.status
			});
		} else if (!nextProps.task) {
			this.setState({
				id: '',
				name: '',
				status: false
			});
		}
	}

	onCloseForm = () => {
		this.props.onCloseForm();
	}
	onChange = (event) => {
		let target = event.target;
		let name = target.name;
		let value = target.value;
		if (name === "status") {
			value = target.value === 'true' ? true : false
		}
		this.setState({
			[name]: value
		});
	}


	onSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state)
		this.onClear();
		this.onCloseForm();
	}
	onClear = () => {
		this.setState({
			name: '',
			status: false
		});
	}

	render() {
		let { id, name} = this.state;
		return (
			<div className="panel panel-warning">
				<div className="panel-heading">
					<h3 className="panel-title">
						{id !== '' ? "Cap Nhat Cong Viec" : "Them Cong Viec"}
						<span className="fa fa-times-circle text-right"
							onClick={this.onCloseForm}
						>
						</span>
					</h3>
				</div>
				<div className="panel-body">
					<form onSubmit={this.onSubmit}>
						<div className="form-group">
							<label>Ten:</label>
							<input
								type="text"
								className="form-control"
								name="name"
								value={name}
								onChange={this.onChange}
							
							/>
						</div>
						<div className="form-group">
							<label>Trang Thai:</label>
						</div>
						<select
							name="status"
							className="form-control"
							value={this.state.status}
							onChange={this.onChange}
						>
							<option value={true}>Kich Hoat</option>
							<option value={false}>An</option>
						</select>
						<div className="text-center">
							<button type="submit" className="btn btn-warning mt-15">
								<span className="fa fa-plus mr-5"></span>Luu Lai
	                            </button>&nbsp;
							<button
								type="button"
								className="btn btn-danger mt-15"
								onClick={this.onClear}
							>
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