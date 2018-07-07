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
};

class CreateVideoPage extends React.Component<*, State> {
  state = {
  };

  componentDidMount() {
    const { createVideo: createVideoAction } = this.props;
    createVideoAction();
  }

  // handleEditorChange = (value: any) => {
  //   console.log(value);
  // }
  //
  // handleChange = (event: any) => {
  //   console.log(event);
  //   console.log(event.target.getContent({ format: 'text' }));
  //   console.log(event.target.uploadImages());
  //   this.editor = event.target;
  // }

  handleSubmit = async () => {
    console.log(this.editor.getContent({ format: 'text' }));
    const arrayOfImageSrcs = getAttrFromString(this.editor.getContent(), 'img', 'src');
    console.log(arrayOfImageSrcs);
  }

  editor: any;

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
              // onChange={this.handleChange}
              // onEditorChange={this.handleEditorChange}
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
