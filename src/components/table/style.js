import styled from 'styled-components';

const TableWrapper = styled.div`

table{
    font-family: Arial, Helvetica, sans-serif;
border-collapse: collapse;
    width: 100%;
}

thead{
  margin-top: 20px;
  th{
    border-bottom:1px #dddddd solid;
    text-align: left;
    padding: 8px;
  
}
}
tbody{
  td{
    div{
      border-bottom:1px #dddddd solid;
    text-align: left;
    padding: 15px;
    }
    span{
      font-size: 14px;
     border: 1px solid  #b12129;
     padding: 8px 12px;
     border-radius: 16px;
       color: #b12129;
       /* #425466; */
     &:hover{
      opacity: 0.9;
      transform: scale(48.9%);
      background: lightgray;
     }
    }
  }
}

   
.striped:nth-child(even){
    background-color: #dddddd;
}


`;

export default TableWrapper;

export const TableContainer = styled.div`
padding: 10px 20px;

`;
