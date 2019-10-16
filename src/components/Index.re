include Css;
module Styles = {
  let container =
    style([
      color(rgba(242, 238, 238, 1.0)),
      minHeight(vh(100.0)),
      overflow(hidden),
    ]);
};

[@react.component]
let make = () => {
  <div className={Styles.container}>
    <Template>
      <Dock/>  
    </Template>
  </div>
};