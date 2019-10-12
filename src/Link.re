let component = ReasonReact.statelessComponent("Link");

[@react.component];
let make = () => {
  ...component,
  render: (_self) =>
    ReactDOMRe.createDOMElementVariadic(
      "div",
      ~props=ReactDOMRe.domProps(),
      [||]
    ),
};
