"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

type Caption = { title: string; description: string };
type GalleryState = { projectTitle: string; images: string[]; captions: Caption[]; index: number } | null;

export default function Info() {
  const [gallery, setGallery] = useState<GalleryState>(null);
  const [fading, setFading] = useState(false);

  const goTo = (newIndex: number) => {
    setFading(true);
    setTimeout(() => {
      setGallery((g) => g ? { ...g, index: newIndex } : g);
      setFading(false);
    }, 150);
  };

  useEffect(() => {
    if (!gallery) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setGallery(null);
      if (e.key === "ArrowRight" && gallery.index < gallery.images.length - 1) goTo(gallery.index + 1);
      if (e.key === "ArrowLeft" && gallery.index > 0) goTo(gallery.index - 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [gallery]);

  const techCategories = [
    {
      name: "Frontend",
      dot: "bg-cyan-500",
      accent: "border-t-cyan-500",
      techs: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Leaflet"],
    },
    {
      name: "Backend",
      dot: "bg-blue-500",
      accent: "border-t-blue-500",
      techs: ["FastAPI", "Python", "Node.js", "REST APIs"],
    },
    {
      name: "Datos e IA",
      dot: "bg-violet-500",
      accent: "border-t-violet-500",
      techs: ["Elasticsearch", "Kibana", "Logstash", "PostgreSQL", "Neo4j", "Pandas", "Claude AI", "RAG"],
    },
    {
      name: "Infraestructura",
      dot: "bg-green-500",
      accent: "border-t-green-500",
      techs: ["Nomad", "Consul", "Vault", "Docker", "Convex", "Git"],
    },
  ];

  const projects = [
    {
      title: "Smart Decisions Platform",
      description:
        "Plataforma empresarial con IA generativa (RAG), editor colaborativo en tiempo real y dashboard de semáforos para organismos de movilidad urbana.",
      tech: ["Next.js", "FastAPI", "Elasticsearch", "Claude AI", "Convex", "Python"],
      color: "from-violet-600 to-indigo-600",
      icon: "🧠",
      images: ["/sdp_pics/login_sdp.png", "/sdp_pics/Chat_IA.png", "/sdp_pics/load_convert_docs.png"],
      captions: [
        {
          title: "Acceso seguro multi-tenant",
          description: "Autenticación con Fusionauth. Soporte para múltiples organizaciones con aislamiento completo de datos por entidad.",
        },
        {
          title: "Chat con IA y RAG",
          description: "Interfaz conversacional con cuatro modos: documentos propios, corpus empresarial (Elasticsearch), herramientas MCP con Claude y chat general. Respuestas en streaming con historial persistido.",
        },
        {
          title: "Gestión de documentos",
          description: "Carga y conversión automática de PDFs a documentos editables. Editor colaborativo BlockNote con sincronización CRDT en tiempo real y control de versiones.",
        },
      ],
    },
  ];

  return (
    <div className="w-full bg-linear-to-br from-zinc-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-8 pt-20"
      >
        <div className="max-w-6xl w-full p-8 md:p-16">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <Image
                src="/profile_pic_nobg.png"
                alt="logo jeisson"
                width={100}
                height={200}
                priority
                className="relative rounded-full border-white dark:border-gray-800 shadow-2xl"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent animate-fade-in">
                Jeisson Araque
              </h1>

              <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-200 mb-6 font-light">
              Ingeniero de Datos & Desarrollador Full Stack.
              </h2>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
                <button
                  onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-8 py-3 bg-linear-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-cyan-500/50 dark:hover:shadow-cyan-400/50 hover:scale-105 transition-all duration-300"
                >
                  Ver Proyectos
                </button>
                {/* <a
                  href="/cv.pdf"
                  download
                  className="px-8 py-3 bg-linear-to-r from-violet-500 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-violet-500/50 hover:scale-105 transition-all duration-300"
                >
                  Descargar CV
                </a> */}
                <a
                  className="px-8 py-3 border-2 border-cyan-500 dark:border-cyan-400 text-cyan-600 dark:text-cyan-300 rounded-lg font-semibold hover:bg-cyan-50 dark:hover:bg-cyan-950/30 hover:scale-105 transition-all duration-300"
                  href="mailto:jearx85@gmail.com"
                  aria-label="Email"
                >
                  Contactar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-8 bg-white/30 dark:bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
            Sobre <span className="text-cyan-500 dark:text-cyan-400">Mí</span>
          </h2>
          <div className="bg-transparent backdrop-blur-sm p-8 md:p-12">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-6">
              Soy Ingeniero de Software y Datos con 4 años de experiencia en el
              CITRA (Centro Integrado de Tráfico y Transporte), entidad adscrita a la
              Secretaría de Movilidad de Medellín. Me especializo en construir
              soluciones que combinan análisis de datos en tiempo real,
              inteligencia artificial y desarrollo full stack para la gestión de
              movilidad urbana.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
              He liderado el diseño e implementación de plataformas complejas
              que integran LLMs, búsqueda semántica, edición colaborativa y
              visualización de datos geoespaciales, con foco en escalabilidad y
              experiencia de usuario.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
            Experiencia <span className="text-cyan-500 dark:text-cyan-400">Laboral</span>
          </h2>
          <div className="relative pl-8 border-l-2 border-cyan-500/30 dark:border-cyan-400/20">
            <div className="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50 ring-4 ring-white dark:ring-gray-950"></div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                    Ingeniero de Datos & Desarrollador Full Stack
                  </h3>
                  <p className="text-cyan-600 dark:text-cyan-400 font-medium mt-1">
                    CITRA · Secretaría de Movilidad de Medellín
                  </p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full whitespace-nowrap">
                  2022 – Presente · 4 años
                </span>
              </div>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                {[
                  "Diseño y desarrollo de aplicaciones web full stack que brindan soluciones de análisis, visualización y gestión de datos para la toma de decisiones institucional.",
                  "Diseño y desarrollo de pipelines de integración de datos para incorporar nuevas fuentes heterogéneas, utilizando Python y Pandas para transformación, limpieza y enriquecimiento de datos.",
                  "Implementación y administración de clústeres Elasticsearch con Kibana y Logstash (ELK Stack) para indexación, búsqueda y monitoreo de datos en tiempo real.",
                  "Gestión de infraestructura con HashiCorp: orquestación de servicios con Nomad, service mesh y descubrimiento con Consul, y gestión de secretos con Vault.",
                  "Integración de inteligencia artificial generativa (LLMs) en aplicaciones empresariales mediante técnicas RAG para consultas sobre bases de conocimiento internas.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-cyan-500 mt-1 shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
            Stack <span className="text-cyan-500 dark:text-cyan-400">Tecnológico</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {techCategories.map((cat) => (
              <div
                key={cat.name}
                className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 border-t-2 ${cat.accent}`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`w-3 h-3 rounded-full ${cat.dot}`}></span>
                  <h3 className="font-bold text-gray-800 dark:text-gray-100">{cat.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-8 bg-white/30 dark:bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
            Proyectos <span className="text-cyan-500 dark:text-cyan-400">Destacados</span>
          </h2>
          <div className="max-w-2xl mx-auto flex flex-col gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 ${project.images ? "cursor-pointer" : ""}`}
                onClick={() => project.images && setGallery({ projectTitle: project.title, images: project.images, captions: project.captions ?? [], index: 0 })}
              >
                {/* Thumbnail: screenshot real */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-end p-4">
                    <span className="bg-black/50 text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5">
                      📷 Ver capturas ({project.images.length})
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 rounded-full text-xs font-medium border border-violet-200 dark:border-violet-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel Modal */}
      {gallery && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setGallery(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-800 dark:text-gray-100 text-lg">{gallery.projectTitle}</h3>
              <button
                onClick={() => setGallery(null)}
                className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors text-xl leading-none"
                aria-label="Cerrar"
              >
                ✕
              </button>
            </div>

            {/* Image area */}
            <div className="relative bg-gray-100 dark:bg-gray-800" style={{ height: "380px" }}>
              <Image
                key={gallery.index}
                src={gallery.images[gallery.index]}
                alt={gallery.captions[gallery.index]?.title ?? `Captura ${gallery.index + 1}`}
                fill
                className={`object-contain transition-opacity duration-150 ${fading ? "opacity-0" : "opacity-100"}`}
              />
              {/* Prev arrow */}
              <button
                onClick={() => gallery.index > 0 && goTo(gallery.index - 1)}
                disabled={gallery.index === 0}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 disabled:opacity-20 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl transition-all"
                aria-label="Anterior"
              >
                ‹
              </button>
              {/* Next arrow */}
              <button
                onClick={() => gallery.index < gallery.images.length - 1 && goTo(gallery.index + 1)}
                disabled={gallery.index === gallery.images.length - 1}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 disabled:opacity-20 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl transition-all"
                aria-label="Siguiente"
              >
                ›
              </button>
            </div>

            {/* Caption */}
            <div className="px-6 pt-5 pb-4 min-h-25">
              <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">
                {gallery.captions[gallery.index]?.title}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {gallery.captions[gallery.index]?.description}
              </p>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 pb-5">
              {gallery.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Ir a imagen ${i + 1}`}
                  className={`rounded-full transition-all duration-200 ${
                    i === gallery.index
                      ? "w-6 h-2.5 bg-violet-600"
                      : "w-2.5 h-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-violet-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      {/* <section
        id="contact"
        className="py-20 px-4 sm:px-8 bg-transparent"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-700 dark:text-gray-200">
            ¿Listo para trabajar juntos?
          </h2>
          <p className="text-xl text-gray/90 dark:text-white/80 mb-8">
            Estoy disponible para nuevos proyectos y colaboraciones
          </p>
          <button className="px-10 py-4 bg-white dark:bg-gray-900 text-cyan-600 dark:text-cyan-400 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-white/50 dark:hover:shadow-gray-900/50 hover:scale-105 transition-all duration-300 border-2 border-transparent dark:border-cyan-400">
            Enviar Mensaje
          </button>
        </div>
      </section> */}
    </div>
  );
}
