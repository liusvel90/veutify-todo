<template>
  <div>
    <v-img
      gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
      src="space01.jpg"
      height="170"
      class="pa-4 pt-7"
    >
        <v-avatar class="mb-2"  size="70">
          <img src="https://avatars3.githubusercontent.com/u/25093790?s=460&u=fa88fe0e116a42aa43883c209bd69706fe41e271&v=4"
           alt="John" />
        </v-avatar>
        <div class="white--text text-subtitle-1 font-weight-bold"> 
          Carlos Martinez </div>
        <div class="white--text text-subtitle-2">
           @cmartinezone </div>
    </v-img>

    <v-list dense nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :to="item.to"
        exact
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "DrewMenu",
  data: () => ({
    items: [
      {
        title: "Todos",
        icon: "mdi-format-list-checks",
        to: "/",
      },
      {
        title: "About",
        icon: "mdi-information-outline",
        to: "/About",
      },
    ],
  }),
};
</script>

<style>
</style>