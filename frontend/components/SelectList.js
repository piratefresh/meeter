import React, { Component } from "react";
import Select from "react-select";

const options = [
  {
    value: "Games",
    label: "games"
  },
  {
    value: "Social",
    label: "social"
  },
  {
    value: "Food & Drink",
    label: "food drink"
  },
  {
    value: "Sport & Wellness",
    label: "sport & wellness"
  },
  {
    value: "Business",
    label: "Business"
  },
  {
    value: "Parties",
    label: "parties"
  }
];

class SelectList extends Component {
  state = {
    selectedOption: null
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
    this.props.toggleItem(selectedOption.value);
  };
  render() {
    const { selectedOption } = this.state;
    return (
      <div>
        <Select
          onChange={this.handleChange}
          value={selectedOption}
          options={options}
        />
      </div>
    );
  }
}

export default SelectList;
