/*
export function someMutation (state) {
}
*/
export function setNewTask(state, payload) {
  state.tasks.push(payload)
}

