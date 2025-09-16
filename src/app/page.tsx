'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  ChartBarIcon, 
  CogIcon, 
  DocumentChartBarIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

export default function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isCheckingAuth, setIsCheckingAuth] = useState(true)

  // Check for existing authentication on component mount
  useEffect(() => {
    const savedAuth = localStorage.getItem('mora-real-auth')
    if (savedAuth === 'true') {
      setIsAuthenticated(true)
    }
    setIsCheckingAuth(false)
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      })

      if (response.ok) {
        setIsAuthenticated(true)
        localStorage.setItem('mora-real-auth', 'true')
      } else {
        alert('Contraseña incorrecta')
      }
    } catch (error) {
      alert('Error de conexión')
    } finally {
      setIsLoading(false)
    }
  }

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-purple-600">
        <div className="glass-effect rounded-2xl p-8 w-full max-w-md mx-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
            <p className="text-white/80">Verificando autenticación...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-purple-600">
        <div className="glass-effect rounded-2xl p-8 w-full max-w-md mx-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mora-text mb-2">Mora Real S.A.</h1>
            <p className="text-white/80">Reporte de Inteligencia de Negocio</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                Contraseña de Acceso
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Ingrese la contraseña"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Verificando...' : 'Acceder al Reporte'}
            </button>
          </form>
          
          <div className="mt-6 text-center text-sm text-white/60">
            <p>Desarrollado por <span className="text-purple-400">aii.cr</span></p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-purple-600">
      {/* Header */}
      <header className="glass-effect border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mora-text">Mora Real S.A.</h1>
              <p className="text-white/80 text-sm">Reporte de Inteligencia de Negocio</p>
            </div>
            <button
              onClick={() => {
                setIsAuthenticated(false)
                localStorage.removeItem('mora-real-auth')
              }}
              className="text-white/60 hover:text-white transition-colors"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Análisis de <span className="mora-text">ROI</span> y Oportunidades
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Evaluación integral del flujo de trabajo actual y propuesta de soluciones 
            de automatización e inteligencia artificial para optimizar operaciones
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="roi-card">
            <div className="flex items-center mb-4">
              <BuildingOfficeIcon className="h-8 w-8 text-purple-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Centro Médico</h3>
            </div>
            <p className="text-white/70">
              Análisis del flujo de trabajo actual del centro médico, farmacia y consultorios subarrendados
            </p>
          </div>

          <div className="roi-card">
            <div className="flex items-center mb-4">
              <ChartBarIcon className="h-8 w-8 text-purple-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Identificación de Cuellos de Botella</h3>
            </div>
            <p className="text-white/70">
              Detección de áreas problemáticas y oportunidades de mejora en los procesos operativos
            </p>
          </div>

          <div className="roi-card">
            <div className="flex items-center mb-4">
              <CogIcon className="h-8 w-8 text-purple-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Soluciones de Automatización</h3>
            </div>
            <p className="text-white/70">
              Propuesta de implementación de IA y automatización para optimizar eficiencia
            </p>
          </div>

          <Link href="/sitio-web" className="roi-card group cursor-pointer">
            <div className="flex items-center mb-4">
              <GlobeAltIcon className="h-8 w-8 text-purple-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Sitio Web Profesional</h3>
            </div>
            <p className="text-white/70">
              Propuesta de web integrada estilo clinicabiblica.com con BI y automatización
            </p>
            <div className="text-purple-400 font-medium group-hover:text-purple-300 transition-colors mt-2">
              Ver Propuesta →
            </div>
          </Link>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/analisis-flujo" className="roi-card group cursor-pointer">
            <div className="flex items-center mb-4">
              <DocumentChartBarIcon className="h-10 w-10 text-purple-400 mr-4" />
              <h3 className="text-2xl font-semibold text-white">Análisis de Flujo de Trabajo</h3>
            </div>
            <p className="text-white/70 mb-4">
              Visualización detallada del flujo operativo actual, identificando cuellos de botella 
              y áreas de mejora en el centro médico y farmacia.
            </p>
            <div className="text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
              Ver Análisis →
            </div>
          </Link>

          <Link href="/propuesta-roi" className="roi-card group cursor-pointer">
            <div className="flex items-center mb-4">
              <CurrencyDollarIcon className="h-10 w-10 text-purple-400 mr-4" />
              <h3 className="text-2xl font-semibold text-white">Propuesta de Solución ROI</h3>
            </div>
            <p className="text-white/70 mb-4">
              Plan de implementación con análisis de retorno de inversión, incluyendo 
              recomendaciones de planes de aii.cr/es/pricing.
            </p>
            <div className="text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
              Ver Propuesta →
            </div>
          </Link>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-white/60">
          <p>© 2024 aii.cr - Artificial Intelligence Integration</p>
          <p className="text-sm mt-2">Desarrollado para Mora Real S.A.</p>
        </footer>
      </main>
    </div>
  )
}
