import React, { Component } from "react";
import Employee from "./components/Employee";
import empData from "./Employee.json";

class App extends Component {
  // Setting this.state.empData to the empData json array
  state = {
    empData
  };

  
  // Map over this.state.empData and render a Employee component for each friend object
  render() {
    return (
      <div>
        <h1>Employee Directory</h1>
        {this.state.empData.map(emp => (
          <Employee
            
          image={emp.image}
            name={emp.name}
            email={emp.email}
            DOB={emp.birthday}
           
          />
        ))}
      </div>
    );
  }
}

export default App;




// The user should be able to:


// Sort the table by at least one category


// Filter the users by at least one property.