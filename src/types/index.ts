// Tipos principales para el proyecto Mora Real S.A.

export interface WorkflowNode {
  id: string
  name: string
  type: 'process' | 'decision' | 'start' | 'end'
  description: string
  bottlenecks?: string[]
  automationOpportunities?: string[]
}

export interface WorkflowConnection {
  from: string
  to: string
  label?: string
  type: 'normal' | 'bottleneck' | 'optimized'
}

export interface WorkflowAnalysis {
  nodes: WorkflowNode[]
  connections: WorkflowConnection[]
  bottlenecks: string[]
  automationOpportunities: string[]
  currentEfficiency: number
  potentialEfficiency: number
}

export interface ROIMetric {
  id: string
  name: string
  currentValue: number
  projectedValue: number
  improvement: number
  timeframe: string
  cost: number
  benefit: number
}

export interface PricingPlan {
  id: string
  name: string
  description: string
  price: number
  currency: 'CRC'
  features: string[]
  recommended: boolean
  roi: ROIMetric[]
}

export interface SolutionProposal {
  title: string
  description: string
  phases: SolutionPhase[]
  totalCost: number
  totalBenefit: number
  roi: number
  timeframe: string
  recommendedPlan: PricingPlan
}

export interface SolutionPhase {
  id: string
  name: string
  description: string
  duration: string
  cost: number
  deliverables: string[]
  dependencies?: string[]
}

export interface DepartmentData {
  id: string
  name: string
  type: 'medical' | 'pharmacy' | 'dental' | 'specialist'
  currentProcesses: string[]
  painPoints: string[]
  automationPotential: number
  priority: 'high' | 'medium' | 'low'
}

export interface ChartData {
  labels: string[]
  datasets: {
    label: string
    data: number[]
    backgroundColor?: string | string[]
    borderColor?: string | string[]
    borderWidth?: number
  }[]
}

export interface AuthState {
  isAuthenticated: boolean
  isLoading: boolean
  error?: string
}
