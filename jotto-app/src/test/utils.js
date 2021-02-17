import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';
import configureStore from 'redux-mock-store';
import rootReducer from '../store/root.reducer';

export const storeFactory = (initialState) => createStore(rootReducer, initialState);

export const mockStore = configureStore();
/**
 * @typedef {Object} ShallowWrapper
 * @property {number} length - quantity of searching component
 * @property {function} text - returns text of searching component
 * @property {function} debug - returns wrapper markup
 */

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper} ShallowWrapper
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

/**
 * Throw error if conformingProps do not pass propTypes validation.
 * @param {React.Component} component - Component to check props against.
 * @param {object} conformingProps - Props we expect to conform to defined propTypes.
 */
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name,
  );
  expect(propError).toBeUndefined();
}
