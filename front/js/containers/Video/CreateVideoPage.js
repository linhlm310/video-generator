/**
 * @file Hello World container.
 */

import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import _has from 'lodash/has';

import { fetchServerTimestamp } from '../../actions/server-timestamp';
import { createVideo } from '../../actions/create-video';

const mapStateToProps = ({ serverTimestamp, app }) => ({
  timestamp: serverTimestamp.timestamp,
  errors: app.errors,
});

const mapDispatchToProps = {
  fetchServerTimestamp,
  createVideo,
};

type State = {
};

class CreateVideoPage extends React.Component<*, State> {
  state = {
  };

  componentDidMount() {
    const { createVideo: createVideoAction } = this.props;
    createVideoAction();
  }

  render() {
    const { errors } = this.props;
    console.log(errors);
    return (
      <div>
        <div className="lti-registration-headline">
          <div className="lti-registration-headline__text">Tạo Video</div>
        </div>
        <form onSubmit={this.handleFormSubmit}>
          <div className="lci-fieldset">
            <label
              id="video_title_label"
              className={classNames(
                'lci-label',
                'lci-label--blurry',
                { 'lci-label--has-error': _has(errors, 'title') },
              )}
              htmlFor="video_title"
            >
              Tiêu đề
              {_has(errors, 'title') && (
                <span className="lci-label__error-text">{` (${errors.title.join(', ')})`}</span>
              )}
              <input
                type="input"
                id="video_title"
                name="video[title]"
                className="lti-registration-input"
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateVideoPage);
