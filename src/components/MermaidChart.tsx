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
    mermaid.initialize({
      startOnLoad: true,
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

    if (chartRef.current && chart) {
      chartRef.current.innerHTML = chart
      mermaid.contentLoaded()
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
