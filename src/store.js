import { create } from "zustand";
import { persist } from "zustand/middleware";
import dayjs from "dayjs";

const todoStore = create(
    persist(
        (set) => ({
            todos: [],
            // 할 일 추가
            addTodos: (content) =>
                set((state) => ({
                    todos: [
                        ...state.todos,
                        {
                            id: Date.now(),
                            complete: false,
                            date: dayjs(new Date()).format("YYYY-MM-DD"),
                            content: content,
                            selected: false,
                            checked: false,
                        },
                    ],
                })),
            // 할 일 수정창 여부
            toggleTodos: (id, bool) =>
                set((state) => ({
                    todos: state.todos.map((todo) => (todo.id === id ? { ...todo, selected: bool } : todo)),
                })),
            cancelToggleTodos: () =>
                set((state) => ({
                    todos: state.todos.map((todo) => ({ ...todo, selected: false })),
                })),
            // 할 일 삭제 체크
            checkTodos: (id) =>
                set((state) => ({
                    todos: state.todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)),
                })),
            // 할 일 삭제 체크 취소
            cancelCheckTodos: () =>
                set((state) => ({
                    todos: state.todos.map((todo) => ({ ...todo, checked: false })),
                })),
            // 할 일 선택 삭제
            removeCheckTodos: () =>
                set((state) => ({
                    todos: state.todos.filter((todo) => todo.checked === false),
                })),
            // 할 일 수정
            editTodos: (id, content) =>
                set((state) => ({
                    todos: state.todos.map((todo) => (todo.id === id ? { ...todo, content: content, selected: false } : todo)),
                })),
            // 할 일 완료 체크
            completeTodos: (id) =>
                set((state) => ({
                    todos: state.todos.map((todo) => (todo.id === id ? { ...todo, complete: !todo.complete } : todo)),
                })),
            // 할 일 일괄 삭제
            clearTodos: () => set({ todos: [] }),
            // 할 일 삭제
            removeTodos: (id) =>
                set((state) => ({
                    todos: state.todos.filter((todo) => todo.id !== id),
                })),
        }),
        {
            name: "todos-storage",
            getStorage: () => localStorage,
        }
    )
);

const store = create((set) => ({
    searchValue: "",
    setSearchValue: (content) => set({ searchValue: content }),
    isRemoveChecked: false,
    setIsRemoveChecked: (bool) => set(() => ({ isRemoveChecked: bool })),
    editTodoValue: todoStore.getState().todos.map((todo) => ({ id: todo.id, content: todo.content })),
}));

const trimValue = (content) => {
    return content.trim().replaceAll(" ", "\u00a0");
};

export { todoStore, store, trimValue };
