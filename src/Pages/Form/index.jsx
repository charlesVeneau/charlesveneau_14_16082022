import Input from '../../Components/Input';
import Select from '../../Components/Select';

import SELECT_DATA from '../../data/SELECT_DATA.json';
import { useState, useEffect, useContext } from 'react';
import { ModalContext } from '../../utils/context';

/**
 * The Employee function returns a form that takes in user information and then saves it to the
 * userInfo state
 * @returns The Employee component is being returned.
 */

function Employee() {
  const userMockup = {
    firstName: null,
    lastName: null,
    dateofBirth: null,
    street: null,
    city: null,
    stateAbbrev: null,
    zipCode: null,
    startDate: null,
    department: null,
  };
  const [userInfo, setUserInfo] = useState(userMockup);

  const [hasError, setHasError] = useState(true);

  const { toggleIsSaved } = useContext(ModalContext);

  /**
   * The function takes in an event and a name, and then sets the userInfo state to the current userInfo
   * state, but with the name property set to the event
   */
  function handleChange(event, name) {
    setUserInfo({ ...userInfo, [name]: event });
  }

  /* Checking to see if the userInfo object has any empty values. If it does, it sets the hasError state
to true. If it doesn't, it sets the hasError state to false. */
  useEffect(() => {
    const userValues = Object.values(userInfo);
    const errors = userValues.filter((value) => !value);
    return errors.length > 0 ? setHasError(true) : setHasError(false);
  }, [userInfo]);

  /**
   * It takes the userInfo object and saves it to localStorage
   */
  function saveUser() {
    const users = JSON.parse(localStorage.getItem('savedUsers'));
    const array = [];
    if (users) {
      users.push(userInfo);
      localStorage.setItem('savedUsers', JSON.stringify(users));
    } else {
      array.push(userInfo);
      localStorage.setItem('savedUsers', JSON.stringify(array));
    }
    toggleIsSaved();
  }

  return (
    <article className="sm:col-span-5 md:col-span-3 py-4 sm:p-0 sm:my-4 mx-4 md:mx-8 text-right">
      <h2 className="font-bold text-xl md:text-2xl text-center text-gray-900 mb-6">
        Create Employee
      </h2>
      <div className="mx-auto sm:w-4/5">
        <form action="">
          <div className="bg-white rounded-lg shadow py-4 flex justify-content align-middle text-left mb-6">
            <div className="mx-auto w-5/6 md:w-auto">
              <Input
                handleChange={handleChange}
                type="text"
                name="First Name"
              />
              <Input handleChange={handleChange} type="text" name="Last Name" />
              <Input
                handleChange={handleChange}
                type="date"
                name="Date of Birth"
              />
              <Input
                handleChange={handleChange}
                type="date"
                name="Start Date"
              />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow py-4 flex flex-col justify-center align-middle text-left mb-6">
            <h3 className="font-bold text-xl text-gray-900 mb-4 mx-auto">
              Address
            </h3>
            <div className="mx-auto w-5/6 md:w-auto">
              <Input handleChange={handleChange} type="text" name="Street" />
              <Input handleChange={handleChange} type="text" name="City" />
              <Select
                handleChange={handleChange}
                data={SELECT_DATA[0]['state']}
                name="state"
              />
              <Input handleChange={handleChange} type="text" name="Zip Code" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow py-4 flex flex-col justify-center align-middle text-left mb-6">
            <div className="mx-auto w-5/6 md:w-auto">
              <Select
                handleChange={handleChange}
                data={SELECT_DATA[0]['department']}
                name="department"
              />
            </div>
          </div>
        </form>
        <button
          type="submit"
          className="mt-6 bg-green-600 text-slate-50 font-bold py-2 px-4 rounded hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-slate-400 transition"
          disabled={hasError}
          onClick={saveUser}
        >
          Save
        </button>
      </div>
    </article>
  );
}

export default Employee;
