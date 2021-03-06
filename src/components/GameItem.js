import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    updateScoreCallback: PropTypes.function,
  }

  onItemClick = () => {
    this.setState({ clicked: true });
    if (this.props.type === 'litter') {
      this.props.updateScoreCallback();
    }
  }

  clickedLabel = () => {
    if (this.props.type === 'litter') {
      return ' spotted-litter'
    } else {
      return ' spotted-nature'
    }
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    let icon = ItemIcons[this.props.type];

    return (
      <div className={"game-item" + (this.state.clicked ? this.clickedLabel() : "")} style={itemStyle} onClick={this.onItemClick}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;
