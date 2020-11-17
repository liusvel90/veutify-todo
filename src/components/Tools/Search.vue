<template>
  <v-text-field
     :value="$store.state.search"
     @input="$store.commit('setSearch', $event)"
     @focus="searchClosed = false"
     @blur="searchClosed = true && !$store.state.search"
    class="expanding-search md-1"
    :class="{'closed' : searchClosed}"
    :disabled ="$store.state.sortTasks"
    placeholder="Search"
    dense
    prepend-inner-icon="mdi-magnify"
    filled
    clearable
  >
  </v-text-field>
</template>
<script>
import { uuid } from "vue-uuid";

export default {
  name: "Search",
  data: () => ({
    searchInput: null,
    searchClosed:true
  }),
};
</script>

<style lang="sass">
  .expanding-search
    transition: max-width 0.3s
    .v-input__slot
      cursor: pointer !important
      &:before, &:after
        border-color: transparent !important
    &.closed
      max-width: 45px
      .v-input__slot
        background: transparent !important
</style>