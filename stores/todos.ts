import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTodosStore = defineStore('todos', () => {
  const todos = ref<string[]>([])
  const newTodo = ref<string>('')

// タスク追加
  const addTodo = () => {
    if (newTodo.value.trim()) {
      todos.value.push(newTodo.value.trim())
      newTodo.value = ''
    }
  }

// タスク削除
  const removeTodo = (index: number) => {
    todos.value.splice(index, 1)
  }

  const todoCount = computed(() => todos.value.length)

  return {
    todos,
    newTodo,
    addTodo,
    removeTodo,
    todoCount
  }
})