<script setup lang="ts">
const todosStore = useTodosStore()
const { addTodo } = todosStore
const { newTodo } = storeToRefs(todosStore);
  </script>

<template>
    <v-form @submit.prevent="addTodo">
      <v-text-field v-model="newTodo" label="新しいToDo" />
      <v-btn type="submit" color="primary">ToDoを追加</v-btn>
    </v-form>
  </template>
  
  <style scoped>

</style>