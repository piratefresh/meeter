import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import styled from "styled-components";

const DropdownList = styled.ul`
  padding: 1%;
  background: #fbfbfb;
  column-count: 3;
  color: #2b2b2b;
  z-index: 2;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  li {
    list-style: none;
  }
  @media (max-width: 650px) {
    bottom: 100%;
  }
`;

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: true,
      headerTitle: this.props.title,
      categories: [
        {
          id: 0,
          name: "Games",
          selected: false,
          key: "games"
        },
        {
          id: 1,
          name: "Social",
          selected: false,
          key: "social"
        },
        {
          id: 2,
          name: "Food & Drink",
          selected: false,
          key: "food drink"
        },
        {
          id: 3,
          name: "Sport & Wellness",
          selected: false,
          key: "sport & wellness"
        },
        {
          id: 4,
          name: "Business",
          selected: false,
          key: "Business"
        },
        {
          id: 5,
          name: "Parties",
          selected: false,
          key: "parties"
        }
      ]
    };
  }

  handleClickOutside(e) {
    this.setState({
      listOpen: false
    });
  }

  selectItem = (title, id, stateKey) => {
    this.setState(
      {
        headerTitle: title,
        listOpen: false
      },
      this.props.resetThenSet(id, stateKey)
    );
  };

  toggleList = () => {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  };
  render() {
    const { categories } = this.state;
    const { listOpen, headerTitle } = this.state;
    return (
      <div className="dd-wrapper">
        <div className="dd-header" onClick={this.toggleList}>
          <div className="dd-header-title">{headerTitle}</div>
          {listOpen ? (
            <FontAwesome name="angle-up" size="2x" />
          ) : (
            <FontAwesome name="angle-down" size="2x" />
          )}
        </div>
        {listOpen && (
          <DropdownList>
            {categories.map(item => (
              <li
                className="dd-list-item"
                key={item.id}
                onClick={() => this.props.toggleItem(item.id, item.name)}
              >
                {item.name} {item.selected && <FontAwesome name="check" />}
              </li>
            ))}
          </DropdownList>
        )}
      </div>
    );
  }
}

export default Dropdown;
