import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import { Refresh } from "styled-icons/material/Refresh";
import { Github } from "styled-icons/fa-brands/Github";

export const ForkButton = styled.a`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  width: 130px;
  height: 130px;
  background: #09f;
  transform: rotate(45deg) translateY(-70%);
  box-shadow: rgba(0, 0, 0, 0.15) 0 2px 5px;
  display: flex;
  justify-content: center;
  padding: 8px;

  ${Github} {
    height: 36px;
    color: #fff;
    align-self: flex-end;
  }
`;

export const Container = styled.div`
  padding: 30px;
  text-align: left;
  font-family: "Poppins", sans-serif;
  max-width: 900px;
  margin: 0 auto;
  color: rgba(48, 42, 56, 0.8);
  font-size: 16px;
`;

export const H1 = styled.h1`
  font-weight: 400;
  font-size: 36px;
  padding-bottom: 30px;
  border-bottom: solid #eee 1px;
  line-height: 1em;
  padding-right: 30px;
  color: #302a38;

  &:after {
    vertical-align: middle;
    content: attr(data-version);
    font-size: 14px;
    font-weight: 600;
    background: #09f;
    color: #fff;
    padding: 0 5px;
    height: 24px;
    border-radius: 3px;
    margin-left: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 0 2px 5px;
  }

  a {
    text-decoration: none;
    color: #302a38;
  }
`;

export const H2 = styled.h2`
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;
  margin: 20px 0 10px 0;
  display: flex;
  justify-content: space-between;
  color: #302a38;
`;

export const RefreshButton = styled.button`
  border: none;
  background: transparent;
  font-size: 16px;
  color: rgba(48, 42, 56, 0.8);
  outline: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: color 0.15s;
  position: relative;

  &:hover {
    color: #302a38;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: -10px;
  }

  ${Refresh} {
    border: none;
    border-radius: 5px;
    width: 24px;
    height: 24px;
    font-size: 24px;
    line-height: 19px;
    margin-right: 5px;
  }
`;

export const UserAgent = styled(TextareaAutosize).attrs({
  placeholder: "Enter a user agent..."
})`
  background: #f1eff3;
  display: block;
  box-shadow: inset rgba(0, 0, 0, 0.15) 0 2px 5px;
  width: 100%;
  border: none;
  padding: 20px 30px;
  font-family: monospace;
  font-size: 16px;
  border-radius: 5px;
  outline: none;
  color: rgba(48, 42, 56, 0.8);
  resize: none;

  @media only screen and (max-width: 600px) {
    width: calc(100% + 60px);
    margin-left: -30px;
    border-radius: 0;
  }
`;
export const Result = styled.pre`
  font-size: 16px;
  margin-bottom: 10px;
  border-radius: 5px;
  background: #302a38;
  box-shadow: rgba(0, 0, 0, 0.35) 0 10px 30px, rgba(0, 0, 0, 0.15) 0 2px 5px;

  .react-json-view {
    overflow-x: scroll;
    padding: 30px;
    filter: grayscale(100%);
    background: none !important;
  }

  @media only screen and (max-width: 600px) {
    width: calc(100% + 60px);
    margin-left: -30px;
    border-radius: 0;
  }
`;
