import PropTypes from 'prop-types';
import './style.css';
import { useState, useRef } from 'react';

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
  const optionList = useRef(null);

  const sortedData = data.sort(function (a, b) {
    if (a.label < b.label) return -1;
    if (a.label > b.label) return 1;
    return 0;
  });

  /**
   * If the user clicks on the div, then get the value from the div's data-value attribute. If the user
   * clicks on the input, then get the value from the input's value attribute. If the value is NULL, then
   * set the isValid state to false, set the hasError state to true, set the selectValue state to null,
   * and call the handleChange function with null and the name of the input. If the value is not NULL,
   * then set the isValid state to true, set the hasError state to false, set the selectValue state to
   * the value, and call the handleChange function with the value and the name of the input
   */
  function handleError(event, type) {
    let value = '';
    if (type === 'click') {
      value =
        event.target.nodeName === 'LI'
          ? event.target.getAttribute('data-value')
          : event.target.value;
    } else if (type === 'enter') {
      value =
        event.nodeName === 'LI' ? event.getAttribute('data-value') : 'NULL';
    }
    if (value === 'NULL') {
      setIsValid(false);
      setHasError(true);
      setSelectValue(null);
      handleChange(null, name);
    } else {
      setIsValid(true);
      setHasError(false);
      setSelectValue(value);
      handleChange(value, name);
    }
    setIsVisible(false);
    document.removeEventListener('keydown', customSelectEventHandler);
    document.removeEventListener('mousedown', customSelectEventHandler);
  }

  function handleCustomSelect(event) {
    // const innerY = event.screenY - event.clientY;
    // console.log(innerY);
    const newState = !isVisible;
    setIsVisible(() => !isVisible);
    setListeners(newState);
  }

  function handleHoverSelect(event) {
    if (event === 'down' && hoverValue < sortedData.length) {
      setHoverValue(() => hoverValue++);
    }
    if (event === 'up' && hoverValue > 0) {
      setHoverValue(() => hoverValue--);
    }
    getHoverElement().scrollIntoView({ block: 'center' });
  }

  function setListeners(visible) {
    if (visible) {
      document.addEventListener('keydown', customSelectEventHandler);
      // document.addEventListener('mouseup', customSelectEventHandler);
    } else {
      document.removeEventListener('keydown', customSelectEventHandler);
      // document.removeEventListener('mouseup', customSelectEventHandler);
    }
  }

  function customSelectEventHandler(event) {
    event.preventDefault();
    if (event.key === 'Escape') {
      closeCustomSelect();
    } else if (event.key === 'ArrowDown') {
      handleHoverSelect('down');
    } else if (event.key === 'ArrowUp') {
      handleHoverSelect('up');
    } else if (event.key === 'Enter') {
      console.log(`hoverValue : ${hoverValue}`);
      if (hoverValue >= 0) {
        handleError(getHoverElement(), 'enter');
      }
    } else if (/^[a-zA-Zàâçéèêëîïôûùüÿñæœ]{1,}$/.test(event.key)) {
      //select the first occurence in the data array
      const occurenceIndex = data
        .map((child) => child.label.toLowerCase()[0])
        .indexOf(event.key.toLowerCase());
      setHoverValue(() => occurenceIndex);
      document
        .querySelector(`li[data-active="${occurenceIndex}"]`)
        .scrollIntoView();
      //getHoverElement().scrollIntoView();
    }
  }

  function getHoverElement() {
    return optionList.current.querySelector(`li.isActive`);
  }

  function closeCustomSelect() {
    setIsVisible(() => false);
    setHoverValue(() => 0);
    setListeners(false);
  }

  return (
    <div className="relativeBlock">
      <label id={name} className="selectLabel">
        {name} {hoverValue}
      </label>
      <div className="relativeBlock">
        <select
          id={name}
          aria-labelledby={name}
          className={`selectNative js-selectNative select ${
            isValid ? 'isValid' : hasError ? 'hasError' : 'neutral'
          }`}
          onChange={(e) => handleError(e, 'click')}
          value={selectValue}
        >
          {sortedData.map((element) => {
            return (
              <option key={element.abbrev} value={element.abbrev}>
                {element.label}
              </option>
            );
          })}
        </select>
        <div
          className={`selectCustom`}
          aria-hidden={isVisible ? 'false' : 'true'}
        >
          <div
            className="selectCustom-trigger"
            onClick={handleCustomSelect}
          ></div>
          <ul
            ref={optionList}
            className={`selectCustom-opts ${
              isVisible ? 'isVisible' : 'isHidden'
            }`}
          >
            {sortedData.map((element, index) => {
              return (
                <li
                  key={index}
                  data-active={index}
                  data-value={element.abbrev}
                  className={`selectCustom-opt ${
                    index === hoverValue ? 'isActive' : ''
                  }`}
                  onClick={(e) => handleError(e, 'click')}
                >
                  {element.label}
                </li>
              );
            })}
          </ul>
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
