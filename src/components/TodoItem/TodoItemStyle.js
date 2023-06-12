import styled, { css } from 'styled-components';

const commonButtonStyle = `
    font-size: 18px;
    height: 40px;
    width: 50px;
    margin-left: 10px;
    border: none;
    color: white;
    border-radius: 5px;`;

const commonCheckButtonStyle = `
    width: 28px;
    height: 28px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: white;`;

const DeleteButton = styled.button`
  ${commonButtonStyle}
  background: red;
  display: none;
`;

const TodoItemStyle = styled.li`
  background: ${(props) => (props.check ? 'lightgray' : 'white')};
  width: 638px;
  height: 58px;
  border: 1px solid lightgray;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  ${(props) =>
    !props.selected &&
    css`
      &:hover ${DeleteButton} {
        display: block;
      }
    `}
  &:last-child {
    margin-bottom: 0;
  }
`;

const CheckButton = styled.div`
  ${commonCheckButtonStyle}
  border: ${(props) => (props.check ? '1px solid green' : '1px solid lightgray')};
  margin-left: 10px;
  background: ${(props) => (props.check ? 'green' : 'white')};
  color: white;
`;

const CheckDeleteButton = styled.div`
  ${commonCheckButtonStyle}
  border: ${(props) => (props.check ? '1px solid red' : '1px solid lightgray')};
  margin-left: auto;
  margin-right: 10px;
  background: ${(props) => (props.check ? 'red' : 'white')};
`;

const Date = styled.span`
  font-size: 18px;
  width: 120px;
  margin-left: 10px;
  text-align: center;
`;

const ContentSpan = styled.span`
  font-size: 18px;
  width: 370px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 10px;
  text-decoration: ${(props) => (props.check ? 'line-through' : 'none')};
`;

const ContentInput = styled.input`
  font-size: 18px;
  width: 310px;
  height: 20px;
  padding: 10px;
  margin: 10px;
  margin-right: 0;
  background: papayawhip;
  border: none;
  outline: none;
  border-radius: 5px;
  ::placeholder {
    color: palevioletred;
  }
`;

const Button = styled.button`
  ${commonButtonStyle}
  background: ${(props) => props.btnColor};
`;

export {
  DeleteButton,
  TodoItemStyle,
  CheckButton,
  CheckDeleteButton,
  Date,
  ContentSpan,
  ContentInput,
  Button,
};
