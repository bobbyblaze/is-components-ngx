import { iconBetween, iconEmpty, iconEq, iconGeq, iconGt, iconIn, iconLeq, iconLt, iconNeq, iconNotBetween, iconNotEmpty, iconNotIn } from './filter-type.internal';
import { FilterType, IFilterDef } from './filter.type';

export const DOUBLE_DEFS: { [key in FilterType]?: IFilterDef } = {
  DoubleEq: {
    Type: 'DoubleEq',
    Name: 'equals',
    Icon: iconEq,
    InputType: 'number',
  },
  DoubleNotEq: {
    Type: 'DoubleNotEq',
    Name: 'not equals',
    Icon: iconNeq,
    InputType: 'number',
  },
  DoubleIn: {
    Type: 'DoubleIn',
    Name: 'in',
    Icon: iconIn,
    InputType: 'text',
  },
  DoubleNotIn: {
    Type: 'DoubleNotIn',
    Name: 'not in',
    Icon: iconNotIn,
    InputType: 'text',
  },
  DoubleBetween: {
    Type: 'DoubleBetween',
    Name: 'between',
    Icon: iconBetween,
    InputType: 'number-range',
  },
  DoubleNotBetween: {
    Type: 'DoubleNotBetween',
    Name: 'not between',
    Icon: iconNotBetween,
    InputType: 'number-range',
  },
  DoubleGt: {
    Type: 'DoubleGt',
    Name: 'greater than',
    Icon: iconGt,
    InputType: 'number',
  },
  DoubleGeq: {
    Type: 'DoubleGeq',
    Name: 'greater or equal',
    Icon: iconGeq,
    InputType: 'number',
  },
  DoubleLeq: {
    Type: 'DoubleLeq',
    Name: 'less or equal',
    Icon: iconLeq,
    InputType: 'number',
  },
  DoubleLt: {
    Type: 'DoubleLt',
    Name: 'less than',
    Icon: iconLt,
    InputType: 'number',
  },
  DoubleEmpty: {
    Type: 'DoubleEmpty',
    Name: 'empty',
    Icon: iconEmpty,
    InputType: 'none',
  },
  DoubleNotEmpty: {
    Type: 'DoubleNotEmpty',
    Name: 'not empty',
    Icon: iconNotEmpty,
    InputType: 'none',
  },
};