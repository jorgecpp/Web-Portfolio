import Image from "next/image"

import { IconEmail } from "../icons/IconEmail"
import { IconGitHub } from "../icons/IconGitHub"
import { IconLinkedIn } from "../icons/IconLinkedIn"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <Image
        src="/images/imageBackGround.jpg"
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Gradiente ámbar */}
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/50 to-black" />

      {/* Contenido */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        {/* Badge */}
        <div className="mb-4 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-400 backdrop-blur">
          Disponible para trabajar
        </div>

        {/* Nombre */}
        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          Jorge Luis{" "}
          <span className="bg-linear-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
            Teves
          </span>
        </h1>

        {/* Cargo */}
        <h2 className="mt-4 text-xl font-medium text-zinc-300 md:text-3xl">
          Full Stack Developer
        </h2>

        {/* Descripción */}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
          Transformo ideas en productos digitales escalables y experiencias web
          modernas utilizando tecnologías como React, Next.js, TypeScript,
          Supabase y PostgreSQL.
        </p>

        {/* Botones */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-full bg-amber-400 px-8 py-3 font-semibold text-black transition hover:scale-105 hover:bg-amber-300">
            Contáctame
          </button>

          <button className="rounded-full border border-zinc-600 bg-black/20 px-8 py-3 font-semibold backdrop-blur-sm transition hover:border-amber-400 hover:text-amber-400">
            Ver proyectos
          </button>
        </div>

        {/* Redes */}
        <div className="mt-10 flex gap-4">
          <a
            href="#"
            className="rounded-full border border-zinc-700 bg-black/20 p-3 text-zinc-300 backdrop-blur-sm transition hover:-translate-y-1 hover:border-amber-400 hover:text-amber-400"
          >
            <IconGitHub />
          </a>

          <a
            href="#"
            className="rounded-full border border-zinc-700 bg-black/20 p-3 text-zinc-300 backdrop-blur-sm transition hover:-translate-y-1 hover:border-amber-400 hover:text-amber-400"
          >
            <IconLinkedIn />
          </a>

          <a
            href="#"
            className="rounded-full border border-zinc-700 bg-black/20 p-3 text-zinc-300 backdrop-blur-sm transition hover:-translate-y-1 hover:border-amber-400 hover:text-amber-400"
          >
            <IconEmail />
          </a>
        </div>
      </div>
    </section>
  )
}