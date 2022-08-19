

import styled from 'styled-components';

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;


  .table-column{
    font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
color: #425466;
padding:15px;
  }
  .ant-table-thead > tr > th{
    font-family: DM Sans;
  font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 18px;
color: #010F07;
  }

  .top-div {
    display: flex;
    justify-content: space-between;
    align-items:center;
    margin-bottom:21px;
    .tableSearch {
      display: flex;
      align-items: center;
      background: #f7f8f9;
      padding: 10px 18px;
      input {
        flex-flow: 1;
        border: 0;
        background: transparent;
        outline: 0;
      }
      svg {
      }
    }
    .td-title {
      font-style: normal;
      font-weight: 500;
    font-size: 20px;
  line-height: 26px;
color: #000;

    }
    .td-button {
        padding: 15px 21px;
        background: 
#B12129;
        border-radius: 8px;
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid 
#B12129;
      }
    }
  
`;

export default TableWrapper;
