import React from 'react';
import styled from 'styled-components';
import { typeScale } from '../utils';
import { Illustrations, CloseIcon } from '../assets';
import { PrimaryButton } from './Buttons';
import { useSpring, animated, config } from 'react-spring';

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0,0,0,0.2);
  background-color: ${props => props.theme.formElementBackground};
  color: ${props => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  align-items: center;
  border-radius: 2px;
`;

const SignUpHeader = styled.h3`
  font-size = ${typeScale.header3};
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph}
  max-width: 70%;
  text-align:center;
`;

const CloseModalButton = styled.div`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 24px;
  height: 24px;
  padding: 0;
`;

export const SignUpModal = ({ showModal, setShowModal }) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? 'translateY(0)' : `translateY(-200%)`,
    config: config.slow,
  })
  return (
    <animated.div style={animation}>
      <ModalWrapper>
        <img src={Illustrations.SignUp} alt='signu for an accounr' aria-hidden='true' />
        <SignUpHeader>Sign Up</SignUpHeader>
        <SignUpText>Sign up today to get access</SignUpText>
        <PrimaryButton>Sign UP!</PrimaryButton>
        <CloseModalButton onClick={setShowModal}>
          <CloseIcon />
        </CloseModalButton>
      </ModalWrapper>
    </animated.div>
  )
}