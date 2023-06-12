import styled from 'styled-components';

const TodoInputSearchStyle = styled.div`
  background: white;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const TodoInputSearchDiv = styled.div`
  display: flex;
`;

const Input = styled.input`
  width: 500px;
  font-size: 18px;
  padding: 10px;
  background: papayawhip;
  border: none;
  outline: none;
  border-radius: 5px;
  ::placeholder {
    color: palevioletred;
  }
`;

const Button = styled.button`
  width: 50px;
  font-size: 18px;
  border: none;
  background: ${(props) => (props.delete ? 'red' : 'blue')};
  color: white;
  border-radius: 5px;
  margin-left: 10px;
`;

export { TodoInputSearchStyle, TodoInputSearchDiv, Input, Button };
