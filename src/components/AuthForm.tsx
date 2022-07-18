import { ChangeEvent, FC, FormEvent } from "react";

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

      <input
        type="email"
        value={email}
        onChange={setEmailHandler}
        placeholder="Enter the email..."
      />
      <input
        type="password"
        value={password}
        onChange={setPasswordHandler}
        placeholder="Enter the password..."
      />

      <button className="btn primary-btn" type="submit">
        Login
      </button>
    </form>
  );
};

export default AuthForm;
