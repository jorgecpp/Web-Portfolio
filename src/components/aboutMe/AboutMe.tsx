export function AboutMe() {
    return (
        <section className="mt-10">
            <div className="max-w-7xl mx-auto">

                {/* Encabezado */}
                <div className="text-center">
                <p className="text-amber-400 uppercase tracking-[0.3em] text-sm">
                    // Sobre mí
                </p>

                <h2 className="text-5xl font-bold mt-3">
                    Quién soy
                </h2>

                <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
                </div>

                {/* Descripción */}
                <div className="mt-16 rounded-3xl border border-amber-400/20 bg-linear-to-r from-amber-400/5 via-transparent to-amber-400/5 p-12">
                <p className="text-xl leading-10 text-zinc-200">
                    Soy un desarrollador apasionado por crear soluciones tecnológicas que
                    marquen la diferencia. Con experiencia en desarrollo full stack,
                    me especializo en construir aplicaciones web modernas, eficientes y
                    centradas en el usuario.
                </p>

                <p className="text-xl leading-10 text-zinc-200 mt-8">
                    Mi enfoque combina conocimientos técnicos sólidos con una visión
                    creativa, permitiéndome transformar ideas complejas en productos
                    digitales intuitivos y escalables. Disfruto aprender constantemente y
                    enfrentar nuevos desafíos que me impulsen a crecer como profesional.
                </p>
                </div>

                {/* Cards */}
                <div className="grid gap-6 mt-16 md:grid-cols-2 lg:grid-cols-4">

                <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 hover:border-amber-400/40 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                    💻
                    </div>

                    <h3 className="mt-6 text-2xl font-bold">
                    Código Limpio
                    </h3>

                    <p className="mt-4 text-zinc-400 leading-8">
                    Escribo código mantenible, escalable y siguiendo las mejores
                    prácticas de la industria.
                    </p>
                </div>

                <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 hover:border-amber-400/40 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                    💡
                    </div>

                    <h3 className="mt-6 text-2xl font-bold">
                    Innovación
                    </h3>

                    <p className="mt-4 text-zinc-400 leading-8">
                    Siempre buscando nuevas tecnologías y métodos para resolver
                    problemas de forma creativa.
                    </p>
                </div>

                <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 hover:border-amber-400/40 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                    🚀
                    </div>

                    <h3 className="mt-6 text-2xl font-bold">
                    Resultados
                    </h3>

                    <p className="mt-4 text-zinc-400 leading-8">
                    Enfocado en entregar productos de calidad que generen impacto real.
                    </p>
                </div>

                <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 hover:border-amber-400/40 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                    👥
                    </div>

                    <h3 className="mt-6 text-2xl font-bold">
                    Colaboración
                    </h3>

                    <p className="mt-4 text-zinc-400 leading-8">
                    Trabajo efectivo en equipo, comunicación clara y mentoría.
                    </p>
                </div>

                </div>

            </div>
        </section>
    );
}
