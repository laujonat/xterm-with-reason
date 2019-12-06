include Styles;

[@react.component]
let make = () => {
  <div className={Styles.footer}>
      {React.string("OCaml syntax with React-Reason")}
  </div>;
};
