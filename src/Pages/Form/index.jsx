import Input from '../../Components/Input';
import Select from '../../Components/Select';
import SELECT_DATA from '../../data/SELECT_DATA.json';
import { useState, useEffect } from 'react';

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

  /**
   * The function takes in an event and a name, and then sets the userInfo state to the current userInfo
   * state, but with the name property set to the event
   */
  function handleChange(event, name) {
    setUserInfo({ ...userInfo, [name]: event });
  }

  useEffect(() => {
    const userValues = Object.values(userInfo);
    const errors = userValues.filter((value) => !value);
    console.log(!errors[1]);
    return errors.length > 0 ? setHasError(true) : setHasError(false);
  }, [userInfo]);

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
  }

  return (
    <article className="col-span-3 my-4 mx-8 text-right">
      <h2 className="font-bold text-2xl text-center text-gray-900 mb-6">
        Create Employee
      </h2>
      <div className="mx-auto w-4/5">
        <form action="">
          <div className="bg-white rounded-lg shadow py-4 flex justify-content align-middle text-left mb-6">
            <div action="" className="mx-auto">
              <Input
                userInfo={userInfo}
                handleChange={handleChange}
                type="text"
                name="First Name"
              />
              <Input
                userInfo={userInfo}
                handleChange={handleChange}
                type="text"
                name="Last Name"
              />
              <Input
                userInfo={userInfo}
                handleChange={handleChange}
                type="date"
                name="Date of Birth"
              />
              <Input
                userInfo={userInfo}
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
            <div action="" className="mx-auto">
              <Input
                userInfo={userInfo}
                handleChange={handleChange}
                type="text"
                name="Street"
              />
              <Input
                userInfo={userInfo}
                handleChange={handleChange}
                type="text"
                name="City"
              />
              <Select
                userInfo={userInfo}
                handleChange={handleChange}
                data={SELECT_DATA[0]['state']}
                name="state"
              />
              <Input
                userInfo={userInfo}
                handleChange={handleChange}
                type="text"
                name="Zip Code"
              />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow py-4 flex flex-col justify-center align-middle text-left mb-6">
            <div action="" className="mx-auto">
              <Select
                userInfo={userInfo}
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
