import PropTypes from 'prop-types';
import './style.css';
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
  let [isVisible, setIsVisible] = useState(false);
  let [hasError, setHasError] = useState(false);
  let [selectValue, setSelectValue] = useState('NULL');
  let [hoverValue, setHoverValue] = useState(0);

  /**
   * If the user clicks on the div, then get the value from the div's data-value attribute. If the user
   * clicks on the input, then get the value from the input's value attribute. If the value is NULL, then
   * set the isValid state to false, set the hasError state to true, set the selectValue state to null,
   * and call the handleChange function with null and the name of the input. If the value is not NULL,
   * then set the isValid state to true, set the hasError state to false, set the selectValue state to
   * the value, and call the handleChange function with the value and the name of the input
   */
  function handleError(event) {
    const value =
      event.target.nodeName === 'DIV'
        ? event.target.getAttribute('data-value')
        : event.target.value;
    if (value === 'NULL') {
      setIsValid(false);
      setHasError(true);
      setSelectValue(null);
      handleChange(null, getName(name));
    } else {
      setIsValid(true);
      setHasError(false);
      setSelectValue(value);
      handleChange(value, getName(name));
    }
    setIsVisible(false);
    document.removeEventListener('keydown', customSelectEventHandler);
    document.removeEventListener('mousedown', customSelectEventHandler);
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

  function handleCustomSelect(event) {
    const innerY = event.screenY - event.clientY;
    console.log(innerY);

    const newState = !isVisible;
    setIsVisible(() => !isVisible);
    setListeners(newState);
  }

  function handleHoverSelect(event) {
    if (event === 'up') {
      setHoverValue(() => hoverValue++);
    }
    if (event === 'down') {
      setHoverValue(() => hoverValue--);
    }
  }

  function setListeners(visible) {
    if (visible) {
      document.addEventListener('keydown', customSelectEventHandler);
      document.addEventListener('mousedown', customSelectEventHandler);
    } else {
      document.removeEventListener('keydown', customSelectEventHandler);
      document.removeEventListener('mousedown', customSelectEventHandler);
    }
  }

  function customSelectEventHandler(event) {
    if (
      event.key === 'Escape' ||
      (event.type === 'mousedown' &&
        !event.target.className.includes('selectCustom-opt'))
    ) {
      setIsVisible(false);
      document.removeEventListener('keydown', customSelectEventHandler);
      document.removeEventListener('mousedown', customSelectEventHandler);
    }
    if (event.key === 'ArrowDown' && hoverValue < data.length) {
      handleHoverSelect('up');
    }
    if (event.key === 'ArrowUp' && hoverValue >= 0) {
      handleHoverSelect('down');
    }
    if (event.key === 'Enter' && hoverValue > 0) {
    }
  }

  const selectClasses = 'border-solid rounded-md mb-4 w-full md:w-64 h-7';

  return (
    <div className="relative">
      <span id={name} className="capitalize block my-2 selectLabel">
        {name}
      </span>
      <div className="relative">
        <select
          id={name}
          aria-labelledby={name}
          className={`selectNative js-selectNative ${selectClasses} ${
            isValid
              ? 'border-green-600 border-2'
              : hasError
              ? 'border-red-500 border-2'
              : 'border-slate-300 border'
          }`}
          onChange={handleError}
          value={selectValue}
        >
          {data.map((element) => {
            return (
              <option key={element.abbrev} value={element.abbrev}>
                {element.label}
              </option>
            );
          })}
        </select>
        <div
          className={`selectCustom js-selectCustom ${selectClasses}`}
          aria-hidden={isVisible ? 'false' : 'true'}
        >
          <div
            className="selectCustom-trigger w-full md: w64 h-7"
            onClick={handleCustomSelect}
          ></div>
          <div
            className={`selectCustom-opts mt-2 rounded-md bg-white shadow-md border-slate-400 h-80 overflow-scroll overflow-x-hidden ${
              isVisible ? 'block' : 'hidden'
            }`}
          >
            {data.map((element, index) => {
              return (
                <div
                  key={index}
                  data-active={index}
                  data-value={element.abbrev}
                  className={`selectCustom-opt hover:text-white hover:bg-slate-500 p-2 cursor-pointer h-10 ${
                    index === hoverValue ? 'isActive' : ''
                  } ${index === 0 ? 'hidden' : ''}`}
                  onClick={handleError}
                >
                  {element.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

Select.propTypes = {
  handleChange: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default Select;
