const Fwinputs = ({ label, placeholder }) => {
  return (
    <div className="py-3">
      <label htmlFor="" className="text-sm pb-1 block">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className=" text-sm bg-slate-300 border-b-2 text-slate-500 border-bhblue p-3 w-full"
      />
    </div>
  );
};

export default Fwinputs;
