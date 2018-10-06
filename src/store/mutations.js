export const set = (state, content) => {
  state[content.var] = content.val;
  console.log(`state.${content.var} set to ${JSON.stringify(content.val)}`);
};
