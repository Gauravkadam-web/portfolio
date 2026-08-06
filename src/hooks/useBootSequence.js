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
  const indexRef = useRef(0);

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
      if (finishedRef.current) return;

      const nextIndex = indexRef.current;
      if (nextIndex >= LINES.length) {
        timer = setTimeout(finish, 420);
        return;
      }

      setLines((prev) => [...prev, LINES[nextIndex]]);
      indexRef.current += 1;
      setPct(Math.min(100, Math.round((indexRef.current / LINES.length) * 100)));

      timer = setTimeout(step, 230 + Math.random() * 160);
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