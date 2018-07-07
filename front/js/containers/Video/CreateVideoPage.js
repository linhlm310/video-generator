/**
 * @file Hello World container.
 */

import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import _has from 'lodash/has';
import { Editor } from '@tinymce/tinymce-react';

import { fetchServerTimestamp } from '../../actions/server-timestamp';
import { createVideo } from '../../actions/create-video';
import { getAttrFromString } from '../../util/image';

const mapStateToProps = ({ serverTimestamp, app }) => ({
  timestamp: serverTimestamp.timestamp,
  errors: app.errors,
});

const mapDispatchToProps = {
  fetchServerTimestamp,
  createVideo,
};

type State = {
  title: string,
};

class CreateVideoPage extends React.Component<*, State> {
  state = {
    title: '',
  };

  handleTitleChange = (event: Event) => {
    this.setState({ title: event.target.value });
  }

  handleSubmit = async () => {
    const { createVideo: createVideoAction } = this.props;
    const { title } = this.state;
    const content = this.editor.getContent({ format: 'text' });
    const imageSrcs = getAttrFromString(this.editor.getContent(), 'img', 'src');

    createVideoAction(title, content, imageSrcs);
  }

  editor: any;

  render() {
    const { errors } = this.props;
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
                type="text"
                id="video_title"
                name="video[title]"
                className="lti-registration-input"
                onChange={this.handleTitleChange}
              />
            </label>
          </div>
          <div>
            <Editor
              initialValue="<p>This is the initial content of the editor</p>"
              init={{
                plugins: 'link image code',
                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
                paste_data_images: true,
                setup: (editor) => {
                  this.editor = editor;
                },
              }}
            />
          </div>
          <div>
            <button type="button" onClick={this.handleSubmit}>
              Xác nhận
            </button>
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
