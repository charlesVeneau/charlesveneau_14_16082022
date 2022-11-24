import Input from '../../Components/Input';
// import Select from '../../Components/Select';
import { Select } from 'cv-custom-select';
import SELECT_DATA from '../../data/SELECT_DATA.json';
import { useState, useEffect, useContext } from 'react';
import { ModalContext, UsersContext } from '../../utils/context';

/**
 * The Employee function returns a form that takes in user information and then saves it to the
 * userInfo state
 * @returns The Employee component is being returned.
 */

function Employee() {
  const userMockup = {
    id: 1,
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

  const { openModal } = useContext(ModalContext);

  const { addUser } = useContext(UsersContext);
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
      userInfo.id = users.length;
      users.push(userInfo);
      localStorage.setItem('savedUsers', JSON.stringify(users));
    } else {
      userInfo.id = 1;
      array.push(userInfo);
      localStorage.setItem('savedUsers', JSON.stringify(array));
    }
    addUser(userInfo);
    openModal();
  }

  return (
    <article className="text-right">
      <h2>Create Employee</h2>
      <div className="mx-auto sm:w-4/5">
        <form action="">
          <div className="form_block flex align-middle text-left justify-content">
            <div className="block_elt">
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
          <div className="form_block form_block-center">
            <h3>Address</h3>
            <div className="block_elt">
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
          <div className="form_block form_block-center">
            <div className="block_elt">
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
          className="button"
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
