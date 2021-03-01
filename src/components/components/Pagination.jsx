import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'semantic-ui-react';

class PaginationControlled extends Component {

  handlePaginationChange = (e, { activePage }) => {
    const { onActivePageChange } = this.props;
    onActivePageChange(activePage);
  }

  render() {
    const { activePage, totalPages, darkMode } = this.props;

    return (
      <Pagination inverted={darkMode ? true : false}
        activePage={activePage}
        onPageChange={this.handlePaginationChange}
        totalPages={totalPages}
        // size='mini'
        // siblingRange={siblingRange}
        firstItem={null}
        lastItem={null}
        prevItem={null}
        nextItem={null}
      />
    );
  }
}

PaginationControlled.propTypes = {
  activePage: PropTypes.number,
  totalPages: PropTypes.number,
  onActivePageChange: PropTypes.func,
};


export default PaginationControlled;
