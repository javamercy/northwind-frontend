import { ResponseModelBase } from './responseModel';

export interface SingleResponseModel<T> extends ResponseModelBase {
  data: T;
}
