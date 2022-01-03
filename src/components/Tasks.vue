<template>
  <div class="parentBox">
    <div v-for="task in tasks" :key="task.id">
      <div class="box">
        <div class="inside">
          <font-awesome-icon icon="arrow-alt-circle-right" :style="{color: '6C63FF'}"/> {{task.title}}
        </div>
        <div class="inside">
          {{task.desc}}
        </div>

      </div>
    
    </div>
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

<style lang="scss" scoped>

.parentBox{
  display: flex;
  width: 80%;
  flex-direction: column;
}

#forward path{
  fill:#6C63FF;
}

.box{
display: flex;
flex-direction: row;
background-color: #F2F7FF;
padding: 10px;
margin:10px;
border-bottom: 1px solid #6C63FF;
@media (max-width: 598px) {
    flex-direction: column;
    }
  .inside{
    flex-direction: column;
    flex-basis: 60%;
    padding: 10px;
    margin:10px;
  }

}
</style>