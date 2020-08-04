export interface IPayloadInsert {
  name: string;
  value: string;
}

export class FormFunctions {
  constructor(private formState: any) {}

  public insertValue(payload: IPayloadInsert) {
    const newValue = { [payload.name]: payload.value };
    this.formState = { ...this.formState, ...newValue };
    return this.formState;
  }

  public removeFieldValue(payload: any) {
    const removeFilds = payload as Array<string>;
    const newState = { ...this.formState };

    removeFilds.forEach(key => {
      if (newState[key]) {
        newState[key] = undefined;
      }
    });
    return { ...this.formState, ...newState };
  }
}
