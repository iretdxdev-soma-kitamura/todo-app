<script setup lang="ts">
const todosStore = useTodosStore()
const { removeTodo } = todosStore
const { todos,todoCount } = storeToRefs(todosStore)
</script>

<template>
  <v-list>
      <v-list-item v-for="(todo, index) in todos" :key="index">
        {{ todo }}
        <v-list-item-action>
          <v-btn @click="removeTodo(index)">削除</v-btn>
        </v-list-item-action>
      </v-list-item>
  </v-list>
  <div v-if="todoCount > 0">
    {{ todoCount }}個のタスクがあります
</div>
</template>

<style scoped>

</style>