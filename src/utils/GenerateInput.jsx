import {
  GroupedInputWrapper,
  Input,
  InputWrapper,
  Label,
  TextArea,
} from "../components/App.styled";
import CustomInput from "../components/CustomInput";

const generateInput = (arr, handleOnChange, value) => {
  return arr.map((val, idx) => {
    if (Array.isArray(val)) {
      return (
        <GroupedInputWrapper key={idx}>
          {val.map(({ type, placeholder, name, id, label, style }, ind) => {
            if (type === "password") {
              return (
                <CustomInput
                  key={ind}
                  type={type}
                  placeholder={placeholder}
                  name={name}
                  id={id}
                  label={label}
                  value={value[name]}
                  handleOnChange={handleOnChange}
                />
              );
            }

            if (val.type === "textarea") {
              return (
                <InputWrapper key={idx}>
                  {val.label && <Label htmlFor={val.id}>{val.label}</Label>}
                  <TextArea
                    placeholder={val.placeholder}
                    id={val.id}
                    name={val.name}
                    autoComplete="off"
                    onChange={handleOnChange}
                    $style={style}
                  />
                </InputWrapper>
              );
            }

            return (
              <InputWrapper key={ind}>
                <Label htmlFor={id}>{label}</Label>
                <Input
                  type={type}
                  placeholder={placeholder}
                  id={id}
                  name={name}
                  autoComplete="off"
                  onChange={handleOnChange}
                />
              </InputWrapper>
            );
          })}
        </GroupedInputWrapper>
      );
    }

    if (val.type === "password") {
      return (
        <CustomInput
          key={idx}
          type={val.type}
          placeholder={val.placeholder}
          name={val.name}
          id={val.id}
          label={val.label}
          value={value[name]}
          handleOnChange={handleOnChange}
        />
      );
    }

    if (val.type === "textarea") {
      return (
        <InputWrapper key={idx}>
          {val.label && <Label htmlFor={val.id}>{val.label}</Label>}
          <TextArea
            placeholder={val.placeholder}
            id={val.id}
            name={val.name}
            autoComplete="off"
            onChange={handleOnChange}
            $style={val.style}
          />
        </InputWrapper>
      );
    }

    return (
      <InputWrapper key={idx}>
        {val.label && <Label htmlFor={val.id}>{val.label}</Label>}
        <Input
          type={val.type}
          placeholder={val.placeholder}
          id={val.id}
          name={val.name}
          autoComplete="off"
          onChange={handleOnChange}
        />
      </InputWrapper>
    );
  });
};
export default generateInput;
