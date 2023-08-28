import React, { Component } from "react";
import AttributeTable from "./attributeTable";
import DataChart from "./dataChart";

class Data extends Component {
  state = {
    length: this.props.data
      ? this.props.data.attributes.find((x) => x.name === "length").value
      : 0,
    width: this.props.data
      ? this.props.data.attributes.find((x) => x.name === "width").value
      : 0,
    height: this.props.data
      ? this.props.data.attributes.find((x) => x.name === "height").value
      : 0,
    weight: this.props.data
      ? this.props.data.attributes.find((x) => x.name === "weight").value
      : 0,
  };
  onChangeLength = (newVal) =>
    this.setState({ length: parseInt(newVal.target.value) });
  onChangeWidth = (newVal) =>
    this.setState({ width: parseInt(newVal.target.value) });
  onChangeHeight = (newVal) =>
    this.setState({ height: parseInt(newVal.target.value) });
  onChangeWeight = (newVal) =>
    this.setState({ weight: parseInt(newVal.target.value) });
  render() {
    const { data } = this.props;
    const updatedAttributes = data.attributes.map((x) => {
      return {
        name: x.name,
        value: this.state[x.name],
        unit: x.unit,
      };
    });
    return (
      <div className="data-row">
        <div className="title w-100">
          <h4>{data.title}</h4>
        </div>
        <div className="attributesTable">
          <div className="container">
            <AttributeTable data={updatedAttributes} />
          </div>
        </div>
        <div className="attributesChart">
          <div className="container">
            <DataChart data={updatedAttributes} />
          </div>
        </div>

        <div className="w-100 ranges">
          <div>
            <label htmlFor="length">Length</label>
            <input
              type="range"
              className="input"
              id="length"
              name="length"
              min="0"
              max="25"
              value={this.state.length}
              onChange={this.onChangeLength}
            />
          </div>
          <div>
            <label htmlFor="width">Width</label>
            <input
              type="range"
              className="input"
              id="width"
              name="width"
              min="0"
              max="25"
              value={this.state.width}
              onChange={this.onChangeWidth}
            />
          </div>
          <div>
            <label htmlFor="height">Height</label>
            <input
              type="range"
              id="height"
              className="input"
              name="height"
              min="0"
              max="25"
              value={this.state.height}
              onChange={this.onChangeHeight}
            />
          </div>
          <div>
            <label htmlFor="weight">Weight</label>
            <input
              type="range"
              id="weight"
              className="input"
              name="weight"
              min="0"
              max="25"
              value={this.state.weight}
              onChange={this.onChangeWeight}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Data;
