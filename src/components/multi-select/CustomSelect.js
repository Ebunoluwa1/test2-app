import React from 'react'
import Select from 'react-select'

import makeAnimated from 'react-select/animated';
import { Wrapper } from './style';
const animatedComponents = makeAnimated();

const CustomSelect = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
      
  return (

    <Wrapper>
        <div >
      
         <Select 

           closeMenuOnSelect={false}
           components={animatedComponents}
         isMulti
         options={options} />
         </div>
    </Wrapper>

  )
}

export default CustomSelect