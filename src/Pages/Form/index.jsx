import Input from '../../Components/Input';
import Select from '../../Components/Select';
import { useState } from 'react';

function Employee() {
  const userMockup = {
    firstName: null,
    lastName: null,
    dateOfBirth: null,
    street: null,
    city: null,
    state: null,
    stateAbbrev: null,
    zipCode: null,
    startDate: null,
    department: null,
  };
  const [userInfo, setUserInfo] = useState(userMockup);

  function handleChange(event, name) {
    setUserInfo({ ...userInfo, [name]: event });
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
                name="department"
              />
            </div>
          </div>
        </form>
        <button
          type="submit"
          className="mt-6 bg-green-600 text-slate-50 font-bold py-2 px-4 rounded hover:bg-green-700 transition"
        >
          Save
        </button>
      </div>
    </article>
  );
}

export default Employee;
