const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React"
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" },
    React.createElement(
      "h1",
      { id: "child" },
      "this is first tag created using create Element"
    )
  ),
  React.createElement(
    "div",
    { id: "child" },
    React.createElement(
      "h1",
      { id: "child" },
      "this is second tag created using create Element"
    )
  ),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
