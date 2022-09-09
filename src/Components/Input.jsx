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
   * If the input is a firstName, lastName, city, or street, then check if the input is at least 2
   * characters long. If it is, then set the isValid state to true, set the hasError state to false, and
   * call the handleChange function with the input value and the name of the input. If the input is not
   * at least 2 characters long, then set the isValid state to false, set the hasError state to true
   */
  function handleError(event) {
    if (
      getName(name) === 'firstName' ||
      getName(name) === 'lastName' ||
      getName(name) === 'city' ||
      getName(name) === 'street'
    ) {
      if (/^.{2,}$/.test(event.target.value)) {
        setIsValid(true);
        setHasError(false);
        handleChange(event.target.value, getName(name));
      } else {
        setIsValid(false);
        setHasError(true);
      }
    } else if (getName(name) === 'zipCode') {
      if (/^\d{2,}$/.test(event.target.value)) {
        setIsValid(true);
        setHasError(false);
        handleChange(event.target.value, getName(name));
      } else {
        setIsValid(false);
        setHasError(true);
      }
    } else if (
      getName(name) === 'dateofBirth' ||
      getName(name) === 'startDate'
    ) {
      if (/^\d{4}[-]\d{2}[-]\d{2}$/.test(event.target.value)) {
        setIsValid(true);
        setHasError(false);
        handleChange(event.target.value, getName(name));
      } else {
        setIsValid(false);
        setHasError(true);
      }
    }
  }

  /**
   * It takes a string, splits it into an array, makes the first element lowercase, and then joins it
   * back into a string
   * @returns the first name of the person in lowercase.
   */
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
