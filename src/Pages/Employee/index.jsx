function Employee() {
  return (
    <article className="col-span-3 flex justify-center align-middle my-4 mx-8">
      <form action="" className="bg-white rounded-lg w-4/5 shadow">
        <label htmlFor="firstname">First Name</label>
        <input type="text" name="firstname" id="firstname" required />
        <button type="submit">Save</button>
      </form>
    </article>
  );
}

export default Employee;
