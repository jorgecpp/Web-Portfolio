import { items } from "@/src/data/itemsNavbar";

export function NavbarDesktop() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-8 py-4 backdrop-blur-xl">
        {/* Logo */}
        <h1 className="cursor-pointer text-2xl font-bold tracking-tight">
          <span className="bg-linear-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
            AmidaDev
          </span>
        </h1>

        {/* Menú */}
        <ul className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <li
              key={item.id}
              className="group relative cursor-pointer text-zinc-300 transition-colors duration-300 hover:text-amber-400"
            >
              <a
              href={item.link}
              >
                {item.item}
              </a>
              {/* Línea animada */}
              <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
        href="mailto:jorgeluistevespro@gmail.com" 
        className="rounded-full bg-amber-400 px-5 py-2 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-amber-300">          
          Contáctame
        </a>
      </nav>
    </header>
  );
}
