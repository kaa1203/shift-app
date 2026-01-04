import { Fragment, useState } from "react";

import {
  CarouselItemWrapper,
  Form,
  FormButton,
  FormHeadingWrapper,
  FormLink,
  GroupedInputWrapper,
  HeadingOne,
  HeadingThree,
  HeadingTwo,
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
import Carousel from "../components/Carousel";
import generateInput from "../utils/generateInput";

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
          name: "regPassword",
          id: "regPassword",
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

  const generateItems = (items) => {
    return items.map(({ header, subtitle }) => (
      <CarouselItemWrapper>
        <HeadingTwo $color="var(--off-white)">{header}</HeadingTwo>
        <HeadingThree $color="white">{subtitle}</HeadingThree>
      </CarouselItemWrapper>
    ));
  };

  const items = [
    {
      header: "Your thoughts, at your pace",
      subtitle: "No pressure. No noise",
    },
    {
      header: "Write without expectations",
      subtitle: "One sentence or a whole page",
    },
    {
      header: "Messy ideas welcome",
      subtitle: "Save it now. Organize it later",
    },
    {
      header: "Progress, gently",
      subtitle: "Small steps still move you forward",
    },
    {
      header: "Patterns, not labels",
      subtitle: "Understand how you feel over time",
    },
  ];

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const notEmpty = Object.fromEntries(
      Object.entries(value).filter(
        ([_, v]) => v !== "" && v !== undefined && v !== null
      )
    );

    console.log(notEmpty);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const FORM_CONFIG = {
    login: {
      h1: "Welcome back!",
      h3: "Access your account below.",
      button: "Sign in",
      smallText: "Don't have an account?",
      link: "Sign up here!",
      forgot: true,
    },
    register: {
      h1: "Get started.",
      h3: "It only takes a minute.",
      button: "Sign up",
      smallText: "Already a user?",
      link: "Sign in here!",
      forgot: false,
    },
  };

  return (
    <LandingWrapper>
      <LeftSide>
        <Logo style={{ fill: "white", margin: "20px", height: "25px" }} />
        <Carousel
          items={generateItems(items)}
          duration={4000}
          hasControl={false}
        />
      </LeftSide>
      <RightSide>
        <FormHeadingWrapper>
          <HeadingOne>{FORM_CONFIG[type].h1}</HeadingOne>
          <HeadingThree>{FORM_CONFIG[type].h3}</HeadingThree>
        </FormHeadingWrapper>
        <Form $width="74%	">
          {generateInput(formType[type], handleOnChange, value)}

          <FormButton type="submit" onClick={handleOnSubmit}>
            {FORM_CONFIG[type].button}
          </FormButton>
          <SmallTextWrapper>
            <SmallText>
              {FORM_CONFIG[type].smallText}
              <FormLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();

                  setType((prev) =>
                    prev === "register" ? "login" : "register"
                  );
                }}
              >
                {FORM_CONFIG[type].link}
              </FormLink>
            </SmallText>
            {FORM_CONFIG[type].forgot && (
              <SmallText>
                <FormLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(openModal({ type: "FORGOT_PASSWORD" }));
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
