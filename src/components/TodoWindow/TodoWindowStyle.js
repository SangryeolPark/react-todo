import styled from 'styled-components';

const TodoWindowStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* width: 700px;
    margin: 0 auto;
    position: relative; */
`;

const TodoTitle = styled.div`
  border-radius: 10px;
  position: relative;
  background: lightgray;
  color: black;
  margin-bottom: 10px;
  font-size: 30px;
  padding: 0 20px;
  height: 80px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoCountDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  & > span {
    font-size: 20px;
  }
`;

const TodoContent = styled.div`
  border-radius: 10px;
  padding: 20px;
  background: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UpButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 40px;
  font-size: 25px;
  text-align: center;
  line-height: 40px;
  background: black;
  color: white;
  display: ${(props) => (props.scrollable ? 'block' : 'none')};
`;

export { TodoWindowStyle, TodoTitle, TodoCountDiv, TodoContent, UpButton };
