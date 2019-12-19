import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Date extends React.Component {
  state = {
    startDate: null,
    endDate: null
  };
  handleStart = date => {
    this.setState({
      startDate: date
    });
  };
  handleEnd = date => {
    this.setState({
      endDate: date
    });
  };

  render() {
    return (
      <div>
        <h1>Date Picker</h1>
        <label>Start Date: </label>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleStart}
          selectsStart
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          placeholderText="mm/dd/yyy"
        />
        <label>End Date: </label>
        <DatePicker
          selected={this.state.endDate}
          onChange={this.handleEnd}
          selectsEnd
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          minDate={this.state.startDate}
          placeholderText="mm/dd/yyy"
        />
      </div>
    );
  }
}
export default Date;
