import { createFileRoute } from "@tanstack/react-router";
import { RotateCcw, Volume2, VolumeX } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({ component: Home });

type MarkState = 0 | 1 | 2;

const ITEMS = [
  { id: "in", word: "in", ipa: "/ɪn/", src: "/pugs/in.png", alt: "A pug sitting inside a green car" },
  { id: "on", word: "on", ipa: "/ɒn/", src: "/pugs/on.png", alt: "A pug sitting on a green car" },
  { id: "under", word: "under", ipa: "/ˈʌndər/", src: "/pugs/under.png", alt: "A pug under a green car" },
  { id: "next", word: "next to", ipa: "/ˈnekst tu/", src: "/pugs/next.png", alt: "A pug next to a green car" },
  { id: "behind", word: "behind", ipa: "/bɪˈhaɪnd/", src: "/pugs/behind.png", alt: "A pug behind a green car" },
  {
    id: "front",
    word: "in front of",
    ipa: "/ɪn frʌnt əv/",
    src: "/pugs/front.png",
    alt: "A pug in front of a green car",
  },
  {
    id: "between",
    word: "between",
    ipa: "/bɪˈtwiːn/",
    src: "/pugs/between.png",
    alt: "A pug between a green car and a blue car",
  },
] as const;

const STATE_NAME = ["picture", "circle", "cross"] as const;
const MUTE_KEY = "whats-missing-mute";

function Home() {
  const [screen, setScreen] = useState<"intro" | "board">("intro");
  const [cells, setCells] = useState<MarkState[]>(() => ITEMS.map(() => 0));
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    try {
      setMuted(localStorage.getItem(MUTE_KEY) === "1");
    } catch {
      /* ignore private mode */
    }
  }, []);

  function toggleMute() {
    setMuted((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(MUTE_KEY, next ? "1" : "0");
      } catch {
        /* ignore */
      }
      return next;
    });
  }

  function cycle(index: number) {
    const value = ((cells[index] + 1) % 3) as MarkState;
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

  return (
    <main className="stage">
      <div className="valance" aria-hidden="true" />
      <div className="drape drape-left" aria-hidden="true" />
      <div className="drape drape-right" aria-hidden="true" />
      <div className="stage-inner">
        {screen === "intro" ? (
          <section className="intro">
            <p className="kicker">Prepositions of place</p>
            <h1 className="title">What’s Missing?</h1>
            <p className="subtitle">Look closely! Which word ran away?</p>
            <img className="hero-pug" src="/pugs/on.png" alt="A pug sitting on a little green car" />
            <p className="sentence">
              The pug is <span className="blank">____</span> the car.
            </p>
            <button className="play" type="button" onClick={() => setScreen("board")}>
              Open the board
            </button>
            <ol className="steps">
              <li>
                <Mark kind="o" className="step-mark" />
                Click once: circle
              </li>
              <li>
                <Mark kind="x" className="step-mark" />
                Click again: cross
              </li>
              <li>
                <img src="/pugs/on.png" alt="" className="step-mark" />
                Once more: the picture
              </li>
            </ol>
            <p className="teacher-note">
              Bấm một ô để úp vòng tròn, bấm lần nữa để đổi thành dấu X, bấm lần thứ ba để
              hiện lại hình và từ. Play again làm mới cả bảng.
            </p>
          </section>
        ) : (
          <section>
            <header className="topbar">
              <div>
                <p className="kicker">Prepositions of place</p>
                <h1 className="title">What’s Missing?</h1>
              </div>
              <div className="bar-actions">
                <button
                  className="ghost"
                  type="button"
                  onClick={toggleMute}
                  aria-pressed={muted}
                  aria-label={muted ? "Unmute" : "Mute"}
                >
                  {muted ? <VolumeX aria-hidden="true" /> : <Volume2 aria-hidden="true" />}
                </button>
                <button className="play" type="button" onClick={reset}>
                  <RotateCcw aria-hidden="true" size={18} /> Play again
                </button>
              </div>
            </header>

            <div className="prompt">
              <div>
                <h2>Where is the pug?</h2>
                <p className="sentence">
                  The pug is <span className="blank">____</span> the car.
                </p>
                <p className="tally">
                  Circles {circles} · Crosses {crosses}
                </p>
              </div>
              <p className="hint">Click once for a circle, again for a cross, once more to show the picture.</p>
            </div>

            <div className="board">
              {ITEMS.map((item, index) => {
                const state = cells[index];
                return (
                  <button
                    key={item.id}
                    type="button"
                    className="tile"
                    data-state={state}
                    onClick={() => cycle(index)}
                    aria-label={`${item.word}, ${STATE_NAME[state]}. Click to change.`}
                  >
                    <span className="flipper">
                      <span className="face front">
                        <span className="art">
                          <img src={item.src} alt={item.alt} />
                        </span>
                        <span className="word">{item.word}</span>
                        <span className="ipa">{item.ipa}</span>
                      </span>
                      <span className="face back" aria-hidden="true">
                        <Mark kind={state === 2 ? "x" : "o"} className="mark" />
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

function Mark({ kind, className }: { kind: "o" | "x"; className?: string }) {
  if (kind === "o") {
    return (
      <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r="32" />
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <path d="M24 24 L76 76 M76 24 L24 76" />
    </svg>
  );
}

let audio: AudioContext | null = null;

function blip(state: MarkState) {
  const AC =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AC) return;
  if (!audio) audio = new AC();
  if (audio.state === "suspended") void audio.resume();
  const now = audio.currentTime;
  const freq = state === 1 ? 494 : state === 2 ? 370 : 660;
  const osc = audio.createOscillator();
  const gain = audio.createGain();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(freq, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.07, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
  osc.connect(gain);
  gain.connect(audio.destination);
  osc.start(now);
  osc.stop(now + 0.13);
}
