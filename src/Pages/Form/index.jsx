import Input from '../../Components/Input';
import Select from '../../Components/Select';

function Employee() {
  return (
    <article className="col-span-3 my-4 mx-8 text-right">
      <h2 className="font-bold text-2xl text-center text-gray-900 mb-6">
        Create Employee
      </h2>
      <div className="mx-auto w-4/5">
        <form action="">
          <div className="bg-white rounded-lg shadow py-4 flex justify-content align-middle text-left mb-6">
            <div action="" className="mx-auto">
              <Input type="text" name="First Name" />
              <Input type="text" name="Last Name" />
              <Input type="date" name="Date of Birth" />
              <Input type="date" name="Start Date" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow py-4 flex flex-col justify-center align-middle text-left mb-6">
            <h3 className="font-bold text-xl text-gray-900 mb-4 mx-auto">
              Address
            </h3>
            <div action="" className="mx-auto">
              <Input type="text" name="Street" />
              <Input type="text" name="City" />
              <Select name="state" />
              <Input type="text" name="Zip Code" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow py-4 flex flex-col justify-center align-middle text-left mb-6">
            <div action="" className="mx-auto">
              <Select name="department" />
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
