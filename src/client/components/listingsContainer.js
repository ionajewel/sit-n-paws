import React from 'react';
import PropTypes from 'prop-types';
import ListingView from './listingView';

// This component dynamically renders each listing in the array stored in the state of Main.js
export default class ListingsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <div className="wrapper">
        {this.props.listings.map((listing, i) => {
            return (
              <ListingView listing={listing} key={listing.name} />
            )
          }
        )}
      </div>
        {this.props.listings.length === 0 ? <div className="messageBox"><h2><em>Please Try A Different Zipcode</em></h2></div> : ''}
      </div>
    );
  };
}

ListingsContainer.propTypes = {listings: PropTypes.array.isRequired};
