import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as RotateCcw, n as Volume2, t as VolumeX } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BdNv0qA3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ITEMS = [
	{
		id: "in",
		word: "in",
		ipa: "/ɪn/",
		src: "/pugs/in.png",
		alt: "A pug sitting inside a green car"
	},
	{
		id: "on",
		word: "on",
		ipa: "/ɒn/",
		src: "/pugs/on.png",
		alt: "A pug sitting on a green car"
	},
	{
		id: "under",
		word: "under",
		ipa: "/ˈʌndər/",
		src: "/pugs/under.png",
		alt: "A pug under a green car"
	},
	{
		id: "next",
		word: "next to",
		ipa: "/ˈnekst tu/",
		src: "/pugs/next.png",
		alt: "A pug next to a green car"
	},
	{
		id: "behind",
		word: "behind",
		ipa: "/bɪˈhaɪnd/",
		src: "/pugs/behind.png",
		alt: "A pug behind a green car"
	},
	{
		id: "front",
		word: "in front of",
		ipa: "/ɪn frʌnt əv/",
		src: "/pugs/front.png",
		alt: "A pug in front of a green car"
	},
	{
		id: "between",
		word: "between",
		ipa: "/bɪˈtwiːn/",
		src: "/pugs/between.png",
		alt: "A pug between a green car and a blue car"
	}
];
var STATE_NAME = [
	"picture",
	"circle",
	"cross"
];
var MUTE_KEY = "whats-missing-mute";
function Home() {
	const [screen, setScreen] = (0, import_react.useState)("intro");
	const [cells, setCells] = (0, import_react.useState)(() => ITEMS.map(() => 0));
	const [muted, setMuted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			setMuted(localStorage.getItem(MUTE_KEY) === "1");
		} catch {}
	}, []);
	function toggleMute() {
		setMuted((prev) => {
			const next = !prev;
			try {
				localStorage.setItem(MUTE_KEY, next ? "1" : "0");
			} catch {}
			return next;
		});
	}
	function cycle(index) {
		const value = (cells[index] + 1) % 3;
		setCells((prev) => {
			const next = [...prev];
			next[index] = value;
			return next;
		});
		if (!muted) blip(value);
	}
	function reset() {
		setCells(ITEMS.map(() => 0));
		if (!muted) blip(0);
	}
	const circles = cells.filter((cell) => cell === 1).length;
	const crosses = cells.filter((cell) => cell === 2).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "stage",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "valance",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "drape drape-left",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "drape drape-right",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "stage-inner",
				children: screen === "intro" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "intro",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: "Prepositions of place"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "title",
							children: "What’s Missing?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "subtitle",
							children: "Look closely! Which word ran away?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							className: "hero-pug",
							src: "/pugs/on.png",
							alt: "A pug sitting on a little green car"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "sentence",
							children: [
								"The pug is ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "blank",
									children: "____"
								}),
								" the car."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "play",
							type: "button",
							onClick: () => setScreen("board"),
							children: "Open the board"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
							className: "steps",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
									kind: "o",
									className: "step-mark"
								}), "Click once: circle"] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
									kind: "x",
									className: "step-mark"
								}), "Click again: cross"] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/pugs/on.png",
									alt: "",
									className: "step-mark"
								}), "Once more: the picture"] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "teacher-note",
							children: "Bấm một ô để úp vòng tròn, bấm lần nữa để đổi thành dấu X, bấm lần thứ ba để hiện lại hình và từ. Play again làm mới cả bảng."
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "topbar",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: "Prepositions of place"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "title",
							children: "What’s Missing?"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bar-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "ghost",
								type: "button",
								onClick: toggleMute,
								"aria-pressed": muted,
								"aria-label": muted ? "Unmute" : "Mute",
								children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { "aria-hidden": "true" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "play",
								type: "button",
								onClick: reset,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {
									"aria-hidden": "true",
									size: 18
								}), " Play again"]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "prompt",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Where is the pug?" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "sentence",
								children: [
									"The pug is ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "blank",
										children: "____"
									}),
									" the car."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "tally",
								children: [
									"Circles ",
									circles,
									" · Crosses ",
									crosses
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hint",
							children: "Click once for a circle, again for a cross, once more to show the picture."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "board",
						children: ITEMS.map((item, index) => {
							const state = cells[index];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "tile",
								"data-state": state,
								onClick: () => cycle(index),
								"aria-label": `${item.word}, ${STATE_NAME[state]}. Click to change.`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flipper",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "face front",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "art",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: item.src,
													alt: item.alt
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "word",
												children: item.word
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "ipa",
												children: item.ipa
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "face back",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
											kind: state === 2 ? "x" : "o",
											className: "mark"
										})
									})]
								})
							}, item.id);
						})
					})
				] })
			})
		]
	});
}
function Mark({ kind, className }) {
	if (kind === "o") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		viewBox: "0 0 100 100",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "50",
			cy: "50",
			r: "32"
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		viewBox: "0 0 100 100",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 24 L76 76 M76 24 L24 76" })
	});
}
var audio = null;
function blip(state) {
	const AC = window.AudioContext || window.webkitAudioContext;
	if (!AC) return;
	if (!audio) audio = new AC();
	if (audio.state === "suspended") audio.resume();
	const now = audio.currentTime;
	const freq = state === 1 ? 494 : state === 2 ? 370 : 660;
	const osc = audio.createOscillator();
	const gain = audio.createGain();
	osc.type = "triangle";
	osc.frequency.setValueAtTime(freq, now);
	gain.gain.setValueAtTime(1e-4, now);
	gain.gain.exponentialRampToValueAtTime(.07, now + .02);
	gain.gain.exponentialRampToValueAtTime(1e-4, now + .12);
	osc.connect(gain);
	gain.connect(audio.destination);
	osc.start(now);
	osc.stop(now + .13);
}
//#endregion
export { Home as component };
