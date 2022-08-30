import PropTypes from 'prop-types';

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
  return (
    <div className="inputElt">
      <label htmlFor={name.split(' ').join(' ')} className="block my-2">
        {name}
      </label>
      <input
        type={type}
        name={name.split(' ').join(' ')}
        id={name.split(' ').join(' ')}
        className="border-solid border rounded-md border-slate-300 mb-4 w-44"
      />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
