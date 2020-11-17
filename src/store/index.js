import Vue from "vue";
import Vuex from "vuex";

/* IndexedDB 'LocalBase'*/
import Localbase from "localbase";
let db = new Localbase("db");
db.config.debug = false

/* Import Vuex Modules */
import Tasks from "./module-tasks";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appTitle: process.env.VUE_APP_TITLE,
    appVersion: "1.0",
    search: null,
    tasks: [],
    sortTasks: false,
    snackbar: {
      show: false,
      msg: "",
    },
  },
  mutations: {
    /* Set Tasks */
    setTasks(state, payload) {
      state.tasks = payload;
    },
    /* Set Search */
    setSearch(state, payload) {
      state.search = payload;
    },

    /* Add task */
    addTask(state, payload) {
      // console.log(payload);
      state.tasks.push(payload);
    },

    /* Complete task */
    doneTask(state, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },

    /* Delete task */
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },

    /* Show snackbar */
    showSnackbar(state, msg) {
      let timeout = 0;

      if (state.snackbar.show) {
        state.snackbar.show = false;
        timeout = 300;
      }

      setTimeout(() => {
        state.snackbar = { show: true, msg: msg };
      }, timeout);
    },

    /* Hide snackbar */
    resetSnackbar(state) {
      state.snackbar = { show: false, msg: "" };
    },

    /* Save Task Edited */
    updateTask(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.title = payload.title;
    },

    /* Update Task due date */
    updateTaskDueDate(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.dueDate = payload.dueDate;
    },

    /* Enable Sort Tasks */
    sortTasks(state) {
      state.sortTasks = !state.sortTasks;
    },

    /* Set Tasks Order by Dragable */
    setTasksOrder(state, payload) {
      console.log(payload);
      state.tasks = payload;
    },
  },
  actions: {
    /* Get tasks from Indexed db 'LocalBase' */
    getTasks({ commit }, payload) {
      db.collection("mytasks")
        .get()
        .then((tasks) => {
          commit("setTasks", tasks);
        });
    },

    /* Add new Task */
    addTask({ commit }, payload) {
      db.collection("mytasks")
        .add(payload)
        .then(() => {
          commit("addTask", payload);
          let msg = "Task has been saved!";
          commit("showSnackbar", msg);
        });
    },

    /* Set task as done */
    doneTask({ state, commit }, payload) {
      // let task = state.tasks.filter((task) => task.id === id)[0];
      db.collection("mytasks")
        .doc({ id: payload.id })
        .update({
          done: !payload.done,
        })
        .then(() => {
          commit("doneTask", payload.id);
        });
    },

    /* Update task */
    updateTask({ commit }, payload) {
      db.collection("mytasks")
        .doc({ id: payload.id })
        .update({
          title: payload.title,
        })
        .then(() => {
          commit("updateTask", payload);
          let msg = "Task has been updated!";
          commit("showSnackbar", msg);
        });
    },

    /* Update task DueDate */
    updateTaskDueDate({ commit }, payload) {
      db.collection("mytasks")
        .doc({ id: payload.id })
        .update({
          dueDate: payload.dueDate,
        })
        .then(() => {
          commit("updateTaskDueDate", payload);
          let msg = "Due date updated!";
          commit("showSnackbar", msg);
        });
    },

    /* Delete task */
    deleteTask({ commit }, id) {
      db.collection("mytasks")
      .doc({ id: id })
      .delete().then(() => {
        let msg = "Task has been deleted!";
        commit("deleteTask", id);
        commit("showSnackbar", msg);
      })
    },

    
    /* Sort Tasks */
    setTasksOrder({commit}, payload){
      db.collection('mytasks').set(payload)
      commit('setTasks', payload)
    }
  },
  getters: {
    /* Filter tasks */
    tasksFiltered(state) {
      if (!state.search) {
        return state.tasks;
      }
      return state.tasks.filter((task) =>
        task.title.toLowerCase().includes(state.search.toLowerCase())
      );
    },
  },
  modules: {
    // Tasks
  },
});
