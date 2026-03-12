const EmployeeSearch = () => {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Search employees by name, ID, department, or position..."
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-slate-300"
      />
    </div>
  );
};

export default EmployeeSearch;
