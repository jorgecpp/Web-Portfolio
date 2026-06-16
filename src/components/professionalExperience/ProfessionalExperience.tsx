import { Briefcase, Calendar, ChevronRight, GraduationCap } from "lucide-react";

export function ProfessionalExperience() {
  return (
    <section id="experience" className="py-32 px-6 scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center">
          <p className="text-amber-400 uppercase tracking-[0.3em] text-sm">
            // Trayectoria
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            Trayectoria Académica y Profesional
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-amber-400" />
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Línea vertical */}
          <div className="absolute left-5 top-0 h-full w-px bg-amber-400/30" />

          {/* Universidad */}
          <div className="relative mb-12 pl-16">
            <div className="absolute left-0 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-black">
              <GraduationCap size={18} />
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-3xl font-bold">
                    Estudiante de Ingeniería Informática y Sistemas
                  </h3>

                  <p className="mt-2 text-xl font-semibold text-amber-400">
                    Universidad Nacional de San Antonio Abad del Cusco
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 text-zinc-400">
                  <Calendar size={16} />
                  <span>2023 - Presente</span>
                </div>
              </div>

              <p className="mt-8 leading-8 text-zinc-400">
                Formación académica enfocada en desarrollo de software,
                arquitectura de sistemas, bases de datos y tecnologías web
                modernas.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex gap-3">
                  <ChevronRight
                    size={18}
                    className="mt-1 shrink-0 text-amber-400"
                  />
                  <span className="text-zinc-300">
                    Desarrollo de proyectos académicos y personales.
                  </span>
                </li>

                <li className="flex gap-3">
                  <ChevronRight
                    size={18}
                    className="mt-1 shrink-0 text-amber-400"
                  />
                  <span className="text-zinc-300">
                    Diseño e implementación de bases de datos relacionales.
                  </span>
                </li>

                <li className="flex gap-3">
                  <ChevronRight
                    size={18}
                    className="mt-1 shrink-0 text-amber-400"
                  />
                  <span className="text-zinc-300">
                    Aplicación de buenas prácticas de programación y desarrollo
                    web.
                  </span>
                </li>

                <li className="flex gap-3">
                  <ChevronRight
                    size={18}
                    className="mt-1 shrink-0 text-amber-400"
                  />
                  <span className="text-zinc-300">
                    Aprendizaje continuo de tecnologías modernas y herramientas
                    cloud.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Experiencia */}
          <div className="relative pl-16">
            <div className="absolute left-0 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-black">
              <Briefcase size={18} />
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-3xl font-bold">
                    Full Stack Developer
                  </h3>

                  <p className="mt-2 text-xl font-semibold text-amber-400">
                    Proyectos Personales y Freelance
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 text-zinc-400">
                  <Calendar size={16} />
                  <span>2024 - Presente</span>
                </div>
              </div>

              <p className="mt-8 leading-8 text-zinc-400">
                Desarrollo de aplicaciones web modernas utilizando Next.js,
                React, TypeScript, Supabase y PostgreSQL. Construcción de
                soluciones enfocadas en comercio electrónico, gestión de
                información y plataformas digitales.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex gap-3">
                  <ChevronRight
                    size={18}
                    className="mt-1 shrink-0 text-amber-400"
                  />
                  <span className="text-zinc-300">
                    Desarrollo de la plataforma InkaShop para gestión y venta
                    de productos.
                  </span>
                </li>

                <li className="flex gap-3">
                  <ChevronRight
                    size={18}
                    className="mt-1 shrink-0 text-amber-400"
                  />
                  <span className="text-zinc-300">
                    Desarrollo de sistema de gestión para tours y reservas.
                  </span>
                </li>

                <li className="flex gap-3">
                  <ChevronRight
                    size={18}
                    className="mt-1 shrink-0 text-amber-400"
                  />
                  <span className="text-zinc-300">
                    Implementación de bases de datos con PostgreSQL y Supabase.
                  </span>
                </li>

                <li className="flex gap-3">
                  <ChevronRight
                    size={18}
                    className="mt-1 shrink-0 text-amber-400"
                  />
                  <span className="text-zinc-300">
                    Despliegue y configuración de aplicaciones utilizando Azure.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
