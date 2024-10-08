// Generated by Melange

import * as Button from "@/components/ui/button";
import * as Curry from "melange.js/curry.js";
import * as Melange__Episodes from "./episodes.js";
import * as Stdlib__Array from "melange/array.js";
import * as React from "react";
import * as JsxRuntime from "react/jsx-runtime";

function dangerousHtml(html) {
  return {
          __html: html
        };
}

function reducer(state, param) {
  return {
          expanded: !state.expanded,
          other: state.other
        };
}

function Podcast$EpisodeComp(Props) {
  let episode = Props.episode;
  const match = React.useReducer(reducer, {
        expanded: false,
        other: ""
      });
  const dispatch = match[1];
  const description_class = match[0].expanded ? "" : "hidden";
  const body = JsxRuntime.jsx("div", {
        className: "border border-white p-4 m-4 " + description_class,
        dangerouslySetInnerHTML: {
          __html: episode.description
        }
      });
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsx("h4", {
                              children: episode.title,
                              className: "text-lg font-semibold"
                            }),
                        JsxRuntime.jsx("span", {
                              children: episode.duration,
                              className: "text-sm"
                            })
                      ],
                      className: "flex justify-between items-center"
                    }),
                body,
                JsxRuntime.jsx("a", {
                      children: JsxRuntime.jsx(Button.Button, {
                            children: "Goto Episode",
                            variant: "outline",
                            className: "mt-2 text-xs border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
                          }),
                      href: episode.link,
                      onClick: (function (e) {
                          e.stopPropagation();
                        })
                    })
              ],
              className: "border border-green-400 p-4 rounded-md hover:bg-green-400 hover:text-black transition-colors",
              onClick: (function (param) {
                  Curry._1(dispatch, /* ToggleExpanded */0);
                })
            });
}

const EpisodeComp = {
  reducer: reducer,
  make: Podcast$EpisodeComp
};

function Podcast(Props) {
  const episodes = Stdlib__Array.map((function (episode) {
          const Key = episode.id;
          return JsxRuntime.jsx(Podcast$EpisodeComp, {
                      episode: episode
                    }, Key);
        }), Melange__Episodes.channel.items);
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsxs("header", {
                      children: [
                        JsxRuntime.jsx("div", {
                              children: JsxRuntime.jsx("div", {
                                    children: JsxRuntime.jsx("div", {
                                          children: JsxRuntime.jsx("h1", {
                                                children: "Top Shelf",
                                                className: "text-2xl font-bold"
                                              })
                                        }),
                                    className: "flex items-center space-x-2"
                                  }),
                              className: "container mx-auto flex justify-between items-center"
                            }),
                        JsxRuntime.jsx("div", {
                              children: JsxRuntime.jsx("br", {}),
                              className: "container mx-auto flex justify-between items-center"
                            }),
                        JsxRuntime.jsx("div", {
                              children: "You know ThePrimeagen can't read, but now you can finally watch him listen. Don't worry, teej_dv is here to help with coherent questions.",
                              className: "container mx-auto flex justify-between items-center"
                            })
                      ],
                      className: "p-6 border-b border-green-400"
                    }),
                JsxRuntime.jsxs("section", {
                      children: [
                        JsxRuntime.jsx("h3", {
                              children: "Latest Episodes",
                              className: "text-2xl font-bold mb-6"
                            }),
                        JsxRuntime.jsx("div", {
                              children: episodes,
                              className: "space-y-4"
                            })
                      ],
                      className: "container mx-auto px-4 py-16"
                    })
              ],
              className: "min-h-screen bg-black text-green-400 font-mono"
            });
}

const channel = Melange__Episodes.channel;

const make = Podcast;

const $$default = Podcast;

export {
  channel ,
  dangerousHtml ,
  EpisodeComp ,
  make ,
  $$default as default,
}
/* @/components/ui/button Not a pure module */
