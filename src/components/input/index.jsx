import React from 'react'
import Wrapper from './style';

const Input = ({
    type,
    label,
    className,
    value,
    leftIcon,
    rightIcon,
    placeholder,
    disabled,
    onChange,
    labelClassName,
    inputClassName,
  as,

}) => {
     
    return (
        <Wrapper leftIcon={leftIcon} rightIcon={rightIcon}>
           <div className={`input-container ${className  || ''}`} >
         
           {label && (
               <div className={`input-label ${labelClassName  || ''}`}>
                   {label}
                </div>
           )}
           
           {as || (
          <div className="inputBoxWrap">
                {leftIcon} <br />
                <input
                className={inputClassName}
                type={type}
                value={value}
                onChange={onChange}
                disabled={disabled}
                placeholder={placeholder}
                />
                {rightIcon}
          </div>
        )}

           </div>
        </Wrapper>

    );
};

export default Input;


 export const SelectInput = ({ 
    placeholder,
    leftIcon,
    rightIcon,
    label,
    options,
    onChange,
    inputClassName,
    className,
    labelClassName,
    value,
    labelName,
    optionValue,
    defaultValue,
    inputWrapper,
    disabled,
}) => {
    return (
        <Wrapper leftIcon={leftIcon} rightIcon={rightIcon}>
          <div className={`input-container ${className || ''}`}>

            {label && (
              <div className={`input-label ${labelClassName || ''}`}>{label}</div>
            )}

            <div className={`inputBoxWrap ${inputWrapper}`}>
              {leftIcon}
              <select
                className={inputClassName}
                onChange={(e) => onChange(e.target.value)}
                value={value}
                defaultValue={defaultValue}
                style={{
                  textTransform: 'capitalize',
                }}
                disabled={disabled}
              >
                <option value="">{placeholder}</option>
                {options?.length
                  ? options.map((option) => (
                      <option
                        key={Math.random()}
                        value={option[optionValue] || option?.id}
                      >
                        {option[labelName] || option.label || option?.name}
                      </option>
                    ))
                  : ''}
              </select>
              {rightIcon}
            </div>
          </div>
        </Wrapper>
      );
 };

 export const CheckInput = ({
    label,
    labelClassName,
    inputClassName,
    checked,
    onChange,
    className,
  }) => {
    return (
      <Wrapper>
        <div className={`check-wrapper ${className || ''}`}>
          <input
            type="checkbox"
            checked={checked}
            className={`check-input ${inputClassName || ''}`}
            onChange={onChange}
          />
          <div className={`check-label ${labelClassName || ''}`}>{label}</div>
        </div>
      </Wrapper>
    );
  };

  