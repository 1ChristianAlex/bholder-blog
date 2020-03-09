import { useContext } from 'react';
import { AppContext, FormContext } from '../Provider/store';

export const useSideBar = () => {
  const { collapseSideBar } = useContext(AppContext);
  return collapseSideBar.status;
};
export const useUser = () => {
  const { user } = useContext(AppContext);
  return user;
};

export const useDispatch = () => {
  const { dispatch } = useContext(AppContext);
  return dispatch;
};
export const useSideBarDispatch = () => {
  const { dispatch } = useContext(AppContext);
  return dispatch;
};
export const useForm = <T = any>(name: string) => {
  const { form } = useContext(FormContext);
  if (form) return form[name] as T;
};
export const useFormDispatch = () => {
  const { dispatch } = useContext(FormContext);
  return dispatch;
};
