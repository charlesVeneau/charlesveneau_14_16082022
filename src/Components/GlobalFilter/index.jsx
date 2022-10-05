function GlobalFilter({ filter, setFilter }) {
  return (
    <span>
      Search:{' '}
      <input
        type="text"
        className="p-1 rounded-md m-0 w-48"
        value={filter || ''}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
}

export default GlobalFilter;
