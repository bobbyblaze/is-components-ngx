import { iconEmpty, iconNotEmpty } from './filter-type.internal';
import { FilterType, IFilterDef } from './filter.type';

export const BOOL_DEFS: { [key in FilterType]?: IFilterDef } = {
  BoolFalse: {
    Type: 'BoolFalse',
    Name: 'False',
    Icon: 'fa fa-exclamation',
    InputType: 'none',
  },
  BoolTrue: {
    Type: 'BoolTrue',
    Name: 'True',
    Icon: 'fa fa-check',
    InputType: 'none',
  },
  StringEmpty: {
    Type: 'StringEmpty',
    Name: 'empty',
    Icon: iconEmpty,
    InputType: 'none',
  },
  StringNotEmpty: {
    Type: 'StringNotEmpty',
    Name: 'not empty',
    Icon: iconNotEmpty,
    InputType: 'none',
  },
};