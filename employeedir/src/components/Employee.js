import React from "react";


function Employee(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.email}
          </li>
          <li>
            <strong>Location:</strong> {props.birthday}
          </li>
        </ul>
      </div>

    </div>
  );
}

export default Employee;