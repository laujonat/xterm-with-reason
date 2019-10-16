// import { Terminal } from 'xterm';
// import "/node_modules/xterm/dist/xterm.js";
// [@bs.module "/node_modules/xterm/dist/xterm.js"][@react.component]

// [@react.component]
// let make = (~name) => {
//   let (count, setCount) = React.useState(() => 0);

//   <div>
//     {React.string(name ++ " clicked " ++ string_of_int(count) ++ " times")}
//     <button onClick={_ => setCount(_ => count + 1)}>
//       {React.string("Click me")}
//     </button>
//   </div>;
// };
// []

[@react.component] [@bs.module]
external make: (~root: string) => React.element = "Terminal.react"