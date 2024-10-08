// Generated by Melange

import * as Curry from "melange.js/curry.js";
import * as React from "react";
import * as JsxRuntime from "react/jsx-runtime";

function reducer(state, n) {
  switch (n.TAG | 0) {
    case /* Up */0 :
        return {
                count: state.count + n._0 | 0,
                message: state.message,
                text: state.text
              };
    case /* Down */1 :
        return {
                count: state.count - n._0 | 0,
                message: state.message,
                text: state.text
              };
    case /* Message */2 :
        return {
                count: state.count,
                message: n._0,
                text: state.text
              };
    case /* TextArea */3 :
        return {
                count: state.count,
                message: state.message,
                text: n._0
              };
    
  }
}

function Counter(Props) {
  let title = Props.title;
  const match = React.useReducer(reducer, {
        count: 0,
        message: "(default)",
        text: "hello"
      });
  const dispatch = match[1];
  const state = match[0];
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsxs("div", {
                      children: [
                        title + (" " + (state.text + " Live Count: ")),
                        state.count
                      ],
                      className: "text-sm"
                    }),
                JsxRuntime.jsx("textarea", {
                      className: "h-40 text-sm text-black p-4 m-4",
                      value: state.text,
                      onChange: (function (e) {
                          const target = e.target;
                          Curry._1(dispatch, {
                                TAG: /* TextArea */3,
                                _0: target.value
                              });
                        })
                    }),
                JsxRuntime.jsxs("div", {
                      children: [
                        "content: ",
                        state.message
                      ]
                    })
              ],
              className: "flex flex-col items-center justify-center h-screen bg-black text-white"
            });
}

const make = Counter;

const $$default = Counter;

export {
  reducer ,
  make ,
  $$default as default,
}
/* react Not a pure module */
