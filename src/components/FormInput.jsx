const FormInput = ({ label, ...props }) => {
  return (
    <div className="flex items-center w-full h-12 gap-2">
      <label className="w-20 text-lg text-left">{label}</label>
      <input
        autoComplete="off"
        className="flex-1 p-2 border-b rounded-lg focus:outline-none"
        {...props}
      />
    </div>
  );
};

export default FormInput;
