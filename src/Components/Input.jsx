import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * Return input based on props
 *
 * @component
 * @param {object} props
 * @param {string} props.type
 * @param {string} props.name
 * @return {react.Component}
 */
function Input({ userInfo, handleChange, type, name }) {
  let [isValid, setIsValid] = useState(false);
  let [hasError, setHasError] = useState(false);

  /**
   * If the input value is two or more letters, then set the isValid state to true and the hasError state
   * to false. Otherwise, set the isValid state to false and the hasError state to true
   */
  function handleError(event) {
    if (/^[a-zA-Z]{2,}$/.test(event.target.value)) {
      setIsValid(true);
      setHasError(false);
      handleChange(event.target.value, getName(name));
    } else {
      setIsValid(false);
      setHasError(true);
    }
  }

  function getName(name) {
    const temp = name.split(' ');
    temp[0] = temp[0].toLowerCase();
    return temp.join('');
  }

  return (
    <div className="inputElt">
      <label htmlFor={getName(name)} className="block my-2">
        {name}
      </label>
      <input
        type={type}
        name={getName(name)}
        id={getName(name)}
        className={`border-solid rounded-md mb-4 w-64 ${
          isValid
            ? 'border-green-600 border-2'
            : hasError
            ? 'border-red-500 border-2'
            : 'border-slate-300 border'
        }`}
        onChange={handleError}
      />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
