import PropTypes from 'prop-types';
import { useState } from 'react';

// function handleChange(event) {
//   console.log(event.target.value.length);
//   event.target.value.length > 0 ? (hasError = true) : (hasError = false);
// }

/**
 * Return input based on props
 *
 * @component
 * @param {object} props
 * @param {string} props.type
 * @param {string} props.name
 * @return {react.Component}
 */
function Input({ type, name }) {
  let [isValid, setIsValid] = useState(false);
  let [hasError, setHasError] = useState(false);

  function handleChange(event) {
    if (/^[a-zA-Z]{2,}$/.test(event.target.value)) {
      setIsValid(true);
      setHasError(false);
    } else {
      setIsValid(false);
      setHasError(true);
    }
  }

  return (
    <div className="inputElt">
      <label htmlFor={name.split(' ').join(' ')} className="block my-2">
        {name}
      </label>
      <input
        type={type}
        name={name.split(' ').join(' ')}
        id={name.split(' ').join(' ')}
        className={`border-solid rounded-md mb-4 w-64 ${
          isValid
            ? 'border-green-600 border-2'
            : hasError
            ? 'border-red-500 border-2'
            : 'border-slate-300 border'
        }`}
        onChange={handleChange}
      />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
