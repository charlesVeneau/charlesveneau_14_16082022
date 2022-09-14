import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * This function is a React component that renders a select element with options that are passed in as
 * props
 * @param {object} props
 * @param {Function} props.handleChange parent state handler
 * @param {Array} props.data list of select needed
 * @param {String} props.name
 * @returns A select element with options.
 */
function Select({ handleChange, data, name }) {
  let [isValid, setIsValid] = useState(false);
  let [hasError, setHasError] = useState(false);

  function handleError(event) {
    if (event.target.value === 'NULL') {
      setIsValid(false);
      setHasError(true);
      handleChange(null, getName(name));
    } else {
      setIsValid(true);
      setHasError(false);
      handleChange(event.target.value, getName(name));
    }
  }

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
        className={`border-solid rounded-md mb-4 w-full md:w-64 h-7 ${
          isValid
            ? 'border-green-600 border-2'
            : hasError
            ? 'border-red-500 border-2'
            : 'border-slate-300 border'
        }`}
        onChange={handleError}
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
  handleChange: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default Select;
