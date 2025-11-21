/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { HeroScene } from './components/QuantumScene';
import { TrilogyShowcase } from './components/Diagrams';
import { ArrowRight, Brain, Activity, Zap, Shield, Dna, ChevronDown, Lock } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-tech-dark text-tech-silver selection:bg-neon-purple selection:text-white overflow-x-hidden font-body">
      
      {/* Cyber Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-purple via-neon-blue to-neon-green z-50 origin-left shadow-[0_0_10px_rgba(168,85,247,0.5)]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Tech Navbar */}
      <nav className="fixed top-0 w-full z-40 bg-tech-dark/80 backdrop-blur-lg border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollTo('hero')}>
            <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 border border-neon-purple/50 rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
                <div className="absolute inset-0 border border-neon-blue/50 rounded-lg -rotate-12 group-hover:rotate-0 transition-transform duration-500"></div>
                <span className="font-display font-bold text-white text-xl relative z-10">M</span>
            </div>
            <div className="flex flex-col">
                <span className="font-display font-bold text-sm tracking-widest text-white">MÉTODO</span>
                <span className="font-display text-[10px] tracking-[0.3em] text-neon-purple uppercase">Aprobado</span>
            </div>
          </div>

          <div className="hidden md:flex gap-8 text-xs font-bold tracking-widest text-tech-dim uppercase font-display">
            <button onClick={() => scrollTo('vision')} className="hover:text-white hover:text-glow transition-all">Visión</button>
            <button onClick={() => scrollTo('trilogy1')} className="hover:text-neon-purple transition-colors">Control</button>
            <button onClick={() => scrollTo('trilogy2')} className="hover:text-neon-gold transition-colors">Movimiento</button>
            <button onClick={() => scrollTo('trilogy3')} className="hover:text-neon-green transition-colors">Energía</button>
            <button onClick={() => scrollTo('trilogy4')} className="hover:text-neon-blue transition-colors">Defensa</button>
          </div>

          <button className="relative overflow-hidden px-6 py-2 rounded-sm bg-white/5 border border-white/20 text-xs font-bold uppercase hover:border-neon-purple/50 hover:bg-neon-purple/10 transition-all group">
            <span className="relative z-10 flex items-center gap-2">
              Pack Maestro <Zap size={14} className="text-neon-purple" />
            </span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tech-dark/50 to-tech-dark pointer-events-none" />
        
        {/* Scanlines */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20"></div>

        <div className="relative z-10 container mx-auto px-6 text-center mt-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-neon-cyan text-xs font-bold tracking-[0.2em] uppercase mb-8 font-display"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
            </span>
            Imperio Digital de Salud
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-9xl font-black leading-none mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-tech-silver to-gray-600 drop-shadow-2xl"
          >
            MAPA DEL <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-blue text-glow">IMPERIO</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-3xl mx-auto text-xl text-tech-dim font-light leading-relaxed mb-12 font-body"
          >
            12 Activos Digitales. 4 Trilogías Maestras.<br/>
            <span className="text-white font-medium">La biología explicada como Hardware y Software.</span>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
          >
             <button onClick={() => scrollTo('vision')} className="px-8 py-4 bg-white text-tech-dark font-display font-bold tracking-wider hover:bg-neon-cyan hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)] rounded-sm clip-path-polygon">
                INICIAR PROTOCOLO
             </button>
          </motion.div>
        </div>

        <motion.div 
             animate={{ y: [0, 10, 0] }}
             transition={{ duration: 2, repeat: Infinity }}
             className="absolute bottom-10 left-1/2 -translate-x-1/2 text-tech-dim cursor-pointer hover:text-white"
             onClick={() => scrollTo('vision')}
        >
            <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-32 relative border-t border-white/5 bg-tech-dark">
        <div className="absolute left-0 top-0 w-1/2 h-full bg-neon-purple/5 blur-[100px]"></div>
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <Dna className="text-neon-purple" size={40} />
                        <h2 className="font-display text-4xl md:text-5xl text-white font-bold">LA VISIÓN</h2>
                    </div>
                    <div className="w-full h-px bg-gradient-to-r from-neon-purple to-transparent mb-8"></div>
                    
                    <p className="text-xl text-tech-silver leading-relaxed mb-8">
                        No tienes "un ebook". Tienes <strong className="text-white">12 Activos Digitales</strong> planificados.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="glass-tech p-6 rounded-xl border-l-4 border-neon-purple">
                            <h4 className="font-display text-lg text-white mb-2">Oferta Grand Slam</h4>
                            <p className="text-tech-dim text-sm">Cada trilogía es un sistema completo ($17-$27 c/u) que resuelve un problema específico de principio a fin.</p>
                        </div>
                        <div className="glass-tech p-6 rounded-xl border-l-4 border-neon-blue">
                            <h4 className="font-display text-lg text-white mb-2">El Pack Maestro</h4>
                            <p className="text-tech-dim text-sm">Las 4 Trilogías por $47-$67. High-ticket accesible para estudiantes serios.</p>
                        </div>
                        <div className="glass-tech p-6 rounded-xl border-l-4 border-neon-cyan">
                            <h4 className="font-display text-lg text-white mb-2">Mercado Total</h4>
                            <p className="text-tech-dim text-sm">Desde Medicina y Enfermería hasta Kinesiología y Nutrición.</p>
                        </div>
                    </div>
                </motion.div>

                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 blur-3xl rounded-full"></div>
                    <div className="relative grid grid-cols-2 gap-4">
                        <div className="space-y-4 mt-8">
                            <div className="bg-tech-panel border border-white/10 p-6 rounded-lg h-40 flex flex-col justify-end hover:border-neon-purple/50 transition-colors">
                                <span className="text-4xl font-display font-bold text-neon-purple">01</span>
                                <span className="text-xs uppercase tracking-widest text-tech-dim">Control</span>
                            </div>
                            <div className="bg-tech-panel border border-white/10 p-6 rounded-lg h-48 flex flex-col justify-end hover:border-neon-gold/50 transition-colors">
                                <span className="text-4xl font-display font-bold text-neon-gold">02</span>
                                <span className="text-xs uppercase tracking-widest text-tech-dim">Movimiento</span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-tech-panel border border-white/10 p-6 rounded-lg h-48 flex flex-col justify-end hover:border-neon-green/50 transition-colors">
                                <span className="text-4xl font-display font-bold text-neon-green">03</span>
                                <span className="text-xs uppercase tracking-widest text-tech-dim">Energía</span>
                            </div>
                            <div className="bg-tech-panel border border-white/10 p-6 rounded-lg h-40 flex flex-col justify-end hover:border-neon-blue/50 transition-colors">
                                <span className="text-4xl font-display font-bold text-neon-blue">04</span>
                                <span className="text-xs uppercase tracking-widest text-tech-dim">Defensa</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* TRILOGY 1: CONTROL (NEURO) - PURPLE THEME */}
      <section id="trilogy1" className="py-32 bg-[#05050a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <Brain className="text-neon-purple" size={28} />
                        <span className="text-neon-purple font-display font-bold tracking-[0.2em] uppercase text-sm">Trilogía 01</span>
                    </div>
                    <h2 className="font-display text-5xl md:text-6xl text-white mb-4">CONTROL Y <br/>SUPERVIVENCIA</h2>
                    <div className="h-1 w-20 bg-neon-purple rounded-full mb-6"></div>
                    <p className="text-tech-dim max-w-xl text-lg font-light">
                        El nicho más difícil y rentable. <br/>
                        Concepto: <strong className="text-white">Hardware, Software y Motor.</strong>
                    </p>
                </div>
                <div className="text-right hidden md:block">
                    <div className="text-4xl font-display font-bold text-white/10">80%</div>
                    <div className="text-xs uppercase tracking-widest text-tech-dim">Completada</div>
                </div>
            </div>
            
            <TrilogyShowcase 
                accentColor="text-neon-purple"
                glowColor="#A855F7"
                books={[
                    { title: "El Método Aprobado: Domina Neuroanatomía sin Memorizar", sub: "El Hardware: Neuronas y estructura.", status: "LISTO", delay: 0 },
                    { title: "El Método Aprobado: Domina el Sistema Nervioso Autónomo", sub: "El Software: Simpático vs Parasimpático.", status: "LISTO", delay: 0.2 },
                    { title: "El Método Aprobado: El Código Cardiovascular", sub: "El Motor: Hidráulica del cuerpo humano.", status: "PENDIENTE", delay: 0.4 }
                ]}
            />
        </div>
      </section>

      {/* TRILOGY 2: MOTION - GOLD THEME */}
      <section id="trilogy2" className="py-32 bg-tech-dark relative overflow-hidden border-t border-white/5">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-gold/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 md:flex-row-reverse">
                <div className="text-right">
                    <div className="flex items-center justify-end gap-3 mb-4">
                        <span className="text-neon-gold font-display font-bold tracking-[0.2em] uppercase text-sm">Trilogía 02</span>
                        <Activity className="text-neon-gold" size={28} />
                    </div>
                    <h2 className="font-display text-5xl md:text-6xl text-white mb-4">LA MÁQUINA DE <br/>MOVIMIENTO</h2>
                    <div className="h-1 w-20 bg-neon-gold rounded-full mb-6 ml-auto"></div>
                    <p className="text-tech-dim max-w-xl ml-auto text-lg font-light">
                        Kinesiología y Fisioterapia.<br/>
                        Concepto: <strong className="text-white">Estructura, Motor y Palancas.</strong>
                    </p>
                </div>
            </div>

            <TrilogyShowcase 
                accentColor="text-neon-gold" 
                glowColor="#F59E0B"
                books={[
                    { title: "La Arquitectura Ósea", sub: "Domina los 206 huesos y sus funciones.", status: "PRONTO", delay: 0 },
                    { title: "La Ingeniería Muscular", sub: "Origen, inserción y acción mecánica.", status: "PRONTO", delay: 0.2 },
                    { title: "El Secreto Articular", sub: "Palancas, bisagras y rangos de movimiento.", status: "PRONTO", delay: 0.4 }
                ]}
            />
        </div>
      </section>

       {/* TRILOGY 3: ENERGY - GREEN THEME */}
       <section id="trilogy3" className="py-32 bg-[#05050a] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="mb-16 text-center max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <Zap className="text-neon-green" size={28} />
                    <span className="text-neon-green font-display font-bold tracking-[0.2em] uppercase text-sm">Trilogía 03</span>
                </div>
                <h2 className="font-display text-5xl md:text-6xl text-white mb-6">ENERGÍA Y COMBUSTIBLE</h2>
                <p className="text-tech-dim text-lg font-light">
                    Nutrición y Medicina Interna.<br/>
                    Concepto: <strong className="text-white">Ventilación, Procesamiento y Regulación.</strong>
                </p>
            </div>
            
            <TrilogyShowcase 
                accentColor="text-neon-green" 
                glowColor="#10B981"
                books={[
                    { title: "El Motor Respiratorio", sub: "Intercambio de gases y mecánica.", status: "PRONTO", delay: 0 },
                    { title: "La Fábrica Digestiva", sub: "Ruta química de nutrientes paso a paso.", status: "PRONTO", delay: 0.2 },
                    { title: "El Código Hormonal", sub: "Sistema Endocrino y control metabólico.", status: "PRONTO", delay: 0.4 }
                ]}
            />
        </div>
      </section>

      {/* TRILOGY 4: DEFENSE - BLUE THEME */}
      <section id="trilogy4" className="py-32 bg-tech-dark relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-full h-[300px] bg-gradient-to-b from-neon-blue/5 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
             <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <Shield className="text-neon-blue" size={28} />
                        <span className="text-neon-blue font-display font-bold tracking-[0.2em] uppercase text-sm">Trilogía 04</span>
                    </div>
                    <h2 className="font-display text-5xl md:text-6xl text-white mb-4">DEFENSA Y <br/>MANTENIMIENTO</h2>
                    <div className="h-1 w-20 bg-neon-blue rounded-full mb-6"></div>
                    <p className="text-tech-dim max-w-xl text-lg font-light">
                        Enfermería, Bioanálisis y Patología.<br/>
                        Concepto: <strong className="text-white">Protección, Filtrado y Continuidad.</strong>
                    </p>
                </div>
            </div>

            <TrilogyShowcase 
                accentColor="text-neon-blue" 
                glowColor="#3B82F6"
                books={[
                    { title: "El Escudo Inmune", sub: "Virus vs Cuerpos: Guerra microscópica.", status: "PRONTO", delay: 0 },
                    { title: "El Filtro Renal", sub: "Líquidos, electrolitos y filtrado.", status: "PRONTO", delay: 0.2 },
                    { title: "El Origen (Reproductivo)", sub: "Ciclos, creación y continuidad.", status: "PRONTO", delay: 0.4 }
                ]}
            />
        </div>
      </section>

      {/* GRAND SLAM OFFER */}
      <section className="py-32 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15)_0%,rgba(3,7,18,1)_70%)]"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto border border-white/10 bg-tech-panel/50 backdrop-blur-2xl p-12 rounded-[2rem] shadow-[0_0_50px_rgba(168,85,247,0.1)] relative overflow-hidden"
            >
                {/* Animated border gradient */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-green animate-gradient"></div>

                <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white font-display font-bold px-6 py-2 rounded-full mb-8 text-sm uppercase tracking-widest">
                    Oferta High-Ticket
                </div>
                
                <h2 className="font-display text-5xl md:text-7xl text-white mb-6 leading-tight">
                    EL PACK <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">MAESTRO</span>
                </h2>
                
                <p className="text-xl text-tech-dim mb-12 max-w-2xl mx-auto">
                    Acceso total a las 4 Trilogías. Domina el mapa completo de la anatomía humana y conviértete en un referente.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto bg-black/40 p-6 rounded-xl border border-white/5">
                    <div className="flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0">
                        <span className="text-tech-dim text-sm uppercase tracking-widest mb-2">Valor Individual</span>
                        <span className="text-3xl font-display text-tech-dim line-through decoration-neon-pink/50 decoration-2">$108 USD</span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                         <span className="text-neon-green text-sm uppercase tracking-widest mb-2">Oferta Hoy</span>
                        <span className="text-5xl font-display font-bold text-white">$47 USD</span>
                    </div>
                </div>

                <button className="w-full md:w-auto px-16 py-5 bg-white text-black font-display font-black text-lg uppercase tracking-wider hover:bg-neon-purple hover:text-white transition-all duration-300 shadow-[0_0_40px_rgba(168,85,247,0.3)] rounded-sm clip-path-polygon">
                    DESBLOQUEAR EL IMPERIO
                </button>
                
                <p className="mt-8 text-xs text-tech-dim uppercase tracking-widest flex items-center justify-center gap-2">
                    <Lock size={12} /> Acceso Inmediato Digital
                </p>
            </motion.div>
        </div>
      </section>

      <footer className="bg-[#02040a] py-12 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white font-display font-bold text-xl mx-auto mb-6 rotate-45">
                <span className="-rotate-45">M</span>
            </div>
            <p className="text-tech-dim text-sm mb-4">© 2024 El Método Aprobado.</p>
            <p className="text-tech-dark/50 text-xs font-mono">SYSTEM_VERSION: 4.0.1 // BIOLOGICAL_ASSETS_READY</p>
        </div>
      </footer>
    </div>
  );
};

export default App;