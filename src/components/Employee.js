import React from "react";


function Employee(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.firstname} src={props.src} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {`${props.firstName} ${props.lastName}`}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
          <li>
            <strong>Date Of Birth:</strong> {props.birthdate}
          </li>
        </ul>
      </div>

    </div>
  );
}

export default Employee;