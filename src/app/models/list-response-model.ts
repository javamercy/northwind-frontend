import { ResponseModelBase } from './response-model-base';

export interface ListResponseModel<T> extends ResponseModelBase {
  data: T[];
}
