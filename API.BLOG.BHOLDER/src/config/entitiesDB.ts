import * as EntitysModel from 'entity/index';

export const entitys = Object.keys(EntitysModel).map(
  (keys) => EntitysModel[keys],
);
