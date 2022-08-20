import React from 'react'
import { Plus } from '../../assets/svg'
import {
    CardAddContainer,
    CardAddIconContainer,
    CardAddText,
    CardNumberContainer,
    CardNumberTextMd,
    CardNumberTextSm,
    CardScreenContainer,
    CardWrapper,
  } from './style';

export const CardScreen = ({ children }) => 
  (
    <CardScreenContainer>{children}</CardScreenContainer>
  );

  export const CardAdd = ({ text, onClick }) => (
    <CardAddContainer onClick={onClick}>
      <CardAddIconContainer>
        <Plus />
      </CardAddIconContainer>
      <CardAddText>{text}</CardAddText>
    </CardAddContainer>
  );

  export const CardNumber = ({ text, number }) => (
    <CardNumberContainer>
      <CardNumberTextSm>{text}</CardNumberTextSm>
      <CardNumberTextMd>{number}</CardNumberTextMd>
    </CardNumberContainer>
  );

  
export const Card = ({
    cardAdd,
    pText,
    icon,
    hText,
    wrapperClick,
    iconClick,
    style,
  }) => (
    <CardWrapper style={style} cardAdd={cardAdd} onClick={wrapperClick}>
      {icon ? (
        <div className="card-icon" onClick={iconClick}>
          <Plus />
        </div>
      ) : (
        ''
      )}
  
      {cardAdd ? (
        <div className="card-content">
          {hText ? <h2>{hText}</h2> : ''}
          {pText ? <p>{pText}</p> : ''}
        </div>
      ) : (
        <>
          {pText ? <p>{pText}</p> : ''}
          {hText ? <h2>{hText}</h2> : ''}
        </>
      )}
    </CardWrapper>
  );