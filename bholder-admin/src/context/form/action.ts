import { INSERT_VALUE, DESTROY_FORM, REMOVE_FIELDS } from './types';

export const insertValue = (form: { name: string; value: any }) => ({
  type: INSERT_VALUE,
  payload: form
});
export const destroyForm = () => ({
  type: DESTROY_FORM
});
export const deleteField = (payload: Array<string>) => ({
  type: REMOVE_FIELDS,
  payload
});
