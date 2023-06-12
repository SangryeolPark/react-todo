import styled from 'styled-components';

const TodoListStyle = styled.div`
  position: relative;
  background: white;
  width: 100%;
  height: ${(props) => (props.totalLength === 0 ? '451px' : '400px')};
  border-radius: 5px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  overflow-x: hidden;
`;

const TodoListBlank = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TodoListUL = styled.ul`
  list-style: none;
  padding: 10px;
  margin: 0;
`;

export { TodoListStyle, TodoListBlank, TodoListUL };
