[@react.component]
let make = (~name, ~children) => {
  <div style=(ReactDOMRe.Style.make(~paddingBottom="2.5rem", ()))> 
    <p>{React.string("Hello, " ++ name)}</p> 
    children 
  </div>;
};

