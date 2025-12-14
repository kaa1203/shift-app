import { Fragment, useState } from "react";

import {
  Form,
  FormButton,
  FormHeadingWrapper,
  FormLink,
  GroupedInputWrapper,
  HeadingOne,
  HeadingThree,
  HeadingWrapper,
  Input,
  InputWrapper,
  Label,
  LandingWrapper,
  LeftSide,
  RightSide,
  SmallText,
  SmallTextWrapper,
} from "../components/App.styled";

import Logo from "../components/Logo";
import CustomInput from "../components/CustomInput";

import { useDispatch } from "react-redux";

import { openModal } from "../redux/modalSlice";

const Home = () => {
  const [type, setType] = useState("login");
  const [value, setValue] = useState({});

  const dispatch = useDispatch();

  const formType = {
    login: [
      {
        type: "text",
        placeholder: "Username or Email",
        name: "user",
        id: "user",
        label: "username or email",
      },
      {
        type: "password",
        placeholder: "Password",
        name: "password",
        id: "password",
        label: "password",
      },
    ],
    register: [
      {
        type: "text",
        placeholder: "Fullname",
        name: "fullname",
        id: "fullname",
        label: "fullname",
      },
      {
        type: "text",
        placeholder: "Username",
        name: "username",
        id: "username",
        label: "username",
      },
      {
        type: "email",
        placeholder: "Email",
        name: "email",
        id: "email",
        label: "email",
      },

      [
        {
          type: "password",
          placeholder: "Password",
          name: "password",
          id: "password",
          label: "password",
        },
        {
          type: "password",
          placeholder: "Confirm Password",
          name: "confirmPassword",
          id: "confirmPassword",
          label: "confirm password",
        },
      ],
    ],
  };

  const generateInputs = (arr) => {
    return arr[type].map((val, idx) => {
      if (Array.isArray(val)) {
        return (
          <GroupedInputWrapper key={idx}>
            {val.map(({ type, placeholder, name, id, label }, ind) => {
              return (
                <CustomInput
                  key={ind}
                  type={type}
                  placeholder={placeholder}
                  name={name}
                  id={id}
                  label={label}
                />
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
          />
        );
      }
      return (
        <InputWrapper key={idx}>
          <Label htmlFor={val.id}>{val.label}</Label>
          <Input
            type={val.type}
            placeholder={val.placeholder}
            id={val.id}
            name={val.name}
            autoComplete="off"
          />
        </InputWrapper>
      );
    });
  };

  return (
    <LandingWrapper>
      <LeftSide>
        <Logo style={{ fill: "white", margin: "20px", heigth: "30px" }} />
      </LeftSide>
      <RightSide>
        <FormHeadingWrapper>
          <HeadingOne>
            {type === "login" ? "Welcome back!" : "Get started"}
          </HeadingOne>
          <HeadingThree>
            {type === "login"
              ? "Access your account below."
              : "It only takes a minute"}
          </HeadingThree>
        </FormHeadingWrapper>
        <Form>
          {generateInputs(formType)}

          <FormButton>{type === "login" ? "Sign in" : "Sign up"} </FormButton>
          <SmallTextWrapper>
            <SmallText>
              {type === "login" ? "Don't have an account?" : "Already a user?"}
              <FormLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();

                  setType((prev) =>
                    prev === "register" ? "login" : "register"
                  );
                }}
              >
                {type === "login" ? "Signup here!" : "Signin here!"}
              </FormLink>
            </SmallText>
            {type === "login" && (
              <SmallText>
                <FormLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(openModal({ title: "forgot password" }));
                  }}
                >
                  Forgot password?
                </FormLink>
              </SmallText>
            )}
          </SmallTextWrapper>
        </Form>
      </RightSide>
    </LandingWrapper>
  );
};

export default Home;
