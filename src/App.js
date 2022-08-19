import logo from './logo.svg';
import './App.css';
import Button from './components/button/index';
import {AiOutlineFileWord,AiOutlineDownload, AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner} from '@fortawesome/free-solid-svg-icons'
import Input, { CheckInput, SelectInput } from './components/input';
import CustomSelect from './components/multi-select/CustomSelect';
import Datas from './components/multi-select/datas.json'
import { useState } from 'react';
import Table from './components/table';

function App() {
  const [selectedOption, setSelectedOption] = useState(null)
   
  return (
    <div className="App">
      <h1>Hi I am The Reuseable Components</h1>
      <Button 
          loading={ <FontAwesomeIcon icon={faSpinner} className='fa-spin' />}
             content="Loading"
              background="#ddd"
              outline="#ddd"
              borderWidth= '2'
              borderRadius='16px'
              padding='10px 20px'
                                />
        <Button 
          icon={<AiOutlineFileWord /> }
          extraIcon ={<AiOutlineDownload />}
           content="Button"
              background="blue"
              outline="blue"
              borderWidth= '2'
                  />
                  <Input placeholder='enter name'
                      leftIcon={<AiOutlineLeft />}
                      rightIcon={<AiOutlineRight />}
                         label='Product Name'
                  />
                  <SelectInput 
                   
                   label="State"
                   placeholder="Select State"
                   options={Datas
                    // .map(data => {
                    // return (
                    //     <div key={data.id}>
                    //       {data.name}
                    //       </div>
                    // ) 
                    // })
                    }
                   />
                   
                   <CustomSelect 
                     />
                     <Table />

    </div>
  );
}

export default App;
