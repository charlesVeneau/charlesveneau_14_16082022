import Input from '../../Components/Input';

function Employee() {
  return (
    <article className="col-span-3 my-4 mx-8 text-right">
      <h2 className="font-bold text-2xl text-center text-gray-900 mb-6">
        Create Employee
      </h2>
      <div className="mx-auto w-4/5">
        <div className="bg-white rounded-lg shadow py-4 flex justify-content align-middle text-left mb-6">
          <form action="" className="mx-auto">
            <Input type="text" name="First Name" />
            <Input type="text" name="Last Name" />
            <Input type="date" name="Date of Birth" />
            <Input type="date" name="Start Date" />
          </form>
        </div>
        <div className="bg-white rounded-lg shadow py-4 flex-col justify-center align-middle text-left mb-6">
          <h3 className="font-bold text-xl text-gray-900 mb-4">Address</h3>
          <form action="" className="mx-auto">
            <Input type="text" name="Street" />
            <Input type="text" name="City" />
            <Input type="date" name="Date of Birth" />
            <Input type="date" name="Zip Code" />
          </form>
        </div>
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
