import logo from './logo.svg';
import './App.css';
import Button from './components/button/index';
import {AiOutlineFileWord,AiOutlineDownload, AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner} from '@fortawesome/free-solid-svg-icons'
import Input, { CheckInput, SelectInput } from './components/input';
import CustomSelect from './components/multi-select/CustomSelect';
import Datas from './components/multi-select/datas.json'
import { useState } from 'react';
import Table from './components/table/index'
import { Card, CardNumber, } from './components/card';
import { CardContainer } from './components/card/style';

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
                      {/* <BackButton content="Maintenance/Exco Report" /> */}
                     <CardContainer>
                        <Card 
                        style={{ justifyContent: 'flex-start' }}
                          cardAdd
                          icon
                          //  iconClick={}
                            hText="Maintenance" />
                            <CardNumber text="Total Available Equipment" number="10" />
                            <CardNumber text="Total Maintainance Equipment" number="153" />
                            <CardNumber text="Total Breakdown Equipment" number="3" />
            
                     </CardContainer>

                     <Table 
                          columns={[
        {
          title: 'Equipment Id',
          field: 'equipmentType',
          key: 'equipmentType',
          // render: (item) => (
          //   <span
          //     style={{
          //       textTransform: 'capitalize',
          //     }}
          //   >
          //     {item?.equipmentType?.transactionId || 'Null'}
          //   </span>
          // ),
        },
        {
          title: 'Date',
          field: 'createdAt',
          key: 'createdAt',
          // render: (item) => (
          //   <span>{moment(item?.createdAt).format('MMM Do YY')}</span>
          // ),
        },
        {
          title: 'Location',
          field: 'location',
          key: 'location',
          // render: (item) => (
          //   <span
          //     style={{
          //       textTransform: 'capitalize',
          //     }}
          //   >
          //     {item?.location?.name || 'Null'}
          //   </span>
          // ),
        },
        {
          title: 'SBU',
          field: 'sbu',
          key: 'sbu',
          // render: (item) => (
          //   <span
          //     style={{
          //       textTransform: 'capitalize',
          //     }}
          //   >
          //     {item?.sbu?.name || 'Null'}
          //   </span>
          // ),
        },
        {
          title: 'Equipment',
          field: 'equipmentType',
          key: 'equipmentType',
          // render: (item) => (
          //   <span
          //     style={{
          //       textTransform: 'capitalize',
          //     }}
          //   >
          //     {item?.equipmentType?.name || 'Null'}
          //   </span>
          // ),
        },
        {
          title: 'Status',
          field: 'status',
          key: 'status',
          // render: (item) => (
          //   <span
          //     style={{
          //       textTransform: 'capitalize',
          //     }}
          //   >
          //     {item?.status || 'Null'}
          //   </span>
          // ),
        },

        // {
        //   title: '',
        //   field: 'action',
        //   key: 'action',
        //   render: (item) => (
            
        //     <DropDownMenu
        //       selected={item}
        //       handleDropOptions={handleDropOptions}
        //       options={[{ label: 'Update Status', id: 'status' }]}
        //     />
        //   ),
        // },
      ]}/>
    </div>
  );
}

export default App;
