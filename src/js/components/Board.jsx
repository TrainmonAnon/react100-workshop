import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';


export default class Board extends React.Component {
  render() {
    return (
      <div>
        {this.props.squares.map((row, i) =>
          <div key={ i }>
            { row.map((square, j) =>
              <Square
                value={ square }
                key={ `${i} ${j}` }
                onClick={ () => this.props.onClick(i, j) }
              />
            )}
          </div>
        )}
      </div>
    );
  }
}

Board.propTypes = {
  onClick: PropTypes.func.isRequired,
  squares: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};
