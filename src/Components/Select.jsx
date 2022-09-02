import PropTypes from 'prop-types';
import SELECT_DATA from '../data/SELECT_DATA.json';

/**
 * Select component
 * @param {object} props
 * @param {string} props.name
 * @returns {react.Component}
 */

function Select({ name }) {
  return (
    <div>
      <label htmlFor={name} className="capitalize block my-2">
        {name}
      </label>
      <select
        id={name}
        className="border-solid border rounded-md border-slate-300 mb-4 w-44"
      >
        {SELECT_DATA[0][name].map((element) => {
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
  name: PropTypes.string.isRequired,
};

export default Select;
