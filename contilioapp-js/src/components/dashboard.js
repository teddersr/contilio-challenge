import React, { Component } from "react";
import Data from "./data/data";

class Dashboard extends Component {
  state = {
    data: null,
  };
  componentDidMount() {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => this.setState({ data: data[0] }))
      .catch((error) => console.error(error));
  }
  render() {
    return (
      <div className="dash-container">
        {this.state.data && <Data data={this.state.data} />}
      </div>
    );
  }
}
export default Dashboard;
