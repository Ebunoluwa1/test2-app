import React from 'react'
import Select from 'react-select'

import makeAnimated from 'react-select/animated';
import { SelectInput } from '../input';
import Datas from "./datas.json";
import { Wrapper } from './style';
const animatedComponents = makeAnimated();

const CustomSelect = ({SelectedOption, setSelectedOption}) => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
      
  return (

    <Wrapper     onClick={() => setSelectedOption('search')}>
        <div >
      
         <Select 
           closeMenuOnSelect={false}
           components={animatedComponents}
         isMulti
         options={options} />
         </div>

         <SelectInput 
                  label="State"
                   placeholder="Select State"
                   options={Datas}
                   />
    </Wrapper>

  )
}

export default CustomSelect