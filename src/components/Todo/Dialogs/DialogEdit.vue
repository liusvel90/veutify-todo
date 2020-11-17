<template>
<v-dialog :value="true" persistent max-width="290">
  <v-card>
    <v-card-title class="headline">Edit Task</v-card-title>
    <v-card-text>Edit the title of this task:
      <v-text-field v-model="taskTitle" @keyup.enter="updateTask()" />
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn text @click="$emit('close')"> Cancel </v-btn>
      <v-btn @click="updateTask()" :disabled="textTitleInvalid" color="primary darken-1" text>
        Save</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</template>

<script>
export default {
  name: "DialogEdit",
  props: {
    task: {
      type: Object,
    },
  },
  data: () => ({
    taskTitle: '',
  }),
  methods: {
    updateTask() {

      if (!this.textTitleInvalid) {
        let payload = {
          id: this.task.id,
          title: this.taskTitle,
        };

        this.$store.dispatch("updateTask", payload);
        this.$emit("close");
        this.$vuetify.goTo(0, { duration: 0 })
      }
    },
  },
  mounted() {
    this.taskTitle = this.task.title;
  },

  computed: {
    textTitleInvalid() {
      return (
        !this.taskTitle || 
        !this.taskTitle.trim() ||
        this.taskTitle == this.task.title 
      );
    },
  },
};
</script>

<style>
</style>
