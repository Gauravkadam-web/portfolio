import { useEffect, useRef, useState } from 'react';

const LINES = [
  { t: 'booting ide', tag: 'INIT' },
  { t: '$ mvn clean install', tag: null },
  { t: 'resolving dependencies... done', tag: 'OK' },
  { t: '$ npm install', tag: null },
  { t: 'compiling frontend bundle... done', tag: 'OK' },
  { t: 'starting spring boot application', tag: null },
  { t: 'server started on port 8080', tag: 'OK' },
  { t: 'loading gaurav-kadam/portfolio...', tag: 'OK' },
];

// Mirrors the original inline <script> boot sequence: types out lines,
// advances a progress bar, then flips `done`/`show` flags for the CSS
// crossfade between #boot and #app.
export default function useBootSequence() {
  const [lines, setLines] = useState([]);
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);
  const finishedRef = useRef(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function finish() {
      if (finishedRef.current) return;
      finishedRef.current = true;
      setDone(true);
    }

    if (reduced) {
      finish();
      return;
    }

    let timer;
    function step() {
      setLines((prev) => {
        if (prev.length >= LINES.length) return prev;
        const next = [...prev, LINES[prev.length]];
        setPct(Math.min(100, Math.round((next.length / LINES.length) * 100)));
        return next;
      });
      timer = setTimeout(() => {
        setLines((prev) => {
          if (prev.length < LINES.length) {
            step();
          } else {
            timer = setTimeout(finish, 420);
          }
          return prev;
        });
      }, 230 + Math.random() * 160);
    }
    timer = setTimeout(step, 260);
    const safety = setTimeout(finish, 6000);

    return () => {
      clearTimeout(timer);
      clearTimeout(safety);
    };
  }, []);

  return { lines, pct, done };
}