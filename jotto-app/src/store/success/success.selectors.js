import { createSelector } from 'reselect';

const selectSuccess = ({ success }) => success;

export const selectIsSuccess = createSelector(
  [selectSuccess],
  ({ isSuccess }) => isSuccess,
);
