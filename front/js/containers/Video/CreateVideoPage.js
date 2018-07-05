/**
 * @file Hello World container.
 */

import React from 'react';
import { connect } from 'react-redux';

import HelloWorld from '../../components/HelloWorld';
import { fetchServerTimestamp } from '../../actions/server-timestamp';

const mapStateToProps = ({ serverTimestamp }) => ({
  timestamp: serverTimestamp.timestamp,
});

const mapDispatchToProps = {
  fetchServerTimestamp,
};

type State = {
  title: string,
};

class CreateVideoPage extends React.Component<*, State> {
  state = {
    title: 'Test',
  };

  render() {
    const { title } = this.state;
    const { timestamp, fetchServerTimestamp: a } = this.props;
    return (
      <div>
        <HelloWorld
          timestamp={timestamp}
          fetchServerTimestamp={a}
        />
        <div>{title}</div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateVideoPage);
