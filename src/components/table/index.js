import React from 'react';
import moment from 'moment'
import { Sbu, Location,Equipment, equipmentType, systemTypes, Status } from './data'
import Wrapper from './style';
import Input from '../input';
import SearchIcon from '@mui/icons-material/Search';
import Button from '../button';

const Table = ({
  showModal
}) => {
 

  return (
    <>
      <Wrapper>
      <Input 
        rightIcon={<SearchIcon />}
              />
      <table>
  
      <thead>
        <tr>
        <th>Date</th>
        <th>Equipment Id</th>
        <th>Location</th>
        <th>SBU</th>
        <th>Equipment</th>
        <th>Status</th>
        </tr>
        </thead>

      <tbody>
         <tr>
           <td>{systemTypes.slice(0,5).map(item => {
              return (
                <div>{moment(item?.createdAt).format('MMM Do YY')}</div>
              )
           })}</td>  
           <td>{Equipment.slice(0,5).map(item => {
              return (
                <div>{item?.transactionId}</div>
              )
           })}</td>  
             <td>{Location.slice(0,5).map(item => {
              return (
                <div>  {item?.name }</div>
              )
           })}</td> 
              <td>{Sbu.slice(0,5).map(item => {
              return (
                <div>  {item?.name }</div>
              )
           })}</td> 
            <td>{equipmentType.slice(0,5).map(item => {
              return (
                <div>{item?.name}</div>
              )
           })}</td>  
            <td>{Status.slice(0,5).map(item => {
              return (
                <div onClick={showModal}><span>{item?.status}</span></div>
             )
           })}</td> 
         </tr>
      </tbody>
      </table>
        
    </Wrapper>
   </> 
  );
};

export default Table;
