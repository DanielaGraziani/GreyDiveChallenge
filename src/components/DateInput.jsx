export const DateInput = ({ label, name, handleChange, value, errors, touched }) => {
    return(
    <label className="space-y-2 w-full lg:w-4/5 block mx-auto mt-3">
      {label}:
      <input
        type="date"
        name={name}
        onChange={handleChange}
        value={value}
        className={`${errors[name] && touched[name] ? "text-input error error-input" : "text-input"} ${`bg-yellow-100 lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full  focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400 text-center`}`}
      />
      {errors[name] && touched[name] && (
        <div className="input-feedback">{errors[name]}</div>
      )}
    </label>
  );
}
  