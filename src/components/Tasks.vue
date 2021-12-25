<template>
  <div :for="(task, index)in tasks" :key="index">
    <h3>{{task.title}}</h3>
  </div>
</template>

<script>
export default {
  name: 'Tasks',
  props:{
    tasks: Array
  }

}
</script>

<style>

</style>