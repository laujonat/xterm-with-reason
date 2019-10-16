include Css;
module Styles = {
  let container = style([
    color(rgba(242, 238, 238, 1.0)),
    minHeight(vh(100.0)),
    overflow(hidden)
  ]);

  let bg = style([
    background(rgb(224, 224, 224)),
    bottom(px(0)),
    left(px(0)),
    position(fixed),
    right(px(0))
  ]);

  let dock =
    style([
      borderColor(white),
      borderStyle(solid),
      borderWidth(px(2)),
      bottom(px(0)),
      position(fixed),
      height(px(100)),
      left(px(0)),
      textAlign(center),
      right(px(0))
    ]);
};

[@react.component]
let make = () => {
  <div className={Styles.container}>
    <div className={Styles.bg}>
      <div className={Styles.dock}>
        <div>{React.string("OCaml syntax with React-Reason")}</div>
      </div>
    </div>
  </div>;
};
