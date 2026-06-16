import { categories } from "@/src/data/categories";
export function Tools() {

  return (
    <section id="tools" className="py-32 px-6 scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
            // Herramientas que uso
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            Tecnologías & Herramientas
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-amber-400" />

          <p className="mt-8 text-lg text-zinc-400">
            Tecnologías y herramientas que utilizo para diseñar, desarrollar
            y desplegar aplicaciones web modernas.
          </p>
        </div>

        {/* Categorías */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur-sm transition-all duration-300 hover:border-amber-400/40"
            >
              <h3 className="text-2xl font-bold text-amber-400">
                {category.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {category.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-2 text-sm text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Resumen */}
        <div className="mt-16 rounded-3xl border border-amber-400/20 bg-amber-400/5 p-8 text-center">
          <p className="text-zinc-300 leading-8">
            Mi stack principal está enfocado en{" "}
            <span className="font-semibold text-amber-400">
              Next.js, React, TypeScript, Supabase y PostgreSQL
            </span>
            , permitiéndome desarrollar aplicaciones modernas, escalables y
            listas para producción.
          </p>
        </div>
      </div>
    </section>
  );
}
