<template>
  <div class="about pa-6">
    <h1>About {{$store.state.appTitle}}</h1>
    <p> Version:
     {{$store.state.appVersion}}
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
  // ...mapState('Tasks',['appVersion'])
  },
}
</script>