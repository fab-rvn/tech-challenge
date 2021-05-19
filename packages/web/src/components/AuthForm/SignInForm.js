import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { resetAuthState, signIn } from "../../redux/auth/authActions";
import { authSelector } from "../../redux/auth/authSelector";
import * as ROUTES from "../../routes";
import Button from "../Button";
import {
  Container,
  ErrorMsg,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  FormWrapper,
  LinkWrap,
} from "./styles";

const SignInForm = () => {
  const dispatch = useDispatch();
  const { isSigningUp, signUpError, isAuthenticated } = useSelector(
    authSelector,
  );
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    mode: "onBlur",
  });

  useEffect(() => {
    dispatch(resetAuthState());
  }, [dispatch]);

  const onSubmit = data => {
    dispatch(signIn(data));
  };

  if (isAuthenticated) {
    return <Redirect to={ROUTES.HOME} />;
  }

  return (
    <Container>
      <FormWrapper>
        <FormContent>
          <FormH1>Sign In</FormH1>
          <FormWrap onSubmit={handleSubmit(onSubmit)}>
            <FormLabel>Email</FormLabel>
            <FormInput
              name="email"
              type="email"
              placeholder="Enter your email"
              onChange={e => setValue("email", e.target.value)}
              {...register("email", {
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a correct email address",
                },
                required: "Please enter your email",
              })}
              error={errors.email}
            />
            {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
            <FormLabel>Password</FormLabel>
            <FormInput
              name="password"
              type="password"
              placeholder="Enter your password"
              onChange={e => setValue("password", e.target.value)}
              {...register("password", {
                minLength: {
                  value: 6,
                  message: "Password must be al least 6 char long", // JS only: <p>error message</p> TS only support string
                },
                required: "Please enter a password",
              })}
              error={errors.password}
            />
            {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
            {signUpError && <ErrorMsg>{signUpError}</ErrorMsg>}
            <Button primary disabled={isSigningUp}>
              Sign In
            </Button>
            <LinkWrap>
              <Link to={ROUTES.SIGN_UP}>
                Don&apos;t have an account? Sign Up
              </Link>
            </LinkWrap>
          </FormWrap>
        </FormContent>
      </FormWrapper>
    </Container>
  );
};

export default SignInForm;
