'use client'

import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

interface MermaidChartProps {
  chart: string
  className?: string
}

export default function MermaidChart({ chart, className = '' }: MermaidChartProps) {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chartRef.current && chart) {
      // Clear previous content
      chartRef.current.innerHTML = ''
      
      // Initialize mermaid with proper config
      mermaid.initialize({
        startOnLoad: false,
        theme: 'dark',
        themeVariables: {
          primaryColor: '#8B5CF6',
          primaryTextColor: '#FFFFFF',
          primaryBorderColor: '#A78BFA',
          lineColor: '#FFFFFF',
          sectionBkgColor: '#1F2937',
          altSectionBkgColor: '#374151',
          gridColor: '#4B5563',
          secondaryColor: '#7C3AED',
          tertiaryColor: '#A78BFA',
          background: '#000000',
          mainBkg: '#1F2937',
          secondBkg: '#374151',
          tertiaryBkg: '#4B5563'
        }
      })
      
      // Render the chart
      const chartId = 'mermaid-chart-' + Date.now()
      mermaid.render(chartId, chart).then(({ svg }) => {
        if (chartRef.current) {
          chartRef.current.innerHTML = svg
        }
      }).catch((error) => {
        console.error('Mermaid rendering error:', error)
        if (chartRef.current) {
          chartRef.current.innerHTML = `<div class="text-red-400 p-4 text-center">Error rendering chart: ${error.message}</div>`
        }
      })
    }
  }, [chart])

  return (
    <div 
      ref={chartRef} 
      className={`mermaid ${className}`}
      style={{ 
        backgroundColor: 'transparent',
        borderRadius: '8px',
        padding: '0.5rem',
        overflow: 'auto',
        fontSize: '12px'
      }}
    />
  )
}
