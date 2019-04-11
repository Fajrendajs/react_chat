const initState = {
  projects: [
    { id: 1, title: "help me find peach", content: "blah blah blah" },
    { id: 2, title: "help me find plum", content: "blah blah blah 2" },
    { id: 3, title: "help me find apple", content: "blah blah blah 3" }
  ]
};

export const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
};
