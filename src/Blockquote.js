import React, { Component } from 'react';
import { Watch } from 'scrollmonitor-react';
import { Stage, Layer, Text } from 'react-konva';
import classnames from 'classnames';
import './Blockquote.css';

export default Watch(class Blockquote extends Component {
  render() { 
    const classes = classnames('Blockquote', {
      fixed: this.props.isFixed,
      'from-bottom': this.props.direction === 'up',
      'from-top': this.props.direction === 'down'
    });

    return (
      <div className={classes}>
        <div className={"content"}>
          <Stage width={window.innerWidth} height={768}>
            <Layer>
              <Text fontFamily={"Calibri"} fontSize={60} lineHeight={1.15} padding={80} text={this.props.text} width={window.innerWidth} />
            </Layer>
          </Stage>
          </div>
      </div>
    );
  }
});


