import { IconGitHub } from "../../icons"
import { IconLinkedIn } from "../../icons"
import { IconEmail } from "../../icons"

export function Networks(){
    return(
        <div className="mt-10 flex gap-4">
          <a
            href="https://github.com/jorgecpp"
            className="rounded-full border border-zinc-700 bg-black/20 p-3 text-zinc-300 backdrop-blur-sm transition hover:-translate-y-1 hover:border-amber-400 hover:text-amber-400"
          >
            <IconGitHub />
          </a>

          <a
            href="https://www.linkedin.com/in/jorge-teves-16b333417/"
            className="rounded-full border border-zinc-700 bg-black/20 p-3 text-zinc-300 backdrop-blur-sm transition hover:-translate-y-1 hover:border-amber-400 hover:text-amber-400"
          >
            <IconLinkedIn />
          </a>

          <a
            href="mailto:tucorreo@ejemplo.com"
            className="rounded-full border border-zinc-700 bg-black/20 p-3 text-zinc-300 backdrop-blur-sm transition hover:-translate-y-1 hover:border-amber-400 hover:text-amber-400"
          >
            <IconEmail />
          </a>
        </div>
    )
}