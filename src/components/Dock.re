
include Css;
module Styles = {
  let card = style([
    display(flexBox),
    flexDirection(column),
    alignItems(stretch),
    boxShadow(Shadow.box(~y=px(3), ~blur=px(5), rgba(0, 0, 0, 0.3))),
    /* You can add non-standard and other unsafe style declarations using the `unsafe` function, with strings as the two arguments. */
    unsafe("-webkit-overflow-scrolling", "touch"),
    /* You can place all your theme styles in Theme.re and access as normal Reason module */
  ]);

  let title = style([
    fontSize(rem(1.5)),
    marginBottom(em(2.0))
  ]);

  let actionButton = disabled =>
    style([
      background(disabled ? darkgray : white),
      color(white),
      border(px(1), solid, black),
      borderRadius(px(3)),
    ])
};

[@react.component]
let make = () => {
  let containerStyle =
    ReactDOMRe.Style.make(
      ~color="#f2eeee",
      ~minHeight="100vh",
      ~overflow="hidden",
      (),
    );
  <div style={containerStyle} className={Styles.card}>
    <Template name="hello world">
      {React.string("Stuff will go here")}
    </Template>
  </div>;
};
