<template>
  <div class="home">
     
 <list-tasks v-if="$store.state.tasks.length" />

  <no-tasks v-else />

  <btn-done-sort v-if="$store.state.sortTasks" />
  </div>
</template>

<script>

export default {
  name: "Todo",
  components:{
     'list-tasks': require('@/components/Todo/ListTasks.vue').default,
     'no-tasks': require('@/components/Todo/NoTasks.vue').default,
     'btn-done-sort': require('@/components/Todo/BtnDoneSort.vue').default
  },
  methods: {
  
  },
};
</script>

