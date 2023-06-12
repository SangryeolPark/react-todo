import * as style from './TodoListStyle';

const TodoList = ({ children, length, ulRef, scroll }) => {
	return (
		// scroll : isTopOfList 현재 리스트의 맨 위로 스크롤 돼 있는지 체크
		<style.TodoListStyle totalLength={length.totalLength} onScroll={length.totalLength === 0 || length.searchLength === 0 ? null : scroll}>
			{length.totalLength === 0 ? <style.TodoListBlank>할 일이 없습니다.</style.TodoListBlank> : length.searchLength === 0 ? <style.TodoListBlank>검색 결과가 없습니다.</style.TodoListBlank> : <style.TodoListUL ref={ulRef}>{children}</style.TodoListUL>}
		</style.TodoListStyle>
	);
};

export default TodoList;
