import React from 'react'
import Select from 'react-select'

import makeAnimated from 'react-select/animated';
import Button from '../button';
import { SelectInput } from '../input';
import Datas from "./datas.json";
import { Wrapper } from './style';
import { ChevronRight } from '@material-ui/icons';
const animatedComponents = makeAnimated();

const CustomSelect = ({SelectedOption, setSelectedOption}) => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
      
  return (

    <Wrapper onClick={() => setSelectedOption('search')}>
        <div >
        <h2>Multi-selectInput</h2>
         <Select 
           closeMenuOnSelect={false}
           components={animatedComponents}
         isMulti
         options={options} />
         </div>

        <div className='select'>
        <SelectInput 
                  label="State"
                   placeholder="Select State"
                   options={Datas}
                   />
        </div>

        
<Button 
       extraIcon ={<ChevronRight />}
           content="Button"
              background="white"
              color
              borderWidth= '2'
              a href='<CustomSelect />'
                  />
    </Wrapper>

  )
}

export default CustomSelect