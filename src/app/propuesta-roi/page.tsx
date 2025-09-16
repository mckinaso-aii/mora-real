'use client'

import { useState } from 'react'
import { ArrowLeftIcon, CurrencyDollarIcon, ChartBarIcon, ClockIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function PropuestaROIPage() {
  const [activeTab, setActiveTab] = useState('comparativo')

  const cortexPlan = {
    name: "Cortex",
    price: 795,
    maintenance: 195,
    features: [
      "Dashboard estático (5 KPIs, 1 área)",
      "1 automatización práctica",
      "Web simple (3 páginas)",
      "Análisis inicial con hasta 3 documentos"
    ],
    limitations: [
      "Solo 1 departamento (dental únicamente)",
      "No escalable a farmacia ni especialistas",
      "KPIs estáticos, no adaptativos",
      "No resuelve duplicidad de agenda",
      "No incluye ERP completo ni integraciones"
    ],
    roi: {
      monthly: 1200,
      annual: 14400,
      net: 405 // 1200 - 795
    }
  }

  const neuralPlan = {
    name: "Neural",
    price: 1495,
    maintenance: 395,
    features: [
      "Dashboard adaptativo (12 KPIs, 2 áreas: Dental + Farmacia)",
      "Escalable a múltiples especialistas",
      "2-3 automatizaciones: WhatsApp, auto-fill, digest",
      "Web profesional (5 secciones) tipo clinicabiblica.com",
      "Odoo ERP/CRM empresarial con 15 usuarios",
      "WhatsApp integrado sin cobros por mensaje",
      "160h de desarrollo personalizado",
      "Soporte prioritario (<4h)"
    ],
    limitations: [],
    roi: {
      monthly: 3450, // Average of 2700-4300
      annual: 41400,
      net: 1955 // 3450 - 1495
    }
  }

  const roiMetrics = [
    {
      category: "Reducción No-shows",
      current: "2-3 citas/semana perdidas",
      improvement: "40% reducción",
      value: "960-1,440/mes",
      color: "text-green-400"
    },
    {
      category: "Ahorro Secretaría",
      current: "1.5h/día en tareas manuales",
      improvement: "30h/mes × $8/h",
      value: "240/mes",
      color: "text-blue-400"
    },
    {
      category: "Fill-rate Lista Espera",
      current: "Huecos no aprovechados",
      improvement: "20% más citas",
      value: "600-800/mes",
      color: "text-purple-400"
    },
    {
      category: "Inventario Inteligente",
      current: "Control manual Excel",
      improvement: "10% menos desperdicio",
      value: "300/mes",
      color: "text-yellow-400"
    },
    {
      category: "Web Competitiva",
      current: "Wix básico sin integración",
      improvement: "5-10 pacientes nuevos/mes",
      value: "600-1,200/mes",
      color: "text-pink-400"
    }
  ]

  const kpis = [
    { name: "Citas Programadas", current: 120, target: 144, unit: "citas/mes" },
    { name: "No-shows", current: 8, target: 5, unit: "citas/mes" },
    { name: "Tiempo Secretaría", current: 60, target: 30, unit: "horas/mes" },
    { name: "Ingresos Mensuales", current: 12000, target: 15600, unit: "CRC" },
    { name: "Ocupación Agenda", current: 75, target: 90, unit: "%" },
    { name: "Pacientes Nuevos", current: 15, target: 25, unit: "pacientes/mes" },
    { name: "Tiempo Facturación", current: 20, target: 10, unit: "horas/mes" },
    { name: "Control Inventario", current: 15, target: 5, unit: "horas/mes" },
    { name: "Reportes Manuales", current: 8, target: 0, unit: "horas/mes" },
    { name: "Eficiencia General", current: 65, target: 85, unit: "%" },
    { name: "Satisfacción Pacientes", current: 78, target: 92, unit: "%" },
    { name: "ROI Mensual", current: 0, target: 1955, unit: "CRC" }
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
                <h1 className="text-2xl font-bold mora-text">Propuesta de Solución ROI</h1>
                <p className="text-white/80 text-sm">Análisis de Retorno de Inversión</p>
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
              onClick={() => setActiveTab('comparativo')}
              className={`flex-1 min-w-0 py-2 px-2 sm:px-4 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                activeTab === 'comparativo'
                  ? 'bg-purple-600 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <span className="hidden sm:inline">Comparativo Planes</span>
              <span className="sm:hidden">Planes</span>
            </button>
            <button
              onClick={() => setActiveTab('roi')}
              className={`flex-1 min-w-0 py-2 px-2 sm:px-4 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                activeTab === 'roi'
                  ? 'bg-purple-600 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <span className="hidden sm:inline">Análisis ROI</span>
              <span className="sm:hidden">ROI</span>
            </button>
            <button
              onClick={() => setActiveTab('kpis')}
              className={`flex-1 min-w-0 py-2 px-2 sm:px-4 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                activeTab === 'kpis'
                  ? 'bg-purple-600 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <span className="hidden sm:inline">Dashboard KPIs</span>
              <span className="sm:hidden">KPIs</span>
            </button>
            <button
              onClick={() => setActiveTab('justificacion')}
              className={`flex-1 min-w-0 py-2 px-2 sm:px-4 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                activeTab === 'justificacion'
                  ? 'bg-purple-600 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <span className="hidden sm:inline">Justificación</span>
              <span className="sm:hidden">Justif.</span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'comparativo' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Comparativo Cortex vs Neural</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Plan Neural: Dental + Farmacia (escalable a especialistas) vs Plan Cortex: Solo dental
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
              {/* Cortex Plan */}
              <div className="roi-card">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Plan Cortex</h3>
                  <div className="text-3xl font-bold text-blue-400 mb-2">$795/mes</div>
                  <div className="text-white/60">+ $195/mes mantenimiento (después de 3 meses)</div>
                  <div className="mt-2 px-3 py-1 bg-orange-500/20 border border-orange-500/50 rounded-full">
                    <span className="text-orange-400 text-sm font-medium">Compromiso mínimo: 3 meses</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Soluciones Inmediatas:</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <div className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <div>
                          <div className="text-white font-medium text-sm">Dashboard con 5 KPIs</div>
                          <div className="text-white/60 text-xs">→ Resuelve: Visibilidad básica de citas e ingresos</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-white/10 rounded-lg">
                      <div className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <div>
                          <div className="text-white font-medium text-sm">1 Automatización WhatsApp</div>
                          <div className="text-white/60 text-xs">→ Resuelve: Recordatorios manuales (ahorro $240/mes)</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-white/10 rounded-lg">
                      <div className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <div>
                          <div className="text-white font-medium text-sm">Web Simple (3 páginas)</div>
                          <div className="text-white/60 text-xs">→ Resuelve: Presencia online básica</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-white/10 rounded-lg">
                      <div className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <div>
                          <div className="text-white font-medium text-sm">Odoo Gratuito (1 módulo)</div>
                          <div className="text-white/60 text-xs">→ Resuelve: Gestión básica de pacientes</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Limitaciones:</h4>
                  <ul className="space-y-2">
                    {cortexPlan.limitations.map((limitation, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-400 mr-2">✗</span>
                        <span className="text-white/80 text-sm">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-white/20 pt-4">
                  <div className="text-center">
                    <div className="text-sm text-white/60 mb-1">ROI Estimado</div>
                    <div className="text-xl font-bold text-green-400">$405/mes neto</div>
                    <div className="text-sm text-white/60">($1,200 ingresos - $795 costo)</div>
                  </div>
                </div>
              </div>

              {/* Neural Plan */}
              <div className="roi-card border-2 border-purple-500">
                <div className="text-center mb-6">
                  <div className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                    RECOMENDADO
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Plan Neural</h3>
                  <div className="text-3xl font-bold text-purple-400 mb-2">$1,495/mes</div>
                  <div className="text-white/60">+ $395/mes mantenimiento (después de 6 meses)</div>
                  <div className="mt-2 px-3 py-1 bg-purple-500/20 border border-purple-500/50 rounded-full">
                    <span className="text-purple-400 text-sm font-medium">Compromiso mínimo: 6 meses</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Soluciones Completas:</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <div className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <div>
                          <div className="text-white font-medium text-sm">Dashboard 12 KPIs (Dental + Farmacia)</div>
                          <div className="text-white/60 text-xs">→ Resuelve: Visibilidad completa + inventario farmacia</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-white/10 rounded-lg">
                      <div className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <div>
                          <div className="text-white font-medium text-sm">WhatsApp + Auto-fill + Digest</div>
                          <div className="text-white/60 text-xs">→ Resuelve: Recordatorios + lista espera + reportes (ahorro $600/mes)</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-white/10 rounded-lg">
                      <div className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <div>
                          <div className="text-white font-medium text-sm">Web Profesional (5 secciones)</div>
                          <div className="text-white/60 text-xs">→ Resuelve: Presencia profesional + agenda online</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-white/10 rounded-lg">
                      <div className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <div>
                          <div className="text-white font-medium text-sm">Odoo Empresarial (15 usuarios)</div>
                          <div className="text-white/60 text-xs">→ Resuelve: ERP completo + escalabilidad a 11 especialistas</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-white/10 rounded-lg">
                      <div className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <div>
                          <div className="text-white font-medium text-sm">Escalabilidad Completa</div>
                          <div className="text-white/60 text-xs">→ Resuelve: Preparación para crecimiento del centro médico</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Resuelve Pain Points:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span className="text-white/80 text-sm">Elimina duplicidad de agenda</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span className="text-white/80 text-sm">Automatiza recordatorios WhatsApp</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span className="text-white/80 text-sm">Auto-fill lista de espera</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span className="text-white/80 text-sm">Web profesional integrada</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span className="text-white/80 text-sm">ERP completo con WhatsApp sin cobros</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-white/20 pt-4">
                  <div className="text-center">
                    <div className="text-sm text-white/60 mb-1">ROI Estimado</div>
                    <div className="text-xl font-bold text-green-400">$1,955/mes neto</div>
                    <div className="text-sm text-white/60">($3,450 ingresos - $1,495 costo)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Summary */}
            <div className="roi-card">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Resumen Comparativo</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-2">Cortex</div>
                  <div className="text-white/80 mb-2">ROI Limitado</div>
                  <div className="text-sm text-white/60">No resuelve agenda, lista de espera ni proveeduría</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-2">Neural</div>
                  <div className="text-white/80 mb-2">ROI Completo</div>
                  <div className="text-sm text-white/60">Ataca directamente los pain points más caros</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-2">Diferencia</div>
                  <div className="text-white/80 mb-2">$1,550/mes</div>
                  <div className="text-sm text-white/60">ROI adicional con Neural vs Cortex</div>
                </div>
              </div>
            </div>

            {/* Pain Points vs Solutions Mapping */}
            <div className="roi-card bg-gradient-to-r from-red-900/30 to-green-900/30 border border-red-500/30">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-4">Problemas → Soluciones Directas</h3>
                <p className="text-white/80 text-lg">
                  Cada pain point identificado tiene una solución específica con ROI medible
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Pain Points */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-red-400 mb-4">🚨 Problemas Actuales</h4>
                  
                  <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <div className="text-white font-medium text-sm mb-1">Recordatorios Manuales WhatsApp</div>
                    <div className="text-red-300 text-xs">1-2 horas/día secretaria = $240/mes</div>
                  </div>
                  
                  <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <div className="text-white font-medium text-sm mb-1">Duplicidad de Agenda</div>
                    <div className="text-red-300 text-xs">Outlook + Dentalink = conflictos y pérdida de citas</div>
                  </div>
                  
                  <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <div className="text-white font-medium text-sm mb-1">Lista de Espera Manual</div>
                    <div className="text-red-300 text-xs">Huecos no aprovechados = pérdida de ingresos</div>
                  </div>
                  
                  <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <div className="text-white font-medium text-sm mb-1">Control Inventario Excel</div>
                    <div className="text-red-300 text-xs">Desperdicios y falta de alertas predictivas</div>
                  </div>
                  
                  <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <div className="text-white font-medium text-sm mb-1">Sitio Web Básico</div>
                    <div className="text-red-300 text-xs">Wix sin integración = oportunidades perdidas</div>
                  </div>
                </div>

                {/* Solutions */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-green-400 mb-4">✅ Soluciones Neural</h4>
                  
                  <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <div className="text-white font-medium text-sm mb-1">WhatsApp Bot Automático</div>
                    <div className="text-green-300 text-xs">→ Ahorro inmediato: $240/mes</div>
                  </div>
                  
                  <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <div className="text-white font-medium text-sm mb-1">Agenda Centralizada Odoo</div>
                    <div className="text-green-300 text-xs">→ Elimina conflictos + recupera citas perdidas</div>
                  </div>
                  
                  <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <div className="text-white font-medium text-sm mb-1">Auto-fill Lista Espera</div>
                    <div className="text-green-300 text-xs">→ Aprovecha 100% de huecos disponibles</div>
                  </div>
                  
                  <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <div className="text-white font-medium text-sm mb-1">BI Dashboard + Alertas</div>
                    <div className="text-green-300 text-xs">→ Reduce desperdicios + optimiza inventario</div>
                  </div>
                  
                  <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <div className="text-white font-medium text-sm mb-1">Web Profesional Integrada</div>
                    <div className="text-green-300 text-xs">→ Agenda online + WhatsApp directo</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white/10 rounded-lg">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-white mb-2">ROI Inmediato por Solución</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-white/60 mb-1">WhatsApp Bot</div>
                      <div className="text-green-400 font-bold">$240/mes</div>
                    </div>
                    <div>
                      <div className="text-white/60 mb-1">Agenda Centralizada</div>
                      <div className="text-green-400 font-bold">$400/mes</div>
                    </div>
                    <div>
                      <div className="text-white/60 mb-1">Lista Espera Auto</div>
                      <div className="text-green-400 font-bold">$300/mes</div>
                    </div>
                  </div>
                  <div className="mt-3 text-lg font-semibold text-white">
                    Total Ahorro Mensual: <span className="text-green-400">$940/mes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Commitment Terms Section */}
            <div className="roi-card bg-gradient-to-r from-orange-900/30 to-purple-900/30 border border-orange-500/30">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-4">Términos de Compromiso</h3>
                <p className="text-white/80 text-lg">
                  Los compromisos mínimos son importantes para garantizar el ROI y la estabilidad del proyecto
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="text-center p-4 bg-orange-500/10 rounded-lg border border-orange-500/30">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-xl font-bold">3</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Plan Cortex</h4>
                  <p className="text-white/70 text-sm mb-3">Compromiso mínimo: 3 meses</p>
                  <div className="text-xs text-white/60">
                    <p className="mb-1">• Inversión total: $2,970</p>
                    <p className="mb-1">• ROI esperado: $1,215</p>
                    <p className="mb-1">• Tiempo de recuperación: 2.4 meses</p>
                    <p>• Mantenimiento: $195/mes (después de 3 meses)</p>
                  </div>
                </div>

                <div className="text-center p-4 bg-purple-500/10 rounded-lg border border-purple-500/30">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-xl font-bold">6</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Plan Neural</h4>
                  <p className="text-white/70 text-sm mb-3">Compromiso mínimo: 6 meses</p>
                  <div className="text-xs text-white/60">
                    <p className="mb-1">• Inversión total: $11,340</p>
                    <p className="mb-1">• ROI esperado: $11,730</p>
                    <p className="mb-1">• Tiempo de recuperación: 3.3 meses</p>
                    <p>• Mantenimiento: $395/mes (después de 6 meses)</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white/10 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-3">¿Por qué estos compromisos?</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span className="text-white/80">Garantiza tiempo suficiente para implementar y optimizar</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span className="text-white/80">Permite recuperar la inversión inicial en desarrollo</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span className="text-white/80">Asegura estabilidad para el equipo de desarrollo</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span className="text-white/80">Facilita la escalabilidad a especialistas y farmacia</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic Phased Approach */}
            <div className="roi-card bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/50">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-4">Enfoque Estratégico por Fases</h3>
                <p className="text-white/80 text-lg">
                  Optimización inmediata de su negocio dental + preparación para operaciones del centro médico
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-xl font-bold">1</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Fase 1: Su Negocio Dental</h4>
                  <p className="text-white/70 text-sm">
                    Dra. Dunia optimiza SU operación dental: citas, recordatorios, expedientes. ROI inmediato 2-3X en SU negocio.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-xl font-bold">2</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Fase 2: Operaciones del Centro</h4>
                  <p className="text-white/70 text-sm">
                    Extiende a farmacia y recepción del centro médico. Mejora márgenes y eficiencia operativa general.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-xl font-bold">3</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Fase 3: Integración Completa</h4>
                  <p className="text-white/70 text-sm">
                    Sistema unificado para todo el centro médico. Misma infraestructura, múltiples fuentes de ingresos.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white/10 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-3">Beneficios para Su Negocio:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span className="text-white/80 text-sm">ROI inmediato en su operación dental</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span className="text-white/80 text-sm">Control total de agenda y pacientes</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span className="text-white/80 text-sm">WhatsApp bot para sus pacientes</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span className="text-white/80 text-sm">Dashboard de SU rendimiento dental</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span className="text-white/80 text-sm">Base para expandir a farmacia y recepción</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span className="text-white/80 text-sm">Escalabilidad sin costo adicional</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg border border-purple-500/30">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-white mb-2">Inversión Inteligente</h4>
                  <p className="text-white/80 text-sm">
                    Comience optimizando SU negocio dental (ROI inmediato), luego expanda a operaciones del centro médico sin costo adicional de infraestructura.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'roi' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Análisis Detallado de ROI</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Desglose de ingresos recuperados, ahorros y beneficios mensuales
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {roiMetrics.map((metric, index) => (
                <div key={index} className="roi-card">
                  <div className="flex items-center mb-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${metric.color.replace('text-', 'bg-').replace('-400', '-400/20')}`}>
                      <span className={`text-sm font-bold ${metric.color}`}>{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">{metric.category}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-white/60 mb-1">Situación Actual:</p>
                      <p className="text-white/80 text-sm">{metric.current}</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/60 mb-1">Mejora Propuesta:</p>
                      <p className="text-green-400 text-sm">{metric.improvement}</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/60 mb-1">Valor Mensual:</p>
                      <p className={`font-semibold ${metric.color}`}>{metric.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ROI Summary */}
            <div className="roi-card">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Resumen de ROI Mensual</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Ingresos Recuperados/Nuevos</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-white/80">Reducción No-shows:</span>
                      <span className="text-green-400 font-semibold">$960-1,440/mes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">Fill-rate Lista Espera:</span>
                      <span className="text-green-400 font-semibold">$600-800/mes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">Web Competitiva:</span>
                      <span className="text-green-400 font-semibold">$600-1,200/mes</span>
                    </div>
                    <div className="border-t border-white/20 pt-2">
                      <div className="flex justify-between">
                        <span className="text-white font-semibold">Subtotal:</span>
                        <span className="text-green-400 font-bold">$2,160-3,440/mes</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Ahorros Administrativos</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-white/80">Ahorro Secretaría:</span>
                      <span className="text-blue-400 font-semibold">$240/mes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">Inventario Inteligente:</span>
                      <span className="text-yellow-400 font-semibold">$300/mes</span>
                    </div>
                    <div className="border-t border-white/20 pt-2">
                      <div className="flex justify-between">
                        <span className="text-white font-semibold">Subtotal:</span>
                        <span className="text-blue-400 font-bold">$540/mes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/20 pt-6 mt-6">
                <div className="text-center">
                  <div className="text-lg text-white/80 mb-2">ROI Combinado Total</div>
                  <div className="text-3xl font-bold text-green-400 mb-2">$2,700-4,300/mes</div>
                  <div className="text-white/60">vs Inversión Neural $1,495/mes</div>
                  <div className="text-xl font-bold text-purple-400 mt-2">ROI Neto: 2X-3X mensual</div>
                </div>
              </div>
            </div>

            {/* Scaling ROI Section */}
            <div className="roi-card bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-500/30">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-4">ROI Escalado: Potencial Completo</h3>
                <p className="text-white/80 text-lg">
                  Proyección de ROI cuando el Plan Neural se extienda a los 11 especialistas del centro médico
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <div className="text-3xl font-bold text-green-400 mb-2">11x</div>
                  <h4 className="text-lg font-semibold text-white mb-2">Especialistas</h4>
                  <p className="text-white/70 text-sm">Múltiples especialidades médicas</p>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <div className="text-3xl font-bold text-blue-400 mb-2">$37,950</div>
                  <h4 className="text-lg font-semibold text-white mb-2">ROI Mensual</h4>
                  <p className="text-white/70 text-sm">$3,450 × 11 especialistas</p>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <div className="text-3xl font-bold text-purple-400 mb-2">$455,400</div>
                  <h4 className="text-lg font-semibold text-white mb-2">ROI Anual</h4>
                  <p className="text-white/70 text-sm">ROI total del centro médico</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white/10 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-3">Beneficios Adicionales de Escalabilidad:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span className="text-white/80">Agenda centralizada evita conflictos entre especialistas</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span className="text-white/80">WhatsApp bot único para todo el centro</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span className="text-white/80">ERP compartido reduce costos administrativos</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span className="text-white/80">BI dashboard unificado para toma de decisiones</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span className="text-white/80">Farmacia integrada con inventario inteligente</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span className="text-white/80">Costo fijo, ingresos escalables</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg border border-green-500/30">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-white mb-2">Inversión vs Retorno</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-white/60 mb-1">Inversión Total (6 meses)</div>
                      <div className="text-2xl font-bold text-orange-400">$11,340</div>
                    </div>
                    <div>
                      <div className="text-sm text-white/60 mb-1">ROI Total (6 meses)</div>
                      <div className="text-2xl font-bold text-green-400">$227,700</div>
                    </div>
                  </div>
                  <div className="mt-3 text-lg font-semibold text-white">
                    Retorno de Inversión: <span className="text-green-400">2,007%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'kpis' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Dashboard de KPIs</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                12 KPIs clave para monitorear el rendimiento del centro médico
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {kpis.map((kpi, index) => {
                const progress = (kpi.current / kpi.target) * 100
                const isPercentage = kpi.unit.includes('%')
                
                return (
                  <div key={index} className="roi-card">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">{kpi.name}</h3>
                      <span className="text-sm text-white/60">{kpi.unit}</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-white/80">Actual:</span>
                        <span className="text-white font-semibold">
                          {isPercentage ? `${kpi.current}%` : kpi.current.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">Meta:</span>
                        <span className="text-green-400 font-semibold">
                          {isPercentage ? `${kpi.target}%` : kpi.target.toLocaleString()}
                        </span>
                      </div>
                      
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${
                            progress >= 100 ? 'bg-green-400' : 
                            progress >= 75 ? 'bg-yellow-400' : 'bg-red-400'
                          }`}
                          style={{ width: `${Math.min(progress, 100)}%` }}
                        ></div>
                      </div>
                      
                      <div className="text-center">
                        <span className={`text-sm font-semibold ${
                          progress >= 100 ? 'text-green-400' : 
                          progress >= 75 ? 'text-yellow-400' : 'text-red-400'
                        }`}>
                          {progress.toFixed(1)}% de la meta
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {activeTab === 'justificacion' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Justificación de Inversión</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Por qué Neural es la solución óptima para Mora Real S.A.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="roi-card">
                <h3 className="text-xl font-bold text-white mb-6">Problemas Críticos Resueltos</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-xs">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Duplicidad de Agendas</h4>
                      <p className="text-white/70 text-sm">Outlook + Dentalink genera errores y pérdida de tiempo</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-xs">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Recordatorios Manuales</h4>
                      <p className="text-white/70 text-sm">1-2 horas/día de secretaria = $240/mes en costos</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-xs">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Lista de Espera Manual</h4>
                      <p className="text-white/70 text-sm">Huecos no aprovechados = $600-800/mes perdidos</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="roi-card">
                <h3 className="text-xl font-bold text-white mb-6">Soluciones Neural</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">ERP Odoo Centralizado</h4>
                      <p className="text-white/70 text-sm">Agenda única + expedientes digitales integrados</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">WhatsApp Bot Automático</h4>
                      <p className="text-white/70 text-sm">Sin cobros por mensaje, confirmación automática</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Auto-fill Lista Espera</h4>
                      <p className="text-white/70 text-sm">Maximización automática de ocupación</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="roi-card">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Valor Agregado vs Competencia</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-2">Web Profesional</div>
                  <div className="text-white/80 mb-2">Estilo clinicabiblica.com</div>
                  <div className="text-sm text-white/60">Sin sobrecostos del proveedor anterior</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-2">WhatsApp Incluido</div>
                  <div className="text-white/80 mb-2">Sin cobros por mensaje</div>
                  <div className="text-sm text-white/60">A diferencia de Huli Practice</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-2">ERP Completo</div>
                  <div className="text-white/80 mb-2">15 usuarios + módulos clínica</div>
                  <div className="text-sm text-white/60">Integración total del negocio</div>
                </div>
              </div>
            </div>

            <div className="roi-card">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Justificación de Mantenimiento</h3>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-4">$395/mes Neural</div>
                <div className="text-white/80 mb-6">Incluye: hosting, BI dashboards, Odoo ERP/CRM, WhatsApp API, sitio web</div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Beneficios Continuos:</h4>
                    <ul className="space-y-2 text-left">
                      <li className="flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        <span className="text-white/80 text-sm">ROI de $1,955/mes neto</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        <span className="text-white/80 text-sm">Reducción 40% no-shows</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        <span className="text-white/80 text-sm">Ahorro 1.5h/día secretaria</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        <span className="text-white/80 text-sm">Web competitiva integrada</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Costo vs Beneficio:</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-white/80">Mantenimiento:</span>
                        <span className="text-red-400">$395/mes</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">ROI Neto:</span>
                        <span className="text-green-400">$1,955/mes</span>
                      </div>
                      <div className="border-t border-white/20 pt-2">
                        <div className="flex justify-between">
                          <span className="text-white font-semibold">Beneficio Neto:</span>
                          <span className="text-green-400 font-bold">$1,560/mes</span>
                        </div>
                      </div>
                    </div>
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
