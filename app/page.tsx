"use client";

import Info from "@/components/info/Info";
import Navbar from "@/components/navbar/Navbar";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const theme = useTheme();
  const year = new Date().getFullYear();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative bg-white dark:bg-gray-950 overflow-hidden">
      {/* Mouse Light Effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 50%)`,
        }}
      />

      {/* Fixed Navbar */}
      <header className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo and Name */}
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                <Image
                  src="/avatar.png"
                  alt="Profile Picture"
                  width={50}
                  height={50}
                  className="relative rounded-full border-2 border-white dark:border-gray-800 shadow-md"
                />
              </div>
              <div className="hidden sm:block">
                <p className="text-xl font-bold bg-linear-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  Jeisson Araque
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  Full Stack Developer
                </p>
              </div>
            </div>

            {/* Navigation */}
            <Navbar />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        <Info />
      </main>

      {/* Footer */}
      <footer className="dark:bg-gray-950 text-white py-8 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-700 dark:text-gray-300">
            © {year} Jeisson Araque. Todos los derechos reservados.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://github.com/jearx85"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Image
                src={
                  theme.theme === "dark"
                    ? "/icons/github_dark.png"
                    : "/icons/github.png"
                }
                alt="GitHub"
                width={30}
                height={30}
                className="cursor-pointer"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/jeisson-araque/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Image
                src={
                  theme.theme === "dark"
                    ? "/icons/linkedin_dark.png"
                    : "/icons/linkedin2.png"
                }
                alt="LinkedIn"
                width={30}
                height={30}
                className="cursor-pointer"
              />
            </a>

            <a href="mailto:jearx85@gmail.com" aria-label="Email">
              <Image
                src={
                  theme.theme === "dark"
                    ? "/icons/email_dark.png"
                    : "/icons/email.png"
                }
                alt="Email"
                width={30}
                height={30}
                className="cursor-pointer"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
