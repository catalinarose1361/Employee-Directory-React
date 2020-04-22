import React, { Component } from "react";
import Employee from "./Employee"
import Search from "./Search";


import moment from "moment";

let filtered = false;


class Directory extends Component {
	state = {
		result: [],
		filteredResult: [],
        search: "",
    }
	componentDidMount() {
    this.randomEmployee();
		
	}

	randomEmployee = () => {
		fetch("https://randomuser.me/api/?results=25")
			.then(res => res.json())
			.then(response => {
				console.log("response", response);
				this.setState({ result: response.results });
			});
	};

	globalSearch = () => {
		let { search, result } = this.state;
		console.log("search", search);
		console.log("before result", result);
		let filteredResult = result.filter(value => {
			return (
				value.name.first.toLowerCase().includes(search.toLowerCase()) ||
				value.name.last.toLowerCase().includes(search.toLowerCase()) ||
				value.email.toLowerCase().includes(search.toLowerCase())
			);
		});
		this.setState({ filteredResult });
		console.log("filtered result", filteredResult);
	};

	handleChange = event => {
		this.setState({ search: event.target.value }, () => {
			this.globalSearch();
			filtered = true;
		});
	};

	formatBD = str => {
		const newDate = moment(str).format("LL");
		
		return newDate;
	};

	render() {
		
		return (
			<div className="container">
				
					
			<div className="jumbotron text-center">
							<h1 className="display-4">Employee Directory</h1>
							
							<hr className="my-4" />
							<Search
								name="search"
								value={this.state.search || ""}
								onChange={this.handleChange}
								label="Search"
							/>
						</div>
						<table className="table">
						
							<tbody>
								{!filtered
									? this.state.result.map(person => (
											<Employee
												key={person.login.uuid}
												firstName={person.name.first}
												lastName={person.name.last}
												src={person.picture.thumbnail}
												email={person.email}
												birthdate={this.formatBD(person.dob.date)}
											/>
									  ))
									: this.state.filteredResult.map(person => (
											<Employee
												key={person.login.uuid}
												firstName={person.name.first}
												lastName={person.name.last}
												src={person.picture.thumbnail}
												email={person.email}
												birthdate={this.formatBD(person.dob.date)}
											/>
									  ))}
							</tbody>
						</table>
					

			</div>
		);
	}
}

export default Directory;