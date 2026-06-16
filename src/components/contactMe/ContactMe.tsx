import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

export function ContactMe() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
            // Contacto
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            Hablemos
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-amber-400" />

          <p className="mt-8 text-lg text-zinc-400">
            ¿Tienes un proyecto en mente? ¡Me encantaría escucharlo!
          </p>
        </div>

        {/* Contenido */}
        <div className="mt-20 grid gap-16 lg:grid-cols-2">
          {/* Información */}
          <div>
            <h3 className="text-4xl font-bold">
              Información de Contacto
            </h3>

            <p className="mt-6 leading-8 text-zinc-400">
              Estoy disponible para nuevas oportunidades,
              colaboraciones y proyectos freelance.
              No dudes en contactarme a través de cualquiera
              de estos medios.
            </p>

            <div className="mt-12 space-y-8">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-400/10 text-amber-400">
                  <Mail />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Email
                  </h4>

                  <p className="text-zinc-400">
                    jorge.teves.dev@gmail.com
                  </p>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-400/10 text-amber-400">
                  <Phone />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Teléfono
                  </h4>

                  <p className="text-zinc-400">
                    +51 928 825 262
                  </p>
                </div>
              </div>

              {/* Ubicación */}
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-400/10 text-amber-400">
                  <MapPin />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Ubicación
                  </h4>

                  <p className="text-zinc-400">
                    Cusco, Perú
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <form className="space-y-6">
            <div>
              <label className="mb-2 block text-sm text-zinc-300">
                Nombre
              </label>

              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4 outline-none transition focus:border-amber-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-300">
                Email
              </label>

              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4 outline-none transition focus:border-amber-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-300">
                Mensaje
              </label>

              <textarea
                rows={6}
                placeholder="Cuéntame sobre tu proyecto..."
                className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4 outline-none transition focus:border-amber-400"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-amber-400 py-4 font-semibold text-black shadow-lg shadow-amber-400/20 transition hover:bg-amber-300"
            >
              <Send size={18} />
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
