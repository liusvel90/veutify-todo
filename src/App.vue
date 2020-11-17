<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="openDrawer" mobile-breakpoint="768" app>
      <navegation-drawer-content />
    </v-navigation-drawer>

    <v-app-bar
      color="primary"
      src="space01.jpg"
      app
      dark
      flat
      prominent
      :height="$route.path === '/' ? '238' : '170' "
    >
      <v-container class="header-container pa-0">
        <v-row>
          <v-app-bar-nav-icon
            @click="openDrawer = !openDrawer"
          ></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <search-box />
        </v-row>

        <v-row>
          <v-toolbar-title class="ml-4 text-h4">{{ $store.state.appTitle}}</v-toolbar-title>
        </v-row>

        <v-row>
          <live-date-time />
        </v-row>

        <v-row v-if="$route.path === '/'">
            <field-add-task/>
        </v-row>
      </v-container>

      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        ></v-img>
      </template>
    </v-app-bar>

    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container class="pa-0">
        <!-- If using vue-router -->
        <router-view></router-view>
        <snackbar />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    openDrawer: null
  }),

  components: {
    "navegation-drawer-content": require("@/components/Global/NavegationDrawer.vue")
      .default,
    "search-box": require("@/components/Tools/Search.vue").default,
    'field-add-task': require('@/components/Todo/FieldAddTask.vue').default,
    "live-date-time": require("@/components/Tools/LiveDateTime.vue").default,
    snackbar: require("@/components/Global/Snackbar.vue").default,
  },

  mounted () {
      this.$store.dispatch('getTasks')
  },
};
</script>

<style lang="sass">
.header-container
  max-width: none !important
</style>