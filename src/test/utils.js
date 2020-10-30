/**
 * @function checkElement
 * @param {ShallowWrapper} wrapper - the component wrapper
 * @param {String} val - test attribute value [data-test="value"]
 * @returns {assertion} calls the expect function on data attribute
 */
export const checkElement = (wrapper, val) => {
  const component = wrapper.find(`[data-test="${val}"]`);
  expect(component.length).toBe(1);
};
