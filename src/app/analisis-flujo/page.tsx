'use client'

import { useState } from 'react'
import { ArrowLeftIcon, ChartBarIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import MermaidChart from '@/components/MermaidChart'

export default function AnalisisFlujoPage() {
  const [activeTab, setActiveTab] = useState('actual')

  const currentWorkflow = `
    graph TD
      A[Paciente solicita cita] --> B[WhatsApp/Llamada]
      B --> C[Secretaria agenda en Outlook]
      C --> D[Secretaria agenda en Dentalink]
      D --> E[Recordatorio manual WhatsApp]
      E --> F[Cita confirmada]
      F --> G[Consulta médica]
      G --> H[Facturación en Huli]
      H --> I[Expediente físico]
      
      J[Proveedor necesita stock] --> K[Control manual Excel]
      K --> L[Mensajero manual]
      L --> M[Sin alertas predictivas]
      
      N[Paciente cancela/no-show] --> O[Lista espera manual]
      O --> P[Huecos no aprovechados]
      
      style A fill:#8B5CF6,stroke:#fff,stroke-width:2px,color:#fff
      style B fill:#A78BFA,stroke:#fff,stroke-width:2px,color:#fff
      style C fill:#EF4444,stroke:#fff,stroke-width:2px,color:#fff
      style D fill:#EF4444,stroke:#fff,stroke-width:2px,color:#fff
      style E fill:#EF4444,stroke:#fff,stroke-width:2px,color:#fff
      style K fill:#EF4444,stroke:#fff,stroke-width:2px,color:#fff
      style O fill:#EF4444,stroke:#fff,stroke-width:2px,color:#fff
  `

  const proposedWorkflow = `
    graph TD
      A[Paciente solicita cita] --> B[WhatsApp Bot automático]
      B --> C[Agenda centralizada Odoo]
      C --> D[Recordatorio automático WhatsApp]
      D --> E[Confirmación/cancelación automática]
      E --> F[Cita confirmada]
      F --> G[Consulta médica]
      G --> H[Facturación integrada]
      H --> I[Expediente digital Odoo]
      
      J[Proveedor necesita stock] --> K[Inventario inteligente Odoo]
      K --> L[Alertas automáticas]
      L --> M[Predicción de consumo]
      
      N[Paciente cancela/no-show] --> O[Auto-fill lista espera]
      O --> P[Maximización ocupación]
      
      Q[Dashboard BI] --> R[KPIs en tiempo real]
      R --> S[Reportes automáticos]
      
      style A fill:#8B5CF6,stroke:#fff,stroke-width:2px,color:#fff
      style B fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
      style C fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
      style D fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
      style E fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
      style K fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
      style O fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
      style Q fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
  `

  const painPoints = [
    {
      title: "Recordatorios Manuales",
      description: "1-2 horas/día de secretaria en WhatsApp manual",
      impact: "Crítico",
      priority: 1,
      cost: "$240/mes",
      color: "text-red-500"
    },
    {
      title: "Duplicidad de Agendas",
      description: "Outlook + Dentalink = riesgo de error y pérdida de tiempo",
      impact: "Crítico",
      priority: 2,
      cost: "Riesgo alto",
      color: "text-red-500"
    },
    {
      title: "Lista de Espera Manual",
      description: "Huecos no aprovechados por falta de automatización",
      impact: "Alto",
      priority: 3,
      cost: "$600-800/mes",
      color: "text-red-400"
    },
    {
      title: "Web Básica",
      description: "Wix sin integración = pérdida de competitividad",
      impact: "Alto",
      priority: 4,
      cost: "$600-1,200/mes",
      color: "text-red-400"
    },
    {
      title: "Expedientes Híbridos",
      description: "Físicos + parcialmente digitales = baja visibilidad",
      impact: "Medio",
      priority: 5,
      cost: "Eficiencia baja",
      color: "text-yellow-400"
    },
    {
      title: "Proveeduría Manual",
      description: "Excel + mensajero sin control predictivo",
      impact: "Medio",
      priority: 6,
      cost: "$300/mes",
      color: "text-yellow-400"
    }
  ]

  const automations = [
    {
      title: "Bot WhatsApp Automático",
      description: "Recordatorios automáticos con confirmación/cancelación",
      savings: "1.5h/día secretaria",
      value: "$240/mes",
      priority: 1,
      impact: "Crítico"
    },
    {
      title: "ERP Odoo Centralizado",
      description: "Agenda única + expedientes digitales integrados",
      savings: "Elimina duplicidad",
      value: "Riesgo eliminado",
      priority: 2,
      impact: "Crítico"
    },
    {
      title: "Auto-fill Lista Espera",
      description: "Maximización automática de ocupación de agenda",
      savings: "20% más citas",
      value: "$600-800/mes",
      priority: 3,
      impact: "Alto"
    },
    {
      title: "Web Profesional Integrada",
      description: "Sitio web estilo clinicabiblica.com con BI",
      savings: "5-10 pacientes nuevos/mes",
      value: "$600-1,200/mes",
      priority: 4,
      impact: "Alto"
    },
    {
      title: "Dashboard KPIs",
      description: "12 KPIs en tiempo real para clínica y facturación",
      savings: "Visibilidad completa",
      value: "Mejor toma de decisiones",
      priority: 5,
      impact: "Medio"
    },
    {
      title: "Inventario Inteligente",
      description: "Alertas automáticas + predicción de consumo",
      savings: "10% menos desperdicio",
      value: "$300/mes",
      priority: 6,
      impact: "Medio"
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
                <h1 className="text-2xl font-bold mora-text">Análisis de Flujo de Trabajo</h1>
                <p className="text-white/80 text-sm">Salud Mora Real S.A.</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-wrap gap-1 bg-white/10 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('actual')}
              className={`flex-1 min-w-0 py-2 px-2 sm:px-4 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                activeTab === 'actual'
                  ? 'bg-purple-600 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <span className="hidden sm:inline">Flujo Actual</span>
              <span className="sm:hidden">Actual</span>
            </button>
            <button
              onClick={() => setActiveTab('propuesto')}
              className={`flex-1 min-w-0 py-2 px-2 sm:px-4 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                activeTab === 'propuesto'
                  ? 'bg-purple-600 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <span className="hidden sm:inline">Flujo Propuesto</span>
              <span className="sm:hidden">Propuesto</span>
            </button>
            <button
              onClick={() => setActiveTab('dolores')}
              className={`flex-1 min-w-0 py-2 px-2 sm:px-4 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                activeTab === 'dolores'
                  ? 'bg-purple-600 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <span className="hidden sm:inline">Pain Points</span>
              <span className="sm:hidden">Problemas</span>
            </button>
            <button
              onClick={() => setActiveTab('automatizaciones')}
              className={`flex-1 min-w-0 py-2 px-2 sm:px-4 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                activeTab === 'automatizaciones'
                  ? 'bg-purple-600 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <span className="hidden sm:inline">Automatizaciones</span>
              <span className="sm:hidden">Auto</span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'actual' && (
          <div className="space-y-8">
            <div className="text-center mb-6 sm:mb-8 px-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Flujo de Trabajo Actual</h2>
              <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
                Procesos manuales que generan ineficiencias y costos operativos elevados
              </p>
            </div>

            <div className="roi-card">
              <div className="bg-white/5 rounded-lg p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Diagrama de Flujo Actual</h3>
                  <p className="text-white/70">Procesos con duplicidad y trabajo manual</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 overflow-x-auto">
                  <div className="text-sm text-white/80">
                    <div className="mb-4">
                      <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                      <span>Proceso normal</span>
                    </div>
                    <div className="mb-4">
                      <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                      <span>Cuellos de botella identificados</span>
                    </div>
                  </div>
                  <MermaidChart chart={currentWorkflow} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="roi-card">
                <div className="flex items-center mb-4">
                  <ClockIcon className="h-8 w-8 text-red-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Tiempo Perdido</h3>
                </div>
                <p className="text-white/70 mb-2">1-2 horas/día en recordatorios manuales</p>
                <p className="text-red-400 font-semibold">$240/mes en costos de secretaria</p>
              </div>

              <div className="roi-card">
                <div className="flex items-center mb-4">
                  <ChartBarIcon className="h-8 w-8 text-red-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Duplicidad</h3>
                </div>
                <p className="text-white/70 mb-2">Outlook + Dentalink</p>
                <p className="text-red-400 font-semibold">Riesgo de errores y pérdida de tiempo</p>
              </div>

              <div className="roi-card">
                <div className="flex items-center mb-4">
                  <UserGroupIcon className="h-8 w-8 text-red-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">No-shows</h3>
                </div>
                <p className="text-white/70 mb-2">2-3 citas/semana perdidas</p>
                <p className="text-red-400 font-semibold">$960-1,440/mes en ingresos perdidos</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'propuesto' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Flujo de Trabajo Propuesto</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Automatización completa con ERP Odoo y WhatsApp integrado
              </p>
            </div>

            <div className="roi-card">
              <div className="bg-white/5 rounded-lg p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Diagrama de Flujo Propuesto</h3>
                  <p className="text-white/70">Procesos automatizados y centralizados</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 overflow-x-auto">
                  <div className="text-sm text-white/80">
                    <div className="mb-4">
                      <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                      <span>Proceso normal</span>
                    </div>
                    <div className="mb-4">
                      <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      <span>Procesos automatizados</span>
                    </div>
                  </div>
                  <MermaidChart chart={proposedWorkflow} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="roi-card">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">WhatsApp Bot Automático</h3>
                </div>
                <p className="text-white/70 mb-2">Recordatorios automáticos con confirmación/cancelación</p>
                <p className="text-green-400 font-semibold">Ahorro: 1.5h/día secretaria</p>
              </div>

              <div className="roi-card">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">ERP Odoo Centralizado</h3>
                </div>
                <p className="text-white/70 mb-2">Agenda única + expedientes digitales</p>
                <p className="text-green-400 font-semibold">Eliminación de duplicidad</p>
              </div>

              <div className="roi-card">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Auto-fill Lista Espera</h3>
                </div>
                <p className="text-white/70 mb-2">Maximización automática de ocupación</p>
                <p className="text-green-400 font-semibold">+20% más citas = $600-800/mes</p>
              </div>

              <div className="roi-card">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Dashboard BI</h3>
                </div>
                <p className="text-white/70 mb-2">12 KPIs en tiempo real</p>
                <p className="text-green-400 font-semibold">Visibilidad completa del negocio</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'dolores' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Pain Points Identificados</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Problemas críticos que afectan la eficiencia y rentabilidad
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {painPoints.map((point, index) => (
                <div key={index} className="roi-card">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xs font-bold">{point.priority}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white">{point.title}</h3>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${point.color} bg-white/10`}>
                      {point.impact}
                    </span>
                  </div>
                  <p className="text-white/70 mb-3">{point.description}</p>
                  <div className="bg-red-400/10 border border-red-400/20 rounded-lg p-2">
                    <p className="text-red-400 font-semibold text-sm">Costo: {point.cost}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'automatizaciones' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Automatizaciones Propuestas</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Soluciones específicas para cada pain point identificado
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {automations.map((automation, index) => (
                <div key={index} className="roi-card">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">{automation.priority}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white">{automation.title}</h3>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      automation.impact === 'Crítico' ? 'text-red-400 bg-red-400/10' :
                      automation.impact === 'Alto' ? 'text-orange-400 bg-orange-400/10' :
                      'text-yellow-400 bg-yellow-400/10'
                    }`}>
                      {automation.impact}
                    </span>
                  </div>
                  <p className="text-white/70 mb-4">{automation.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-white/60">Ahorro:</p>
                      <p className="text-green-400 font-semibold">{automation.savings}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-white/60">Valor:</p>
                      <p className="text-purple-400 font-semibold">{automation.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
