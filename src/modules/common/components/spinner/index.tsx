import { Fragment } from 'react';
import styled from 'styled-components';

const SpinnerInner = styled.div`
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: #d49f0c;
  background: -moz-linear-gradient(left, #d49f0c 10%, rgba(212,159,12, 0) 42%);
  background: -webkit-linear-gradient(left, #d49f0c 10%, rgba(212,159,12, 0) 42%);
  background: -o-linear-gradient(left, #d49f0c 10%, rgba(212,159,12, 0) 42%);
  background: -ms-linear-gradient(left, #d49f0c 10%, rgba(212,159,12, 0) 42%);
  background: linear-gradient(to right, #d49f0c 10%, rgba(212,159,12, 0) 42%);
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  position: fixed;
  z-index: 99998;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  &:before {
    width: 50%;
    height: 50%;
    background: #d49f0c;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }

  &:after {
    background: #ffffff;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  @-webkit-keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 99999;
`;

export default function Spinner() {
  return (
    <Fragment>
      <Overlay />
      <SpinnerInner />
    </Fragment>
  );
}
