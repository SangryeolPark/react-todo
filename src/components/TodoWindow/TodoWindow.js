import { TodoWindowStyle, TodoTitle, TodoCountDiv, TodoContent, UpButton } from './TodoWindowStyle';
import { todoStore, store, trimValue } from '../../store';

const TodoWindow = ({ children, result, top, bottom, isNearTop }) => {
  const { todos } = todoStore();

  const { searchValue, isRemoveChecked } = store();

  const filterComplete = (data) => {
    return data.filter((todo) => todo.complete === true);
  };

  let restTodosLength = todos.length - filterComplete(todos).length;
  let searchRestTodosLength = result.length - filterComplete(result).length;

  // 배열 길이에 따른 리스트 스크롤 여부 체크
  let isScrollable = todos.length > 5 && result.length > 5;

  return (
    <>
      <TodoWindowStyle>
        <TodoTitle>
          <span>To Do List</span>
          <TodoCountDiv>
            {todos.length === 0 ? (
              ''
            ) : trimValue(searchValue) === '' ? (
              <span>
                남은 할 일 : {restTodosLength} / {todos.length} 개
              </span>
            ) : (
              <span>
                검색된 남은 할 일 : {searchRestTodosLength} / {result.length} 개
              </span>
            )}
            {isRemoveChecked ? (
              <span>삭제할 할 일 : {todos.filter((todo) => todo.checked).length}개</span>
            ) : null}
          </TodoCountDiv>
        </TodoTitle>
        <TodoContent>{children}</TodoContent>
        <UpButton scrollable={isScrollable} onClick={isNearTop ? bottom : top}>
          {isNearTop ? '⬇' : '⬆'}
        </UpButton>
      </TodoWindowStyle>
    </>
  );
};

export default TodoWindow;
