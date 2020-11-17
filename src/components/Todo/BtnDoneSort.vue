<template>
  <v-btn 
  class="btn-done-sort"
  color="primary"
  @click="$store.commit('sortTasks')">
    Done Sorting 
  </v-btn>
</template>

<script>
export default {
  name:'DoneSort',
}
</script>

<style lang="sass">
  .btn-done-sort
    position: fixed
    bottom: 20px
    left: 50%
    transform: translateX(-50%)
</style>