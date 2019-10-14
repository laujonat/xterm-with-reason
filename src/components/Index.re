

[@react.component]
let make = () => {
  let containerStyle = ReactDOMRe.Style.make(~color="#444444", ~minHeight="100vh", ~overflow="hidden", ());
  <div style={containerStyle}>
    <Template name="hello world">
      {React.string("Stuff will go here")}
    </Template>
  </div>
};