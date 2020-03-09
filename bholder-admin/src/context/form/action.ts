import { INSERT_VALUE, DESTROY_FORM } from './types';

export const insertValue = (form: { name: string; value: any }) => ({
  type: INSERT_VALUE,
  payload: form
});
export const destroyForm = () => ({
  type: DESTROY_FORM
});
