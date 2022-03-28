<template>
<div>
  <button @click="testQuery">test</button>
</div>
</template>
<script lang="ts" setup>
import { useQuery } from '../../src/index'

import axios from 'axios'
const url = 'https://jsonplaceholder.typicode.com/posts'
const fetchTodo = (): Promise<unknown> => {
  return axios.get(url)
}
const useTodoQuery = () => {
  return useQuery('todo', fetchTodo)
}

const { data } = useTodoQuery()

const testQuery = () => {
  console.log(data.value)
}

</script>
