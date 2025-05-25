"use client";

import { useTranslations } from "next-intl";
import React from "react";
import { FaGithub, FaMusic, FaPlayCircle } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function ProjectsSection() {
  const t = useTranslations();

  return (
    <section className="px-8 py-20 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-8 text-center">
        {t("projects.title")}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white/5 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-bold mb-2 text-white">
            {t("projects.items.0.title")}
          </h3>
          <p className="text-gray-400 text-sm mb-3">
            {t("projects.items.0.description")}
          </p>
          <div className="flex gap-3 text-lg text-cyan-300 mb-4">
            <SiNextdotjs title="Next.js" />
            <SiReact title="React" />
            <SiTailwindcss title="Tailwind CSS" />
            <SiTypescript title="TypeScript" />
          </div>
          <a
            href="https://mauykary-wedding.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-500 transition"
          >
            <FaPlayCircle />
            {t("projects.demo")}
          </a>

          <a
            href="https://github.com/themau1111/wedding-invitation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center ml-4 gap-2 mt-2 px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-500 transition"
          >
            <FaGithub />
            Repo
          </a>
        </div>

        <div className="bg-white/5 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-bold mb-2 text-white">
            {t("projects.items.1.title")}
          </h3>
          <p className="text-gray-400 text-sm mb-3">
            {t("projects.items.1.description")}
          </p>
          <div className="flex gap-3 text-lg text-cyan-300 mb-4">
            <SiNextdotjs title="Next.js" />
            <SiReact title="React" />
            <SiTailwindcss title="Tailwind CSS" />
            <SiTypescript title="TypeScript" />
            <FaMusic />
          </div>
          <a
            href="https://piano-app-seven.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-500 transition"
          >
            <FaPlayCircle />
            {t("projects.demo")}
          </a>

          <a
            href="https://github.com/themau1111/piano-app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center ml-4 gap-2 mt-2 px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-500 transition"
          >
            <FaGithub />
            Repo
          </a>
        </div>

        <div className="bg-white/5 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-bold mb-2 text-white">
            {t("projects.items.2.title")}
          </h3>
          <p className="text-gray-400 text-sm mb-3">
            {t("projects.items.2.description")}
          </p>
          <div className="flex gap-3 text-lg text-cyan-300 mb-4">
            <SiReact title="React" />
            <SiTypescript title="TypeScript" />
          </div>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mr-4 mt-2 px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-500 transition"
          >
            <FaPlayCircle />
            {t("projects.demo")}
          </a>
          <a
            href="https://piano-app-seven.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-500 transition"
          >
            <FaGithub />
            Repo
          </a>
        </div>
      </div>
    </section>
  );
}
