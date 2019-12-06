include Css;

module Styles = {
  let container =
    style([
      borderStyle(solid),
      borderWidth(px(2)),
      bottom(zero),
      height(px(100)),
      position(fixed),
      left(px(0)),
      textAlign(center),
      right(px(0)),
    ]);

  let root =
    style([
      backgroundColor(darkblue),
      color(rgba(242, 238, 238, 1.0)),
      overflow(scroll),
    ]);

  let footer =
    style([
      color(rgba(242, 238, 238, 1.0)),
      backgroundColor(darkblue),
      borderStyle(solid),
      borderWidth(px(2)),
      bottom(zero),
      height(px(100)),
      position(fixed),
      left(px(0)),
      textAlign(center),
      right(px(0)),
    ]);
};