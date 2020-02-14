import { useContext } from "react";
import { AppContext } from "../Provider/store";

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
