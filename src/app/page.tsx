"use client";

export const dynamic = "force-dynamic";

import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import ScrollStars from "./components/ScrollStars";
import TechnologiesSection from "./components/TechnologiesSection";
import ProjectsSection from "./components/ProjectsSection";
import { Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

function ClientOnly({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? <>{children}</> : null;
}

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();

  const toggleLanguage = () => {
    const currentLocale = document.documentElement.lang;
    const newLocale = currentLocale === "es" ? "en" : "es";
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    router.refresh();
  };

  return (
    <div className="relative min-h-screen text-white font-sans">
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <ClientOnly>
          <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 1] }}>
            <ScrollStars />
          </Canvas>
        </ClientOnly>
      </div>

      <main className="relative z-10">
        <ClientOnly>
          <div className="fixed bottom-4 right-4 z-50">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1 rounded bg-cyan-600 text-sm text-white hover:bg-cyan-500 transition"
            >
              <Globe className="w-4 h-4" />
              {locale === "en" ? "English" : "Español"}
            </button>
          </div>
        </ClientOnly>
        <ClientOnly>
          <section className="h-screen flex items-center justify-center">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl font-bold"
              >
                Mauricio Lozano
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-xl mt-2"
              >
                {t("hero.role")}
              </motion.p>
            </div>
          </section>
        </ClientOnly>

        <ClientOnly>
          <section className="px-8 py-20 max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">{t("about.title")}</h2>
            <p className="text-gray-300 leading-relaxed">
              {t("about.description")}
            </p>
          </section>
          <TechnologiesSection />
          <ProjectsSection />
        </ClientOnly>

        <footer className="text-center text-sm text-gray-500 pb-8">
          © 2025 Mauricio Lozano. Todos los derechos reservados.
        </footer>
      </main>
    </div>
  );
}
