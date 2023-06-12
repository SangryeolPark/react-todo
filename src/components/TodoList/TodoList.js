import { TodoListStyle, TodoListBlank, TodoListUL } from './TodoListStyle';

const TodoList = ({ children, length, ulRef, scroll }) => {
  return (
    // scroll : isTopOfList 현재 리스트의 맨 위로 스크롤 돼 있는지 체크
    <TodoListStyle
      totalLength={length.totalLength}
      onScroll={length.totalLength === 0 || length.searchLength === 0 ? null : scroll}
    >
      {length.totalLength === 0 ? (
        <TodoListBlank>할 일이 없습니다.</TodoListBlank>
      ) : length.searchLength === 0 ? (
        <TodoListBlank>검색 결과가 없습니다.</TodoListBlank>
      ) : (
        <TodoListUL ref={ulRef}>{children}</TodoListUL>
      )}
    </TodoListStyle>
  );
};

export default TodoList;
