// https://github.com/reasonml-community/bs-socket.io/blob/master/example/ExampleClient.re
[@bs.send] external toString: Js.t('a) => string = "toString";

module Event = {
  type eventT;
  let isEnterKey: eventT => bool = [%bs.raw
    {|
    function (e) {
      return e.which === 13;
    }
    |}
  ];
};

module Element = {
  type elementT;
  [@bs.set] external setInnerHTML: (elementT, string) => unit = "innerHTML";
  [@bs.get] external getInnerHTML: elementT => string = "innerHTML";
  [@bs.set] external setValue: (elementT, string) => unit = "value";
  [@bs.get] external getValue: elementT => string = "value";
  [@bs.send]
  external addEventListener: (elementT, string, Event.eventT => unit) => unit =
    "addEventListener";
};

module Document = {
  [@bs.val]
  external getElementById: string => Element.elementT =
    "document.getElementById";
  [@bs.val]
  external addEventListener: (string, Event.eventT => unit) => unit =
    "document.addEventListener";
};

module Window = {
  type intervalIdT;
  [@bs.val]
  external setInterval: (unit => unit, int) => intervalIdT =
    "window.setInterval";
  [@bs.val]
  external clearInterval: intervalIdT => unit = "window.clearInterval";
};

