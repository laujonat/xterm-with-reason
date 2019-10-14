
let handleClick = (_event) => Js.log("clicked!");

[@react.component];
let make = () => {
  let (count, setCount) = React.useState(() => 0);
  
  <div id="root">
    <p>
      {React.string(" clicked " ++ string_of_int(count) ++ " times")}
    </p>
     <button onClick={_evt => setCount(count => count + 1)}>
      {React.string("Click me")}
    </button>
  </div>;
};