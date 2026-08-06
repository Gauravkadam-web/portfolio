import { useEffect } from 'react';

// Sets a per-bar transition-delay so the fill animations cascade instead
// of firing all at once when the Skills section becomes visible.
export default function useSkillBarStagger() {
  useEffect(() => {
    document.querySelectorAll('.skills-grid > div').forEach((group, gi) => {
      group.querySelectorAll('.skill-bar i').forEach((bar, bi) => {
        bar.style.transitionDelay = gi * 0.05 + bi * 0.15 + 's';
      });
    });
  }, []);
}
