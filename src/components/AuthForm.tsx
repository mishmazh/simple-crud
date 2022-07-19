import { ChangeEvent, FC, FormEvent } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";

interface AuthFormProps {
  email: string;
  password: string;
  setEmailHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  setPasswordHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmitHandler: (e: FormEvent) => void;
}

const AuthForm: FC<AuthFormProps> = ({
  email,
  password,
  setEmailHandler,
  setPasswordHandler,
  onSubmitHandler,
}) => {
  return (
    <form className="auth-form" onSubmit={onSubmitHandler}>
      <div className="auth-form__title">Authorization</div>

      <Input
        type="email"
        value={email}
        onChange={setEmailHandler}
        placeholder="Enter the email..."
      />
      <Input
        type="password"
        value={password}
        onChange={setPasswordHandler}
        placeholder="Enter the password..."
      />

      <Button className="primary-btn" type="submit">
        Login
      </Button>
    </form>
  );
};

export default AuthForm;
