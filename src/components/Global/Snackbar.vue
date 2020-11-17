<template>
<div class="text-center ma-2">
  <v-snackbar v-model="$store.state.snackbar.show">
    {{ $store.state.snackbar.msg }}

    <template v-slot:action="{ attrs }">
      <v-btn text v-bind="attrs" @click="$store.commit('resetSnackbar')">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</div>
</template>

<script>
export default {
  name: "SnackBar"
};
</script>


<style lang="sass">
  div.v-snack:not(.v-snack--absolute)
    height: 100%
</style>