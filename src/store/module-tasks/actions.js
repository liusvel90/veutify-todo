/*
export function someAction (context) {
}
*/

export const setNewTask = ({ commit }, payload) => {
  commit("setNewTask", payload);
};