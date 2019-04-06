import React, { Component } from 'react';
import '../../App.css';
import CardComponent from '../../components/CardComponent';
import PropTypes from 'prop-types';


class SingleUserComponent extends Component {
  render() {

    return (
      <div className="wrapper">
      <CardComponent>
      <h4 style={{textAlign: 'center', marginTop: '50px'}}>Selected user: {this.props.match.params.id}</h4>
      </CardComponent>
      </div>
    );
  }
}

SingleUserComponent.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
  location: PropTypes.object
}

export default SingleUserComponent;
