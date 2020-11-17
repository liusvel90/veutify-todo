<template>
  <v-text-field
    v-model="newTaskTitle"
    @click:append="addTask()"
    @keyup.enter="addTask()"
    class="pa-3 field-add-task"
    placeholder="Add task"
    clearable
    hide-details
    outlined
  >
    <template v-slot:append>
      <v-icon @click="addTask()" :disabled="newTaskTitleInvalid"
        >mdi-plus</v-icon
      >
    </template>
  </v-text-field>
</template>
<script>
import { uuid } from "vue-uuid";

export default {
  name: "FieldAddtask",
  data: () => ({
    newTaskTitle: "",
  }),

  methods: {
    /* Add Task */
    addTask() {
      if (!this.newTaskTitleInvalid) {
        let newTask = {
          id: uuid.v1(),
          title: this.newTaskTitle,
          done: false,
          dueDate: null
        };

        this.$store.dispatch("addTask", newTask);
        this.newTaskTitle = "";
      }
    },
  },

  computed: {
    newTaskTitleInvalid() {
      return !this.newTaskTitle || !this.newTaskTitle.trim();
    },
  },
};
</script>

<style lang="sass">
.field-add-task.v-input--is-focused
  .v-input__slot
   background: rgba(31, 94, 129, 0.5)

</style>