import React from 'react';
import {
  CircularProgress,
  Slide,
  Snackbar,
  SnackbarOrigin,
} from '@material-ui/core';
import MuiAlert, { Color } from '@material-ui/lab/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { StoreData } from '../../redux/reduces';
import actions from '../../redux/actions';
import { TransitionProps } from '@material-ui/core/transitions/transition';

class SnackBarData {
  anchorOrigin: SnackbarOrigin = { horizontal: 'right', vertical: 'bottom' };
  open?: boolean;
  message = '';
  severity: Color = 'success';
  loading?: boolean;

  constructor(props?: Partial<SnackBarData>) {
    Object.assign(this, props);
  }
}

const TransitionRight = (props: TransitionProps) => {
  return <Slide {...props} direction="right" />;
};

const SnackbarProvider: React.FC = () => {
  const snackbarData = useSelector<StoreData, SnackBarData>(
    (store) => store.snackbar
  );
  const dispatch = useDispatch();

  return (
    <Snackbar
      anchorOrigin={snackbarData.anchorOrigin}
      open={snackbarData.open}
      onClose={() => dispatch(actions.updateSnackbar({ open: false }))}
      key="{vertical + horizontal}"
      autoHideDuration={6000}
      TransitionComponent={TransitionRight}
    >
      <MuiAlert
        elevation={6}
        icon={snackbarData.loading ? <CircularProgress size={18} /> : null}
        variant="filled"
        severity={snackbarData.severity}
      >
        {snackbarData.message}
      </MuiAlert>
    </Snackbar>
  );
};

export { SnackbarProvider, SnackBarData };
