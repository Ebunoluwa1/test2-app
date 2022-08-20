import styled from 'styled-components';

export const CardScreenContainer = styled.div`
  background-color: #fff;
  width: 100%;
  /* height: 474px; */
  min-height: 474px;
  /* max-height: 741px;
  overflow: auto; */
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const CardAddContainer = styled.div`
  padding: 39px 21px;
  display: flex;
  flex: 1;
  align-items: center;
  column-gap: 17px;
  background-color: #ebefff;
  border-radius: 10px;
  min-width: 258px;
  width: 258px;
  cursor: pointer;
`;
export const CardAddIconContainer = styled.div`
  width: 60px;
  height: 60px;
  min-width: 60px;
  min-height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b12129;
`;

export const CardAddText = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

export const CardNumberContainer = styled.div`
  background: #ffffff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  border-radius: 10px;
  padding: 39px 21px;
  min-width: 258px;
  flex: 1;
  cursor: pointer;
`;
export const CardNumberTextSm = styled.div`
  font-size: 14px;
`;
export const CardNumberTextMd = styled.div`
  font-size: 36px;
  font-weight: 700;
`;

export const CardWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => (props.cardAdd ? '#ebefff' : '#ffffff')};
  height: 137px;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 300ms ease;
  display: flex;
  align-items: ${(props) => (props.cardAdd ? 'center' : 'flex-start')};
  justify-content: ${(props) => (props.cardAdd ? 'center' : 'space-between')};
  flex-direction: ${(props) => (props.cardAdd ? 'row' : 'column')};
  border-radius: 10px;
  padding: ${(props) => (props.cardAdd ? '38px 21px' : '32px')};
  &:hover {
    border: 1px solid #4c70ff8a;
    transform: translateY(-3px);
  }
  .card-icon {
    background-color: #b12129;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
  }
  h2 {
    font-style: normal;
    font-weight: ${(props) => (props.cardAdd ? '500' : 'bold')};
    font-size: ${(props) => (props.cardAdd ? '20px' : '36px')};
    line-height: ${(props) => (props.cardAdd ? '26px' : '47px')};
    color: #000000;
    margin-bottom: 2px;
  }

  .card-content {
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 18px;
      color: #000000;
    }
    h2 {
      font-style: normal;
      font-weight: ${(props) => (props.cardAdd ? '500' : 'bold')};
      font-size: ${(props) => (props.cardAdd ? '20px' : '36px')};
      line-height: ${(props) => (props.cardAdd ? '26px' : '47px')};
      color: #000000;
      margin-bottom: 2px;
    }
  }
  @media (max-width: 688px) {
    width: 100%;
    margin: 0 0 10px 0;
  }
`;

export const Wrapper = styled.div``;


export const CardContainer = styled.div`
  display: flex;
  column-gap: 10px;
  justify-content: space-between;
  margin-top: 22px;
  padding: 10px 20px;
  margin-bottom: 46px;
 
  @media (max-width: 872px) {
    display: flex;
    flex-direction: column;
  }
`