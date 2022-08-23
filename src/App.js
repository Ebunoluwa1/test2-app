import logo from './logo.svg';
import './App.css';
import Button from './components/button/index';

import { useState } from 'react';
import Table from './components/table/index'
import { Card, CardNumber, } from './components/card';
import { CardContainer } from './components/card/style';
import { TableContainer } from './components/table/style';
import ModalForm from './components/modal';
import { ChevronRight } from '@material-ui/icons';

function App() {
  const [selectedOption, setSelectedOption] = useState('search')
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="App">
                 <CardContainer>
                        <Card 
                        style={{ justifyContent: 'flex-start' }}
                        cardAdd
                        icon
                        iconClick={
                         () => {showModal()}
                      }
                        hText="Maintenance"
                             />
                        <CardNumber text="Total Available Equipment" number="10" />
                        <CardNumber text="Total Maintainance Equipment" number="153" />
                        <CardNumber text="Total Breakdown Equipment" number="3" />
            </CardContainer>

                    <TableContainer>
                      <Table showModal = {showModal} 
                      />
                  </TableContainer> 

                  {showModal && (
                        <ModalForm handleOk={ handleOk}
                        handleCancel={handleCancel} 
                        isModalVisible ={isModalVisible}
                        setIsModalVisible={ setIsModalVisible}
                       />
                      )}

<Button 
       extraIcon ={<ChevronRight />}
           content="Button"
              background="white"
              onClick={() => setSelectedOption(search)}
              color
              borderWidth= '2'
              a href='<CustomSelect />'
                  />

      {selectedOption ==='search' ? <CustomSelect
       selectedOption={selectedOption}
        setSelectedOption={setSelectedOption} /> : '' }

    </div>
  );
}

export default App;
