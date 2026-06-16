export function MyProjects() {
  const projects = [
    {
      title: "Inka Latin Travel",
      description:
        "Plataforma integral para una agencia de viajes que incluye gestión de tours, reservas, administración de contenido y un módulo de comercio electrónico (InkaShop) para la venta de productos.",
      image: "images/projects/InkaLatinTravelProject.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
        "Azure",
      ],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Netflix Clone",
      description:
        "Clon funcional de Netflix con catálogo dinámico, navegación intuitiva, interfaz moderna y diseño responsive inspirado en la plataforma original.",
      image: "images/projects/NetflixCloneProject.png",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
      ],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Personal",
      description:
        "Portafolio profesional desarrollado para presentar proyectos, experiencia, tecnologías y trayectoria académica mediante una interfaz moderna y atractiva.",
      image: "/projects/portfolio.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
      ],
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
            // Portafolio
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            Proyectos Destacados
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-amber-400" />

          <p className="mt-8 text-lg text-zinc-400">
            Algunos de los proyectos que he desarrollado utilizando tecnologías
            modernas como Next.js, TypeScript, Supabase y PostgreSQL.
          </p>
        </div>

        {/* Proyectos */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/40"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-sm text-amber-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-amber-400 px-4 py-2 font-semibold text-black transition hover:bg-amber-300"
                  >
                    Ver Proyecto
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-zinc-700 px-4 py-2 transition hover:border-amber-400 hover:text-amber-400"
                  >
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
