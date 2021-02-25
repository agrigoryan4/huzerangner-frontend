import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'semantic-ui-react';

class PaginationControlled extends Component {

  // handlePaginationChange = (e, { activePage }) => this.setState({ activePage })
  handlePaginationChange = (e, { activePage }) => {
    const { onActivePageChange } = this.props;
    onActivePageChange(activePage);
  }

  render() {
    const { activePage, totalPages } = this.props;
    // const { activePage, totalPages } = this.props;

    return (
      <Pagination
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
