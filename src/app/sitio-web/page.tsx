'use client'

import { useState } from 'react'
import { ArrowLeftIcon, GlobeAltIcon, DevicePhoneMobileIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function SitioWebPage() {
  const [activeTab, setActiveTab] = useState('propuesta')

  const currentWebsite = {
    platform: "Wix Básico",
    features: [
      "Página estática sin integración",
      "Sin sistema de citas online",
      "Sin integración con inventario",
      "Sin BI o analytics",
      "Diseño básico sin profesionalismo"
    ],
    problems: [
      "Pérdida de competitividad vs clinicabiblica.com",
      "No capta pacientes online",
      "Sin automatización de procesos",
      "Experiencia de usuario limitada"
    ]
  }

  const proposedWebsite = {
    platform: "Next.js Profesional",
    sections: [
      {
        title: "Inicio",
        description: "Hero section con servicios principales, testimonios y CTA",
        features: ["Diseño moderno", "Carga rápida", "SEO optimizado"]
      },
      {
        title: "Servicios",
        description: "Catálogo completo de servicios médicos y especialidades",
        features: ["Filtros por especialidad", "Información detallada", "Precios transparentes"]
      },
      {
        title: "Agenda Online",
        description: "Sistema de citas integrado con WhatsApp y Odoo",
        features: ["Disponibilidad en tiempo real", "Confirmación automática", "Recordatorios WhatsApp"]
      },
      {
        title: "Nosotros",
        description: "Información del equipo médico y especialistas",
        features: ["Perfiles profesionales", "Certificaciones", "Experiencia"]
      },
      {
        title: "Contacto",
        description: "Múltiples canales de contacto y ubicación",
        features: ["WhatsApp directo", "Mapa interactivo", "Formulario de contacto"]
      }
    ]
  }

  const integrations = [
    {
      name: "WhatsApp Bot",
      description: "Recordatorios automáticos y confirmación de citas",
      benefit: "Reduce no-shows en 40%"
    },
    {
      name: "Odoo ERP",
      description: "Integración completa con expedientes y facturación",
      benefit: "Centraliza toda la información"
    },
    {
      name: "Dashboard BI",
      description: "Analytics en tiempo real de citas y ingresos",
      benefit: "Mejor toma de decisiones"
    },
    {
      name: "Inventario Farmacia",
      description: "Control de stock integrado con alertas automáticas",
      benefit: "Reduce desperdicio en 10%"
    }
  ]

  const competitiveAdvantages = [
    {
      title: "vs clinicabiblica.com",
      advantage: "Sin sobrecostos del proveedor anterior",
      savings: "Ahorro significativo en desarrollo"
    },
    {
      title: "vs Wix actual",
      advantage: "Integración completa con sistemas internos",
      value: "Automatización total de procesos"
    },
    {
      title: "vs Competencia local",
      advantage: "Primera clínica con BI integrado",
      differentiation: "Ventaja competitiva única"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-purple-600">
      {/* Header */}
      <header className="glass-effect border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-white/60 hover:text-white transition-colors">
                <ArrowLeftIcon className="h-6 w-6" />
              </Link>
              <div>
                <h1 className="text-2xl font-bold mora-text">Sitio Web Profesional</h1>
                <p className="text-white/80 text-sm">Propuesta de Web Integrada</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-white/10 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('actual')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'actual'
                  ? 'bg-purple-600 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Sitio Actual
            </button>
            <button
              onClick={() => setActiveTab('propuesta')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'propuesta'
                  ? 'bg-purple-600 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Propuesta Nueva
            </button>
            <button
              onClick={() => setActiveTab('integraciones')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'integraciones'
                  ? 'bg-purple-600 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Integraciones
            </button>
            <button
              onClick={() => setActiveTab('competitivo')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'competitivo'
                  ? 'bg-purple-600 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Ventaja Competitiva
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'actual' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Sitio Web Actual</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Wix básico sin integración que limita el crecimiento del negocio
              </p>
            </div>

            <div className="roi-card">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GlobeAltIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{currentWebsite.platform}</h3>
                <p className="text-white/70">Plataforma básica sin funcionalidades avanzadas</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Características Actuales:</h4>
                  <ul className="space-y-3">
                    {currentWebsite.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-400 mr-2">✗</span>
                        <span className="text-white/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Problemas Identificados:</h4>
                  <ul className="space-y-3">
                    {currentWebsite.problems.map((problem, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-400 mr-2">⚠</span>
                        <span className="text-white/80 text-sm">{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="roi-card">
                <div className="flex items-center mb-4">
                  <DevicePhoneMobileIcon className="h-8 w-8 text-red-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Mobile Experience</h3>
                </div>
                <p className="text-white/70 mb-2">Diseño no optimizado para móviles</p>
                <p className="text-red-400 font-semibold">Pérdida de pacientes móviles</p>
              </div>

              <div className="roi-card">
                <div className="flex items-center mb-4">
                  <ComputerDesktopIcon className="h-8 w-8 text-red-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">SEO Limitado</h3>
                </div>
                <p className="text-white/70 mb-2">Sin optimización para motores de búsqueda</p>
                <p className="text-red-400 font-semibold">Baja visibilidad online</p>
              </div>

              <div className="roi-card">
                <div className="flex items-center mb-4">
                  <GlobeAltIcon className="h-8 w-8 text-red-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Sin Integración</h3>
                </div>
                <p className="text-white/70 mb-2">No conecta con sistemas internos</p>
                <p className="text-red-400 font-semibold">Trabajo manual duplicado</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'propuesta' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Sitio Web Profesional Propuesto</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Next.js moderno con 5 secciones integradas y estilo clinicabiblica.com
              </p>
            </div>

            <div className="roi-card">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GlobeAltIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{proposedWebsite.platform}</h3>
                <p className="text-white/70">Plataforma moderna con integración completa</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {proposedWebsite.sections.map((section, index) => (
                  <div key={index} className="roi-card">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-white">{section.title}</h4>
                    </div>
                    <p className="text-white/70 mb-4 text-sm">{section.description}</p>
                    <div>
                      <p className="text-sm text-white/60 mb-2">Características:</p>
                      <ul className="space-y-1">
                        {section.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-400 mr-2 text-xs">✓</span>
                            <span className="text-white/80 text-xs">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="roi-card">
                <h3 className="text-xl font-bold text-white mb-6">Beneficios Técnicos</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Carga Ultra Rápida</h4>
                      <p className="text-white/70 text-sm">Next.js optimizado para velocidad</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">SEO Avanzado</h4>
                      <p className="text-white/70 text-sm">Optimización automática para Google</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Mobile First</h4>
                      <p className="text-white/70 text-sm">Diseño responsive perfecto</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Seguridad Empresarial</h4>
                      <p className="text-white/70 text-sm">Protección de datos médicos</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="roi-card">
                <h3 className="text-xl font-bold text-white mb-6">Impacto en Negocio</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Captación Online:</span>
                    <span className="text-green-400 font-semibold">5-10 pacientes/mes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Valor por Paciente:</span>
                    <span className="text-green-400 font-semibold">$120/cita promedio</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Ingresos Adicionales:</span>
                    <span className="text-green-400 font-semibold">$600-1,200/mes</span>
                  </div>
                  <div className="border-t border-white/20 pt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">ROI Anual:</span>
                      <span className="text-green-400 font-bold">$7,200-14,400</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'integraciones' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Integraciones Avanzadas</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Conexión completa con todos los sistemas internos del centro médico
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="roi-card">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">{integration.name}</h3>
                  </div>
                  <p className="text-white/70 mb-4">{integration.description}</p>
                  <div className="bg-green-400/10 border border-green-400/20 rounded-lg p-3">
                    <p className="text-green-400 font-semibold text-sm">{integration.benefit}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="roi-card">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Flujo de Integración Completo</h3>
              <div className="bg-white/5 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <h4 className="text-white font-semibold text-sm">Paciente Agenda</h4>
                    <p className="text-white/70 text-xs">Web → Odoo ERP</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <h4 className="text-white font-semibold text-sm">WhatsApp Bot</h4>
                    <p className="text-white/70 text-xs">Recordatorio automático</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <h4 className="text-white font-semibold text-sm">Dashboard BI</h4>
                    <p className="text-white/70 text-xs">Analytics en tiempo real</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <h4 className="text-white font-semibold text-sm">Inventario</h4>
                    <p className="text-white/70 text-xs">Control automático</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'competitivo' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Ventaja Competitiva</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Diferenciación única en el mercado médico costarricense
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {competitiveAdvantages.map((advantage, index) => (
                <div key={index} className="roi-card">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-lg font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">{advantage.title}</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-white/60 mb-1">Ventaja:</p>
                      <p className="text-white/80 text-sm">{advantage.advantage}</p>
                    </div>
                    <div className="bg-green-400/10 border border-green-400/20 rounded-lg p-3">
                      <p className="text-green-400 font-semibold text-sm">
                        {advantage.savings || advantage.value || advantage.differentiation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="roi-card">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Posicionamiento Único en el Mercado</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Primera Clínica con:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span className="text-white/80 text-sm">BI integrado en sitio web</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span className="text-white/80 text-sm">WhatsApp bot sin cobros por mensaje</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span className="text-white/80 text-sm">ERP médico completo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span className="text-white/80 text-sm">Inventario inteligente</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Beneficios Competitivos:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">→</span>
                      <span className="text-white/80 text-sm">Captación de pacientes premium</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">→</span>
                      <span className="text-white/80 text-sm">Diferenciación en precios</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">→</span>
                      <span className="text-white/80 text-sm">Eficiencia operativa superior</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">→</span>
                      <span className="text-white/80 text-sm">Experiencia de paciente única</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="roi-card">
              <h3 className="text-xl font-bold text-white mb-6 text-center">ROI del Sitio Web</h3>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-4">$600-1,200/mes</div>
                <div className="text-white/80 mb-6">Ingresos adicionales por captación online</div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-2xl font-bold text-purple-400 mb-2">5-10</div>
                    <div className="text-white/80 text-sm">Pacientes nuevos/mes</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400 mb-2">$120</div>
                    <div className="text-white/80 text-sm">Valor promedio por cita</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400 mb-2">12</div>
                    <div className="text-white/80 text-sm">Meses para recuperar inversión</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
