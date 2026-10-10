import { motion } from 'framer-motion';
import type { Episode } from '../data/portfolio';
import { EASE, Tilt } from './fx';
import { PosterBackdrop } from './Poster';

export default function EpisodeCard({ episode, index }: { episode: Episode; index: number }) {
  const [season, ep] = episode.code.split(' ');
  return (
    <motion.article
      className="w-[80vw] shrink-0 snap-start sm:w-[52vw] md:w-[38vw] lg:w-[30vw] xl:w-[26vw]"
      initial={{ opacity: 0, y: 30, rotateY: -8 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: EASE }}
    >
      <Tilt max={7} className="group h-full rounded-xl">
        <div className="flex h-full flex-col overflow-hidden rounded-xl bg-ink-2 ring-1 ring-[#00D9FF]/15 transition duration-500 group-hover:ring-[#00D9FF]/50 group-hover:shadow-[0_20px_45px_-20px_rgba(8,120,249,0.4)]">
          <div className="relative aspect-video overflow-hidden">
            <div className="absolute inset-0 transition-transform duration-[1.2s] ease-[var(--ease-cine)] group-hover:scale-110">
              <PosterBackdrop palette={episode.palette}>
                <span className="absolute -bottom-6 right-2 font-display text-[7.5rem] leading-none text-white/[0.09]">{ep}</span>
              </PosterBackdrop>
            </div>
            <div className="absolute left-4 top-4 flex items-center gap-2">
              <span className="rounded border border-[#00D9FF]/25 bg-[#030B1A]/80 px-2 py-0.5 text-[10px] font-bold tracking-[0.2em] text-[#00D9FF] backdrop-blur">{season}</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-bone/80">EPISODE {ep.replace('E', '')}</span>
            </div>
            <h4 className="absolute bottom-4 left-4 right-4 font-display text-3xl leading-none tracking-wide text-bone [transform:translateZ(30px)] sm:text-4xl">{episode.title}</h4>
          </div>
          <div className="flex flex-1 flex-col p-4">
            <div className="mb-2 flex items-center justify-between text-[11px] text-smoke">
              <span className="font-semibold text-mist">{episode.runtime}</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#00D9FF]/30 text-[10px] text-[#00D9FF] transition group-hover:border-[#00D9FF] group-hover:bg-[#00D9FF] group-hover:text-[#030B1A]">
                ▶
              </span>
            </div>
            <p className="text-sm leading-relaxed text-bone/80">{episode.description}</p>
            <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
              {episode.tags.map((t) => (
                <span key={t} className="rounded-full border border-white/[0.08] bg-[#030B1A]/70 px-2.5 py-1 text-[11px] text-mist transition-colors hover:border-[#00D9FF]/30 hover:text-[#00D9FF]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.article>
  );
}
