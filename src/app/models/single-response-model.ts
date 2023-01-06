import { ResponseModelBase } from './response-model-base';

export interface SingleResponseModel<T> extends ResponseModelBase {
  data: T;
}
