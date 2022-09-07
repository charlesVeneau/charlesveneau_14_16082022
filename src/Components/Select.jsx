import PropTypes from 'prop-types';

/**
 * This function is a React component that renders a select element with options that are passed in as
 * props
 * @param {object} props
 * @param {Object} props.userInfo parent state
 * @param {Function} props.handleChange parent state handler
 * @param {Array} props.data list of select needed
 * @param {String} props.name
 * @returns A select element with options.
 */
function Select({ userInfo, handleChange, data, name }) {
  /**
   * It takes a string as an argument and returns a different string based on the value of the argument.
   * @returns the value of stateAbbrev if it is equal to 'state', otherwise it is returning the
   * value of the name parameter.
   */
  function getName(name) {
    if (name === 'state') return 'stateAbbrev';
    else return name;
  }

  return (
    <div>
      <label htmlFor={name} className="capitalize block my-2">
        {name}
      </label>
      <select
        id={name}
        className="border-solid border rounded-md border-slate-300 mb-4 w-64 h-7"
        onChange={(event) => handleChange(event.target.value, getName(name))}
      >
        {data.map((element) => {
          return (
            <option key={element.abbrev} value={element.abbrev}>
              {element.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

Select.propTypes = {
  userInfo: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default Select;
