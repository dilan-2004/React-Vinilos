
import React from "react";
import 'Footer.css'; 



export default function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} RetroVibe — Todos los derechos reservados.
    </footer>
  );
}