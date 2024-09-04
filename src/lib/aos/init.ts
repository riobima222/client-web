// components/AOSInit.js
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function AOSInit() {
  useEffect(() => {
    AOS.init({
      // Konfigurasi AOS di sini
      // once: true,
      // Opsi lainnya...
    });
  }, []);

  return null;
}
