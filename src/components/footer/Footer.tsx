import { IconEmail, IconGitHub, IconLinkedIn } from "../icons";

export function Footer() {
  return (
    <footer className="border-t border-amber-400/20 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <div>
            <h2 className="text-4xl font-black text-amber-400">
              AmidaDev
            </h2>

            <p className="mt-2 text-zinc-500">
              Desarrollador Full Stack
            </p>
          </div>

          {/* Redes */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/TU_USUARIO"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 text-zinc-400 transition hover:border-amber-400 hover:text-amber-400"
            >
              <IconGitHub/>
            </a>

            <a
              href="https://linkedin.com/in/TU_PERFIL"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 text-zinc-400 transition hover:border-amber-400 hover:text-amber-400"
            >
              <IconLinkedIn/>
            </a>

            <a
              href="mailto:jorge.teves.dev@gmail.com"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 text-zinc-400 transition hover:border-amber-400 hover:text-amber-400"
            >
              <IconEmail/>
            </a>
          </div>
        </div>

        {/* Línea */}
        <div className="mt-10 border-t border-zinc-900" />

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Jorge Luis Teves — Todos los
            derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
