import { useEffect, useState } from 'react';

// The code segments that make up Application.java, in order. Each segment
// is either plain text or a styled token (kw/ann/str/cm), matching the
// original markup exactly so the typing animation reveals the same syntax
// highlighting piece by piece.
const SEGMENTS = [
  { cls: 'ann', text: '@SpringBootApplication' },
  { text: '\n' },
  { cls: 'kw', text: 'public class' },
  { text: ' PortfolioApp {\n  ' },
  { cls: 'kw', text: 'public static void' },
  { text: ' main(String[] args) {\n    SpringApplication.run(\n      PortfolioApp.class, args\n    );\n    System.out.println(\n      ' },
  { cls: 'str', text: '"Server on :8080 ✓"' },
  { text: '\n    );\n  }\n}\n\n' },
  { cls: 'cm', text: '// stack: Java · Spring · React' },
];

export default function HeroTerminal() {
  const [revealed, setRevealed] = useState([]); // array of {cls, text} fully/partially typed
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setRevealed(SEGMENTS);
      setShowCursor(true);
      return;
    }

    // Reset in case this effect re-runs (e.g. React StrictMode's dev-mode
    // double-invoke): each run must own and clean up its own timers rather
    // than relying on a "has it started" flag, which would otherwise block
    // the second (real) run from ever scheduling anything.
    setRevealed([]);
    setShowCursor(false);

    let segIndex = 0;
    let charIndex = 0;
    let timers = [];

    function typeSegment() {
      if (segIndex >= SEGMENTS.length) {
        setShowCursor(true);
        return;
      }
      const seg = SEGMENTS[segIndex];
      charIndex = 0;

      function typeChar() {
        charIndex++;
        setRevealed((prev) => {
          const next = prev.slice(0, segIndex);
          next[segIndex] = { cls: seg.cls, text: seg.text.slice(0, charIndex) };
          return next;
        });
        if (charIndex < seg.text.length) {
          timers.push(setTimeout(typeChar, 6 + Math.random() * 12));
        } else {
          segIndex++;
          timers.push(setTimeout(typeSegment, 45));
        }
      }
      typeChar();
    }

    const kickoff = setTimeout(typeSegment, 150);
    timers.push(kickoff);

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="hero-terminal" aria-hidden="true">
      <div className="tb">
        <span className="dot r"></span>
        <span className="dot y"></span>
        <span className="dot g"></span> Application.java
      </div>
      <pre>
        {revealed.map((seg, i) =>
          seg.cls ? (
            <span className={seg.cls} key={i}>
              {seg.text}
            </span>
          ) : (
            <span key={i}>{seg.text}</span>
          )
        )}
        <span style={{ color: 'var(--amber)', animation: 'blink 1s steps(1) infinite', opacity: showCursor || revealed.length ? 1 : 0 }}>▌</span>
      </pre>
    </div>
  );
}