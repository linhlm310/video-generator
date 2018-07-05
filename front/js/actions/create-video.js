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

export const createVideo = () => async (dispatch) => {
  try {
    await axios.post('/videos');
  } catch (error) {
    dispatch(errorsUpdate(error.response.data.errors));
    log.error(error);
  }
};
