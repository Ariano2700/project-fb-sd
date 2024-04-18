import { InputLoginRegisterProps } from "../Types/FormTypes";

const InputForm = (props: InputLoginRegisterProps & { styleProp?: string }) => {
  const { placeholder, name, onChange, type, icon, styleProp } = props;

  return (
    <div className="w-full relative">
      <input
        className={`${styleProp}`}
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
        required
      />
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-p500">
        {icon}
      </span>
    </div>
  );
};
export default InputForm;
