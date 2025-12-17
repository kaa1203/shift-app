import { useState } from "react";
import {
  CustomInputWrapper,
  CustomIconWrapper,
  Input,
  Label,
} from "./App.styled";
import { LuEye, LuEyeClosed } from "react-icons/lu";

const CustomInput = ({
  value,
  name,
  label,
  placeholder,
  id,
  handleOnChange,
}) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <CustomInputWrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={showPass ? "text" : "password"}
        placeholder={placeholder}
        name={name}
        id={id}
        value={value[name]}
        onChange={handleOnChange}
      />
      <CustomIconWrapper onClick={() => setShowPass(!showPass)}>
        {showPass ? <LuEye size={20} /> : <LuEyeClosed size={20} />}
      </CustomIconWrapper>
    </CustomInputWrapper>
  );
};

export default CustomInput;
