import { User } from '../models/UserModel';
import { SnackBarData } from '../components';

const UPDATE_USER = 'user/UPDATE_USER';

const updateUser = (payload: User): { payload: User; type: string } => ({
  type: UPDATE_USER,
  payload,
});

const UPDATE_SNACKBAR = 'snackbar/UPDATE_SNACKBAR';

const updateSnackbar = (
  payload: Partial<SnackBarData>
): { payload: Partial<SnackBarData>; type: string } => ({
  type: UPDATE_SNACKBAR,
  payload,
});

export default {
  updateUser,
  updateSnackbar,
  types: {
    UPDATE_USER,
    UPDATE_SNACKBAR,
  },
};
