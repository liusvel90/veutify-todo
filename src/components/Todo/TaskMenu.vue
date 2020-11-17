<template>
  <div>
    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in menuItems"
          :key="index"
          @click="handleClick(index)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <dialog-edit
      v-if="dialogs.edit"
      :task="task"
      @close="dialogs.edit = !dialogs.edit"
    />

    <dialog-due-date
      v-if="dialogs.dueDate"
      @close="dialogs.dueDate = !dialogs.dueDate"
      :task="task"
     />

    <dialog-delete
      v-if="dialogs.delete"
      :task="task"
      @close="dialogs.delete = !dialogs.delete"
    />
  </div>
</template>

<script>
export default {
  name: "TaskMenu",
  props: {
    task: {
      type: Object,
    },
  },
  data: () => ({
    dialogs: {
      edit: false,
      dueDate: false,
      delete: false,
      sort:false
    },

    menuItems: [
      {
        title: "Edit",
        icon: "mdi-square-edit-outline",
        click() {
          this.dialogs.edit = true;
        },
      },
      {
        title: "Due date",
        icon: "mdi-calendar-edit",
        click() {
         this.dialogs.dueDate = true;
        },
      },
      {
        title: "Delete",
        icon: "mdi-delete",
        click() {
          this.dialogs.delete = true;
        },
      },
      {
      title: "Sort",
      icon: "mdi-drag-horizontal-variant",
      click() {
        if (!this.$store.state.search) {
            this.$store.commit('sortTasks')
        }else{
          this.$store.commit('showSnackbar', 'Clear the search to sort!')
        }
      },
    },
      
    ],
  }),
  methods: {
    handleClick(index) {
      this.menuItems[index].click.call(this);
    },
  },
  components: {
    "dialog-edit": require("@/components/Todo/Dialogs/DialogEdit.vue").default,
    "dialog-due-date": require("@/components/Todo/Dialogs/DialogDueDate.vue")
      .default,
    "dialog-delete": require("@/components/Todo/Dialogs/DialogDelete.vue")
      .default,
  },
};
</script>

