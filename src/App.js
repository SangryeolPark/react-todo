import { useEffect, useRef, useState } from 'react';

import TodoWindow from './components/TodoWindow/TodoWindow';
import TodoInputSearch from './components/TodoInputSearch/TodoInputSearch';
import TodoList from './components/TodoList/TodoList';
import TodoItem from './components/TodoItem/TodoItem';

import { todoStore, store, trimValue } from './store';

const App = () => {
	const { todos } = todoStore();
	const { searchValue, setIsRemoveChecked } = store();

	let todosLength = todos.length;

	const ulRef = useRef(null);
	const [currentTodosLength, setCurrentTodosLength] = useState(todosLength);
	const [isNearTop, setIsNearTop] = useState(true);

	useEffect(() => {
		checkTodosLength();
		if (todosLength === 0) {
			setIsRemoveChecked(false);
		}
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [todosLength]);
	// 현재 리스트에서 스크롤이 맨 위와 가까운 지 체크
	const isTopOfList = (e) => {
		let ulHeight = ulRef.current.offsetHeight;
		let scrollHeight = ulHeight - 400;
		if (e.target.scrollTop > scrollHeight / 2) {
			setIsNearTop(false);
		} else {
			setIsNearTop(true);
		}
	};

	// 할 일 추가 시 맨 밑으로 스크롤
	const checkTodosLength = () => {
		if (todosLength > currentTodosLength) {
			scrollToBottom();
		}
		setCurrentTodosLength(todosLength);
	};

	const scrollToTop = () => {
		ulRef.current?.scrollIntoView({ block: 'start', behavior: 'smooth' });
	};

	const scrollToBottom = () => {
		ulRef.current?.scrollIntoView({ block: 'end', behavior: 'smooth' });
	};

	let searchResult = todos.filter((todo) => todo.content.toLowerCase().includes(trimValue(searchValue).toLowerCase()));

	let lengthData = {
		totalLength: todos.length,
		searchLength: searchResult.length,
	};

	return (
		<>
			<TodoWindow result={searchResult} top={scrollToTop} bottom={scrollToBottom} isNearTop={isNearTop}>
				<TodoInputSearch />
				<TodoList scroll={isTopOfList} length={lengthData} ulRef={ulRef}>
					{searchResult.map((todo) => (
						<TodoItem todo={todo} key={todo.id} />
					))}
				</TodoList>
			</TodoWindow>
		</>
	);
};

export default App;
