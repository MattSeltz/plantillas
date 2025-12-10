"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, Mail, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const templates = [
  {
    id: 1,
    name: "Barbería Clásica",
    description: "Diseño moderno para barberías y peluquerías",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=600&fit=crop",
    demoUrl: "https://barberia.mati-seltzer.com",
  },
  {
    id: 2,
    name: "Café Artesanal",
    description: "Perfecta para cafeterías y coffee shops",
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=600&fit=crop",
    demoUrl: "https://cafeteria.mati-seltzer.com",
  },
  {
    id: 3,
    name: "Centro de Estética",
    description: "Elegante diseño para salones de belleza",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop",
    demoUrl: "https://estetica.mati-seltzer.com",
  },
  {
    id: 4,
    name: "Eventos Premium",
    description: "Ideal para organizadores de eventos",
    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=600&fit=crop",
    demoUrl: "https://eventos.mati-seltzer.com",
  },
  {
    id: 5,
    name: "Portfolio Fotográfico",
    description: "Showcase profesional para fotógrafos",
    image:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=600&fit=crop",
    demoUrl: "https://fotografo.mati-seltzer.com",
  },
  {
    id: 6,
    name: "Fitness Pro",
    description: "Potente diseño para gimnasios y centros fitness",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    demoUrl: "https://gimnasio.mati-seltzer.com",
  },
  {
    id: 7,
    name: "Real Estate",
    description: "Solución completa para inmobiliarias",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    demoUrl: "https://inmobiliaria.mati-seltzer.com",
  },
  {
    id: 8,
    name: "Joyería Elegante",
    description: "Diseño refinado para joyerías",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop",
    demoUrl: "https://joyeria.mati-seltzer.com",
  },
  {
    id: 9,
    name: "Servicios de Limpieza",
    description: "Profesional y confiable para empresas de limpieza",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
    demoUrl: "https://limpieza.mati-seltzer.com",
  },
  {
    id: 10,
    name: "Reparaciones Express",
    description: "Para servicios técnicos y reparaciones",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
    demoUrl: "https://reparaciones.mati-seltzer.com",
  },
  {
    id: 11,
    name: "Restaurante Gourmet",
    description: "Exquisito diseño para restaurantes",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    demoUrl: "https://restaurante.mati-seltzer.com",
  },
  {
    id: 12,
    name: "Studio de Tatuajes",
    description: "Diseño audaz para estudios de tatuajes",
    image:
      "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=800&h=600&fit=crop",
    demoUrl: "https://tatuaje.mati-seltzer.com",
  },
  {
    id: 13,
    name: "E-Commerce",
    description: "Tienda online completa y moderna",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    demoUrl: "https://tienda.mati-seltzer.com",
  },
  {
    id: 14,
    name: "Agencia de Turismo",
    description: "Inspira a viajar con este diseño atractivo",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    demoUrl: "https://turismo.mati-seltzer.com",
  },
  {
    id: 15,
    name: "Clínica Veterinaria",
    description: "Amigable y profesional para veterinarias",
    image:
      "https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=800&h=600&fit=crop",
    demoUrl: "https://veterinaria.mati-seltzer.com",
  },
];

export default function TemplateEcommerce() {
  const handleEmailContact = (templateName) => {
    const subject = `Consulta sobre plantilla: ${templateName}`;
    const body = `Hola,\n\nEstoy interesado en la plantilla "${templateName}".\n\n¿Podrían enviarme más información?\n\nGracias.`;
    window.location.href = `mailto:matitec00@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"
        />
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="relative backdrop-blur-sm bg-white/70 border-b border-white/20 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur-lg opacity-50" />
                <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
              <h1 className="text-3xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Mati
                </span>
                <span className="text-slate-800">Tec</span>
              </h1>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg"
                onClick={() => handleEmailContact("Consulta General")}
              >
                Contacto
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full px-6 py-2 text-sm font-medium text-blue-700">
              ✨ 15 Plantillas Profesionales
            </div>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Plantillas Web{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Profesionales
            </span>
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Dale vida a tu negocio con nuestras plantillas diseñadas con
            atención al detalle
          </p>
        </motion.div>
      </section>

      {/* Templates Grid */}
      <section className="relative max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <Card className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm group">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-indigo-600/0 group-hover:from-blue-600/10 group-hover:to-indigo-600/10 transition-all duration-300 z-10 pointer-events-none" />

                <div className="relative overflow-hidden aspect-[4/3]">
                  <motion.img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Badge flotante */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-slate-700 shadow-lg"
                  >
                    Premium
                  </motion.div>
                </div>

                <CardHeader className="relative z-20">
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {template.name}
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    {template.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-20 flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 border-2 border-slate-200 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 transition-all"
                    onClick={() => window.open(template.demoUrl, "_blank")}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Ver Demo
                  </Button>
                  <Button
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all"
                    onClick={() => handleEmailContact(template.name)}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Consultar
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center shadow-2xl"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJ2Mmgydi0yem0wIDRoLTJ2Mmgydi0yem0wIDRoLTJ2Mmgydi0yem0wIDRoLTJ2Mmgydi0yem0wIDRoLTJ2Mmgydi0yem0tNCAwaC0ydjJoMnYtMnptLTQgMGgtMnYyaDJ2LTJ6bS00IDBoLTJ2Mmgydi0yem0tNCAwSDIydjJoMnYtMnptLTQgMGgtMnYyaDJ2LTJ6bS00IDBoLTJ2Mmc9PSIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Listo para empezar tu proyecto?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Contáctanos y descubre cómo podemos ayudarte a crear la presencia
              digital perfecta para tu negocio
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl text-lg px-8 py-6"
                onClick={() => handleEmailContact("Consulta General")}
              >
                Contactar Ahora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative backdrop-blur-sm bg-white/70 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Mati
                </span>
                <span className="text-slate-800">Tec</span>
              </span>
            </div>
            <p className="text-slate-600">
              © {new Date().getFullYear()} MatiTec. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
