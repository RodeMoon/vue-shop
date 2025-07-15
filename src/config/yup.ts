import * as yup from 'yup';

yup.setLocale({
  mixed: {
    default: 'Not valid',
    required: 'This field is required',
    oneOf: 'Must be one of the following values: ${values}',
    notOneOf: 'Must not be one of the following values: ${values}',
    defined: 'Must be defined',
    notNull: 'Cannot be null',
    notType: 'Must be of type ${type}',
  },
  string: {
    length: 'Must be exactly ${length} characters',
    min: 'Must be at least ${min} characters',
    max: 'Must be at most ${max} characters',
    email: 'Must be a valid email',
    url: 'Must be a valid URL',
    trim: 'Must not have leading or trailing spaces',
    lowercase: 'Must be in lowercase',
    uppercase: 'Must be in uppercase',
    matches: 'Must match the following pattern: "${regex}"',
  },
  number: {
    min: 'Must be greater than or equal to ${min}',
    max: 'Must be less than or equal to ${max}',
    lessThan: 'Must be less than ${less}',
    moreThan: 'Must be greater than ${more}',
    positive: 'Must be a positive number',
    negative: 'Must be a negative number',
    integer: 'Must be an integer',
  },
  date: {
    min: 'Must be later than ${min}',
    max: 'Must be earlier than ${max}',
  },
  array: {
    min: 'Must have at least ${min} items',
    max: 'Must have at most ${max} items',
  },
});
