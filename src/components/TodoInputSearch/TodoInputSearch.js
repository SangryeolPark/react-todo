import { useRef, useState } from 'react';
import { TodoInputSearchStyle, TodoInputSearchDiv, Input, Button } from './TodoInputSearchStyle';

import { todoStore, store, trimValue } from '../../store';

const TodoInputSearch = () => {
  const { todos, addTodos, cancelCheckTodos, cancelToggleTodos, clearTodos, removeCheckTodos } =
    todoStore();
  const { searchValue, setSearchValue, isRemoveChecked, setIsRemoveChecked } = store();

  const [todoValue, setTodoValue] = useState('');
  const inputRef = useRef(null);

  // 할 일 추가
  const add = () => {
    const trimmedValue = trimValue(todoValue);
    if (trimmedValue.replaceAll('\u00a0', '') === '') {
      alert('내용은 비어있을 수 없습니다.');
      setTodoValue('');
      inputRef.current.focus();
    } else {
      addTodos(trimmedValue);

      setTodoValue('');
      inputRef.current.focus();
    }
  };

  const keyPressAdd = (e) => {
    if (e.key === 'Enter') {
      add();
    }
  };

  // 할 일 모두 삭제
  const clear = () => {
    if (window.confirm('모든 할 일을 지우시겠습니까?')) {
      clearTodos();
      setSearchValue('');
    }
  };

  const removeSelected = () => {
    cancelToggleTodos();
    setIsRemoveChecked(true);
  };

  const removeChecked = () => {
    let remind = ``;
    let checked = todos.filter((todo) => todo.checked === true);
    checked.forEach((todo) => {
      remind += `'${todo.date} / ${todo.content}'\n`;
    });
    remind += `${checked.length}개의 할 일을 삭제하시겠습니까?`;
    if (window.confirm(remind)) {
      removeCheckTodos();
      cancelRemove();
    }
  };

  const cancelRemove = () => {
    cancelCheckTodos();
    setIsRemoveChecked(false);
  };

  return (
    <>
      <TodoInputSearchStyle>
        <TodoInputSearchDiv>
          <Input
            autocomplete="off"
            ref={inputRef}
            type="text"
            value={todoValue}
            onChange={(e) => setTodoValue(e.target.value)}
            onKeyPress={keyPressAdd}
            placeholder="할 일을 입력하세요."
          />
          <Button
            type="button"
            style={todos.length === 0 ? { width: '110px' } : null}
            onClick={add}
          >
            등록
          </Button>
          {todos.length !== 0 ? (
            <Button onClick={clear} type="button" delete>
              리셋
            </Button>
          ) : null}
        </TodoInputSearchDiv>
        {todos.length !== 0 ? (
          <TodoInputSearchDiv style={{ marginTop: '10px' }}>
            <Input
              autocomplete="off"
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="검색"
            />
            {isRemoveChecked ? (
              <>
                <Button onClick={removeChecked} delete>
                  삭제
                </Button>
                <Button onClick={cancelRemove} style={{ background: 'black' }}>
                  취소
                </Button>
              </>
            ) : (
              <Button onClick={removeSelected} style={{ width: '110px', background: 'black' }}>
                선택 삭제
              </Button>
            )}
          </TodoInputSearchDiv>
        ) : null}
      </TodoInputSearchStyle>
    </>
  );
};

export default TodoInputSearch;
