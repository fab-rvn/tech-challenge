import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
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

const SignUpForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <FormWrapper>
        <FormContent>
          <FormH1>Sign Up</FormH1>
          <FormWrap onSubmit={handleSubmit(onSubmit)}>
            <FormLabel>Fist Name</FormLabel>
            <FormInput
              name="firstName"
              type="text"
              placeholder="Enter your first name"
              onChange={(e) => setValue("firstName", e.target.value)}
              {...register("firstName", {
                required: "Please enter your first name",
              })}
              error={errors.firstName}
            />
            {errors.firstName && (
              <ErrorMsg>{errors.firstName.message}</ErrorMsg>
            )}

            <FormLabel>Last Name</FormLabel>
            <FormInput
              name="lastName"
              type="text"
              placeholder="Enter your last name"
              onChange={(e) => setValue("lastName", e.target.value)}
              {...register("lastName", {
                required: "Please enter your last name",
              })}
              error={errors.lastName}
            />
            {errors.lastName && <ErrorMsg>{errors.lastName.message}</ErrorMsg>}

            <FormLabel>Email</FormLabel>
            <FormInput
              name="email"
              type="text"
              placeholder="Enter your email"
              onChange={(e) => setValue("email", e.target.value)}
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
              onChange={(e) => setValue("password", e.target.value)}
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
            <FormLabel>Confirm Password</FormLabel>
            <FormInput
              name="confirmPassword"
              type="password"
              placeholder="Repeat your password"
              onChange={(e) => setValue("confirmPassword", e.target.value)}
              {...register("confirmPassword", {
                minLength: {
                  value: 6,
                  message: "Password must be al least 6 char long", // JS only: <p>error message</p> TS only support string
                },
                required: "Please enter a repeated password",
              })}
              error={errors.confirmPassword}
            />
            {errors.confirmPassword && (
              <ErrorMsg>{errors.confirmPassword.message}</ErrorMsg>
            )}
            <Button>Sign In</Button>
            <LinkWrap>
              <Link to={ROUTES.SIGN_IN}>Already have an account? Sign In</Link>
            </LinkWrap>
          </FormWrap>
        </FormContent>
      </FormWrapper>
    </Container>
  );
};

export default SignUpForm;