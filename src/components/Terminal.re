// import { Terminal } from 'xterm';

[@react.component]
let make = (~name) => {
  let (count, setCount) = React.useState(() => 0);

  <div>
    {React.string(name ++ " clicked " ++ string_of_int(count) ++ " times")}
    <button onClick={_ => setCount(_ => count + 1)}>
      {React.string("Click me")}
    </button>
  </div>;
};
[]