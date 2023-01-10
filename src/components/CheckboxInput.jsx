export const CheckboxInput = ({ label, name, handleChange, value, errors, touched }) => {
    return (
      <label className="space-y-2 w-full mt-8 lg:w-4/5 block mx-auto">
        {label}
        <input
          type="checkbox"
          name={name}
          onChange={handleChange}
          checked={value}
          className={
            errors[name] && touched[name]
              ? "text-input error"
              : "text-input"
          }
        />
        {errors[name] && touched[name] && (
          <div className="input-feedback">{errors[name]}</div>
        )}
      </label>
    );
  }
  