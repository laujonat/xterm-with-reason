include Styles;

[@react.component]
let make = () => {
  <div className={Styles.container}>
    <Template>
      <Dock/>  
    </Template>
  </div>
};