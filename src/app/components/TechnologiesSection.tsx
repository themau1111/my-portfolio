"use client";

import { useTranslations } from "next-intl";
import React from "react";

export default function TechnologiesSection() {
  const t = useTranslations();

  return (
    <section className="px-8 py-20 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">{t("technologies.title")}</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-300">
        <li>{t("technologies.list.react")}</li>
        <li>{t("technologies.list.next")}</li>
        <li>{t("technologies.list.typescript")}</li>
        <li>{t("technologies.list.tailwind")}</li>
        <li>{t("technologies.list.three")}</li>
        <li>{t("technologies.list.framer")}</li>
      </ul>
    </section>
  );
}
