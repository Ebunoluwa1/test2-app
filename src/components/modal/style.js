import styled from 'styled-components'

export const Wrapper = styled.div`
  .inputContainer{
    width: 100%;
    margin: 20px 0px;
  }
  .time{
      width: 100%;
      border: 1px solid black;
      border-radius: 8px;
      display: flex;
      align-items: center;
      padding:  15px;
    }
`
export const Title = styled.p`
  height: 26px;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: #000000;
 padding-bottom: 40px;
  border-bottom: 1px solid #ddd;
`
export const HeaderContainer = styled.div`
/* width: 315px; */
padding: 10px;
`
export const Header= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: left;
  background-color: #d8d8d8;
  border-radius: 10px;
  padding: 12px 15px ;
`

export const StyledButton = styled.button`
  padding: 9px 15px ;
  border-radius: 6px;
  color: #000000;
  text-align: center;
  font-weight: 500;
`;