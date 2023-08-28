import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class DataChart extends Component {
  state = {
    data: this.props.data,
  };
  componentDidUpdate(prevProps) {
    if (prevProps.data != this.props.data) {
      this.setState({ data: this.props.data });
    }
  }
  render() {
    let chartData = this.state.data.map((x) => {
      return {
        label: x.name,
        y: x.value,
      };
    });

    let options = {
      data: [
        {
          type: "bar",
          dataPoints: chartData,
        },
      ],
    };
    return <CanvasJSChart options={options} />;
  }
}
export default DataChart;
