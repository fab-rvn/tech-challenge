import styled from "styled-components";
import { COLOR } from "../../styles/colors";

export const Container = styled.div`
  background: ${COLOR.background};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const FormWrapper = styled.div`
  width: 100vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    height: 80%;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    padding: 24px 0;
  }
`;

export const FormH1 = styled.h1`
  color: ${COLOR.deepPurple500};
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  max-width: 80%;
  margin: 24px auto;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const FormWrap = styled.form`
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  @media screen and (max-width: 480px) {
    padding: 32px 16px;
  }
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: ${COLOR.text};
`;

export const FormInput = styled.input`
  padding: 10px;
  margin-bottom: 24px;
  border: none;
  border-radius: 4px;
  outline: ${({ error }) => error && `none`};
  border: ${({ error }) => error && `1px solid ${COLOR.danger700}`};
  &:active,
  &:focus {
    outline: ${({ error }) => !error && `1px solid ${COLOR.deepPurple300}`};
  }
`;

export const LinkWrap = styled.div`
  text-align: right;
  margin-top: 16px;
  & * {
    text-decoration: none;
    font-size: 14px;
    color: ${COLOR.textSecondary};
  }
  @media screen and (max-width: 480px) {
    text-align: center;
  }
`;

export const ErrorMsg = styled.p`
  color: ${COLOR.danger900};
  background: ${COLOR.danger100};
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  margin-top: -16px;
  margin-bottom: 24px;
  padding: 16px;
  &.last {
    margin-top: -24px;
    margin-bottom: 32px;
  }
`;
