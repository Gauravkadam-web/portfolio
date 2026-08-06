import { useEffect, useState } from 'react';

const PHRASES = [
  'Java · Spring Boot · React.js',
  'Full-Stack Developer',
  'REST APIs · JWT · Docker',
  'Building scalable web apps',
];

// Recreates the hero "typed role" loop: types a phrase, pauses, deletes it,
// moves to the next phrase, repeat.
export default function useTypewriter() {
  const [text, setText] = useState('');

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setText(PHRASES[0]);
      return;
    }

    let pi = 0;
    let ci = 0;
    let deleting = false;
    let timer;

    function tick() {
      const word = PHRASES[pi];
      if (!deleting) {
        ci++;
        setText(word.slice(0, ci));
        if (ci === word.length) {
          deleting = true;
          timer = setTimeout(tick, 1800);
          return;
        }
        timer = setTimeout(tick, 55);
      } else {
        ci--;
        setText(word.slice(0, ci));
        if (ci === 0) {
          deleting = false;
          pi = (pi + 1) % PHRASES.length;
          timer = setTimeout(tick, 400);
          return;
        }
        timer = setTimeout(tick, 30);
      }
    }
    tick();

    return () => clearTimeout(timer);
  }, []);

  return text;
}
