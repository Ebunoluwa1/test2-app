import React from 'react'
import styled from 'styled-components'
 
const Wrapper =styled.button`
  border-radius: ${(props) => props.borderRadius  || '8px' };
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : `pointer`)};
  color: ${(props) => props.color || `#ffffff`};
  border: ${(props) =>
    `${props.borderWidth || 1}px solid ${props.outline} !important ` ||
    `0 !important`};
    background: ${(props) =>
    props?.disabled ? '#283590' : props.background || `#f16063`};
  cursor: ${(props) => (props?.disabled ? 'not-allowed' : 'pointer')};
  padding: ${(props) => props.padding || `17px 45px`};
 &:hover{
    opacity: 0.9;
    transform: scale(0.98);
 }
`



const Button = ({ 
    loading,
    extraIcon,
    icon,
    disabled, 
    background, 
    borderRadius,
    borderWidth,
    outline,
    color,
    onClick,
    content,
    style,
    padding ,
     }) => {


  return (
    <Wrapper
    background={background}
    color={color}
    style={style}
    padding={padding}
    outline={outline}
    onClick={disabled ? '' : onClick}
    borderWidth={borderWidth}
    borderRadius={borderRadius}
    disabled={disabled}
    > 
    {loading}
    {icon}
    {content}
    {extraIcon}
    </Wrapper>
  )
}

export default Button