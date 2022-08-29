/**
 * Input component who return an input base on the type prop
 */

function Input({ type, name }) {
  return (
    <div className="inputElt">
      <label
        htmlFor={name.split(' ').join(' ')}
        className="block my-2 cursor-pointer"
      >
        {name}
      </label>
      <input
        type={type}
        name={name.split(' ').join(' ')}
        id={name.split(' ').join(' ')}
        className="border-solid border rounded-md border-slate-300 mb-4"
      />
    </div>
  );
}

export default Input;
