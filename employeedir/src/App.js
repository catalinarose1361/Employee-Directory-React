import React, { Component } from "react";
import Employee from "./components/Employee";


class App extends Employee {
  // Setting this.state.friends to the friends json array
  // state = {
  //   friends
  // };

  
  // Map over this.state.friends and render a Employee component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <Employee
            
            // id={friend.id}
            // key={friend.id}
            // name={friend.name}
            // image={friend.image}
            // occupation={friend.occupation}
            // location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;