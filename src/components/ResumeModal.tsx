import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollLock } from '../hooks/smoothScroll';
import { EASE } from './fx';
import { ResumeSheet } from './ResumeViewer';

/** Full-screen, responsive resume-style portfolio summary. */
export default function ResumeModal({ onClose }: { onClose: () => void }) {
  useScrollLock(true);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[140] flex flex-col bg-black/90 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label="Resume"
    >
      <div className="gutter flex h-16 shrink-0 items-center justify-between gap-3 pt-[env(safe-area-inset-top)]">
        <p className="truncate font-display text-2xl tracking-wide text-bone">The Full Story</p>
        <div className="flex items-center gap-2">
          <button type="button" onClick={onClose} aria-label="Close resume" data-cursor="close" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-bone hover:bg-white/20">
            ✕
          </button>
        </div>
      </div>
      <motion.div
        className="gutter flex-1 pb-6"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div data-lenis-prevent className="h-full overflow-y-auto rounded-xl bg-ink-2 p-4 sm:p-8">
          <ResumeSheet />
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-mist">This is a resume-style portfolio summary. Add your final PDF in public/assets when ready.</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
