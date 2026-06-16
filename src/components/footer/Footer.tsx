import { Networks } from "../shared/networks/Networks";

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
          <Networks/>
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
