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
function Input({ handleChange, type, name }) {
  let [isValid, setIsValid] = useState(false);
  let [hasError, setHasError] = useState(false);

  /**
   * If the input is a firstName, lastName, city, or street, then check if the input is at least 2
   * characters long. If it is, then set the isValid state to true, set the hasError state to false, and
   * call the handleChange function with the input value and the name of the input. If the input is not
   * at least 2 characters long, then set the isValid state to false, set the hasError state to true
   */
  function handleError(event) {
    /* A regular expression that checks if the input is 5 digits long. */
    const zipCodeRegex = /^\d{5}$/;

    /* A regular expression that checks if the input is at least 2 characters long. */
    const nameRegex = /^[a-zA-Z\-\s]{2,}$/;

    /* Checking if the input is at least 2 characters long and if it has a number at the beginning. */
    const stringRegex = /^\d{1,}\s{1}[a-zA-Z\-\s']{2,}$/;

    /* A regular expression that checks if the input is in the format of YYYY-MM-DD */
    const dateRegex = /^\d{4}[-]\d{2}[-]\d{2}$/;

    /* Checking if the input is valid. If it is, then it sets the isValid state to true, sets the
    hasError state to false, and calls the handleChange function with the input value and the name
    of the input. If the input is not valid, then it sets the isValid state to false, sets the
    hasError state to true. */
    if (
      (['firstName', 'lastName', 'city'].includes(getName(name)) &&
        nameRegex.test(event.target.value)) ||
      (getName(name) === 'street' && stringRegex.test(event.target.value)) ||
      (getName(name) === 'zipCode' && zipCodeRegex.test(event.target.value)) ||
      (event.target.type === 'date' && dateRegex.test(event.target.value))
    ) {
      setIsValid(true);
      setHasError(false);
      if (event.target.type === 'date') {
        const isoDate = new Date(event.target.value).toISOString();
        handleChange(isoDate, getName(name));
      } else {
        handleChange(event.target.value, getName(name));
      }
    } else {
      setIsValid(false);
      setHasError(true);
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

  /**
   * It returns a string of the current date minus the number of years passed in as an argument
   * @returns A string with the date in the format of YYYY-MM-DD
   */
  function getLimiteDate(limit) {
    const today = new Date();
    const year = today.getFullYear() - limit;
    const month = () => {
      const tempMonth = today.getMonth() + 1;
      console.log(tempMonth);
      return tempMonth < 10 ? '0' + tempMonth : tempMonth;
    };
    const date = () => {
      const tempDate = today.getDate();
      return tempDate < 10 ? '0' + tempDate : tempDate;
    };
    return `${year}-${month()}-${date()}`;
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
        className={`w-full ${
          isValid
            ? 'border-green-600 border-2'
            : hasError
            ? 'border-red-500 border-2'
            : 'border-slate-300 border'
        }`}
        onChange={handleError}
        max={name === 'Date of Birth' ? getLimiteDate(18) : null}
        min={name === 'Date of Birth' ? getLimiteDate(75) : null}
        maxLength={name === 'Zip Code' ? 5 : null}
      />
    </div>
  );
}

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
