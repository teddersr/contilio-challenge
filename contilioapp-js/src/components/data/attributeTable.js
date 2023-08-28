import React, { Component } from "react";

class AttributeTable extends Component {
  render() {
    const { data } = this.props;
    return (
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
          {data &&
            data.map((row, i) => (
              <tr key={crypto.randomUUID()}>
                <td>{row.name}</td>
                <td>{row.value}</td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  }
}
export default AttributeTable;
