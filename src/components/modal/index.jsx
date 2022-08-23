import React, { useState } from 'react'
import {  StyledButton,Header, HeaderContainer, Title, Wrapper } from './style'
import Button from '../button/index'
import { Modal, DatePicker} from 'antd'
import 'antd/dist/antd.css'; 
import { SelectInput  } from '../input';
import Record, { Sbu, Location,Equipment, equipmentType, systemTypes, Status } from '../table/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner} from '@fortawesome/free-solid-svg-icons'


const ModalForm = ({ 
   isModalVisible, 
   setIsModalVisible, handleCancel,handleOk}) => {
 
    
  
    const[loading, setLoading] = useState(false)
    const[disabled, setDisabled] = useState(false)

    const handleSubmit = (e) => {
    
      e.preventDefault()
      setLoading(true)
        setTimeout(() => {
          setLoading(false)
          
          setIsModalVisible(!isModalVisible)
        }, 2000)
    }
  

  return (
    <>
      
      <Modal 
      visible={isModalVisible} 
      onOk={handleOk}
       onCancel={handleCancel}
       footer={null}
       width={800}
       >
       <Wrapper>
            <Title> Maintenance Input </Title>
        <HeaderContainer>
            <Header>
              <StyledButton
                as="a"
                href="/location"
                style={{ color: 'red', background: '#fff' }}
              >
                Location
              </StyledButton>
              <StyledButton as="a" href="/system-type">
                System Type
              </StyledButton>
            </Header>
          </HeaderContainer>

          
            <div>
              <h3>Location</h3>
               <SelectInput 
                   placeholder="Select location"
                   options={Location}
                    />
            </div>
            <div>
                <h3>Equipment</h3>
               <SelectInput
                   placeholder="Select Equipment"
                   options={Equipment}
                    />
            </div>
            <div>
               <h3>Equipment Type</h3>
               <SelectInput
                   placeholder="Select Equipment Type"
                   options={equipmentType}
                    />
            </div>
            <div>
             <h3>Status</h3>
               <SelectInput 
                   placeholder="Select status"
                   options={[
                    {status: 'Maintenance'},
                    {status: 'Available'},
                    {status: 'Breakdown'}
                   ]}
                    />
            </div>
            <div className='inputContainer'>
              <DatePicker  format="YYYY-MM-DD"
              className="time"/>
            </div>
         
              <Button 
               disabled={disabled ? loading : ''}
               loading = {loading ?  <FontAwesomeIcon icon={faSpinner} className='fa-spin' /> : ''}
               background="blue"
               outline="blue"
               onClick={loading  ? '' : handleSubmit }
               borderWidth= '2'
               content= {loading ? '': 'Submit'}
                 />
         
          </Wrapper>
      </Modal>
    </>
  )
}


export default ModalForm
