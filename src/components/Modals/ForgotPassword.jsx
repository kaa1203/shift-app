import { LuKeyRound, LuX } from "react-icons/lu";
import {
  Button,
  HeadingThree,
  Input,
  Label,
  InputWrapper,
  ModalBody,
  ModalButton,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Form,
} from "../App.styled";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/modalSlice";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const handleOnSave = () => {};
  const handleOnChange = () => {};
  return (
    <>
      <ModalHeader>
        <ModalTitle>
          <LuKeyRound size={25} />
          <HeadingThree>change password</HeadingThree>
        </ModalTitle>
        <Button onClick={() => dispatch(closeModal())}>
          <LuX size={25} />
        </Button>
      </ModalHeader>
      <ModalBody>
        <Form>
          <InputWrapper>
            <Label htmlFor="email">email</Label>
            <Input
              type="email"
              placeholder="Enter email address"
              id="email"
              name="email"
              autoComplete="off"
              onChange={handleOnChange}
            />
          </InputWrapper>
        </Form>
      </ModalBody>
      <ModalFooter>
        <ModalButton $colored={true} onClick={handleOnSave}>
          submit
        </ModalButton>
        <ModalButton onClick={() => dispatch(closeModal())}>cancel</ModalButton>
      </ModalFooter>
    </>
  );
};

export default ForgotPassword;
