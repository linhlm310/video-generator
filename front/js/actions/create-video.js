/**
 * @file Server Timestamp related actions.
 */

import axios from 'axios';

import getLogger from '../util/logger';
import { ERRORS_UPDATE } from './constants';

const log = getLogger('CreateVideoAction');

const errorsUpdate = (errors) => {
  return { type: ERRORS_UPDATE, errors };
};

export const createVideo = (title: string, content: string, imageSrcs: Array<string>) => async (dispatch) => {
  try {
    await axios.post('/videos', {
      video: {
        title,
        content,
        image_srcs: imageSrcs,
      },
    });
  } catch (error) {
    dispatch(errorsUpdate(error.response.data.errors));
    log.error(error);
  }
};
