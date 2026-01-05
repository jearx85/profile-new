"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Info() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skills = [
    { name: "Python", level: 90, color: "bg-blue-500" },
    { name: "JavaScript/TypeScript", level: 85, color: "bg-yellow-500" },
    { name: "React & Next.js", level: 88, color: "bg-cyan-500" },
    { name: "Análisis de Datos", level: 92, color: "bg-green-500" },
    { name: "SQL & Databases", level: 87, color: "bg-purple-500" },
    { name: "Machine Learning", level: 80, color: "bg-red-500" },
  ];

  const projects = [
    {
      title: "Sistema de Análisis de Datos",
      description:
        "Plataforma para visualización y análisis de grandes volúmenes de datos empresariales.",
      tech: ["Python", "Pandas", "React"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Dashboard Interactivo",
      description:
        "Aplicación web con dashboards en tiempo real para métricas de negocio.",
      tech: ["Next.js", "TypeScript", "Chart.js"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "API REST Escalable",
      description:
        "Backend robusto con arquitectura de microservicios y alta disponibilidad.",
      tech: ["Node.js", "PostgreSQL", "Docker"],
      color: "from-green-500 to-teal-500",
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
              <div className="flex gap-4 justify-center md:justify-start mb-8">
                <button className="px-8 py-3 bg-linear-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-cyan-500/50 dark:hover:shadow-cyan-400/50 hover:scale-105 transition-all duration-300">
                  Ver Proyectos
                </button>
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
              Soy un desarrollador apasionado con experiencia en el desarrollo
              de soluciones a medida y en la explotación de datos para generar
              valor en los negocios. Me gusta trabajar en proyectos que combinan
              programación, análisis de datos y herramientas tecnológicas
              avanzadas.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
              Siempre estoy buscando aprender nuevas tecnologías y mejorar mis
              habilidades para ofrecer soluciones innovadoras y eficientes. Si
              quieres saber más sobre mí o mis proyectos, no dudes en
              contactarme.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 sm:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
            Mis <span className="text-cyan-500 dark:text-cyan-400">Habilidades</span>
          </h2>
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-400/10 transition-all duration-300 border border-gray-200 dark:border-gray-700"
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="flex justify-between mb-3">
                  <span className="font-semibold text-gray-800 dark:text-gray-100 text-lg">
                    {skill.name}
                  </span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                    style={{
                      width: hoveredSkill === index ? `${skill.level}%` : "0%",
                    }}
                  ></div>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 dark:hover:shadow-cyan-400/20 transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                <div
                  className={`h-40 bg-linear-to-br ${project.color} flex items-center justify-center`}
                >
                  <div className="text-white text-6xl opacity-90">💻</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-medium border border-cyan-200 dark:border-cyan-800"
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
