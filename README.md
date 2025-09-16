# Mora Real S.A. - Reporte de Inteligencia de Negocio

Un análisis integral de ROI y oportunidades de automatización para Mora Real S.A., un centro médico con farmacia y consultorios subarrendados.

## 🏥 Sobre el Proyecto

Este proyecto proporciona una evaluación completa del flujo de trabajo actual de Mora Real S.A., identificando cuellos de botella y proponiendo soluciones de automatización e inteligencia artificial para optimizar las operaciones del centro médico.

## ✨ Características

- **Análisis de Flujo de Trabajo**: Visualización detallada de procesos actuales
- **Identificación de Cuellos de Botella**: Detección de áreas problemáticas
- **Propuesta de Solución ROI**: Plan de implementación con análisis de retorno
- **Diseño Mobile-First**: Optimizado para dispositivos móviles
- **Tema Duotone**: Diseño moderno con colores púrpura y blanco
- **Idioma Español**: Contenido completamente en español
- **Efectos Glass**: Interfaz moderna con efectos de cristal y hover

## 🚀 Tecnologías

- **Framework**: Next.js 14 con App Router
- **Deployment**: Vercel
- **Estilos**: Tailwind CSS con tema personalizado
- **Visualizaciones**: Chart.js, Recharts
- **Autenticación**: Sistema personalizado con contraseña
- **Idioma**: Español (es)
- **Tipografía**: Inter, Roboto, Playfair Display

## 📁 Estructura del Proyecto

```
mora-real/
├── src/
│   ├── app/                 # App Router de Next.js
│   │   ├── layout.tsx       # Layout principal
│   │   ├── page.tsx         # Página principal
│   │   └── globals.css      # Estilos globales
│   ├── components/          # Componentes reutilizables
│   │   └── ui/              # Componentes de UI base
│   ├── lib/                 # Utilidades y helpers
│   ├── types/               # Definiciones de TypeScript
│   └── styles/              # Estilos globales
├── pages/
│   └── api/                 # API routes
│       └── auth.ts          # Endpoint de autenticación
├── docs/                    # Documentación del proyecto
│   ├── proyecto-fases.md    # Fases del proyecto
│   └── changelog.md         # Historial de cambios
├── public/                  # Archivos estáticos
│   └── images/              # Imágenes del proyecto
└── configuración de archivos
```

## 🛠️ Instalación y Configuración

1. **Clonar el repositorio**:
   ```bash
   git clone <repository-url>
   cd mora-real
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**:
   ```bash
   cp .env.example .env.local
   # Editar .env.local con las configuraciones necesarias
   ```

4. **Ejecutar en modo desarrollo**:
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador**:
   ```
   http://localhost:3000
   ```

## 🔐 Autenticación

El proyecto utiliza un sistema de autenticación simple con contraseña:
- Contraseña por defecto: `mora-real-2024`
- Configurable en la variable de entorno `APP_PASSWORD`

## 📊 Funcionalidades Principales

### 1. Análisis de Flujo de Trabajo
- Visualización de procesos actuales
- Identificación de cuellos de botella
- Mapeo de departamentos (médico, farmacia, dental, especialistas)

### 2. Propuesta de Solución ROI
- Análisis de costos vs beneficios
- Plan de implementación por fases
- Recomendación de planes de aii.cr/es/pricing

### 3. Visualizaciones Interactivas
- Gráficos de eficiencia
- Diagramas de flujo
- Métricas de ROI
- Análisis comparativo

## 🎨 Diseño y Tema

- **Paleta de Colores**: Basada en el logo de Mora Real (púrpura/blanco)
- **Gradientes**: Duotone modernos
- **Efectos**: Glass, hover, y transiciones suaves
- **Responsive**: Mobile-first design
- **Tipografía**: Inter (principal), Roboto (médica), Playfair Display (elegante)

## 📱 Optimización Móvil

- Diseño mobile-first
- Componentes responsive
- Navegación táctil optimizada
- Carga rápida en dispositivos móviles

## 🔄 Desarrollo

### Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Construcción para producción
npm run start    # Servidor de producción
npm run lint     # Linting de código
npm run format   # Formateo de código
```

### Estructura de Datos

El proyecto está preparado para integrar datasets que incluirán:
- Datos de flujo de trabajo actual
- Métricas de eficiencia
- Información de departamentos
- Análisis de cuellos de botella
- Propuestas de automatización

## 📈 Próximas Fases

1. **Integración de Datos**: Incorporación de datasets proporcionados
2. **Visualizaciones Avanzadas**: Gráficos interactivos y diagramas
3. **Análisis Detallado**: Métricas específicas por departamento
4. **Propuesta Final**: Plan de implementación completo
5. **Presentación**: Documentación ejecutiva final

## 🤝 Contribución

Este proyecto es desarrollado por **aii.cr** (Artificial Intelligence Integration) para Mora Real S.A.

## 📄 Licencia

Proyecto privado desarrollado para Mora Real S.A.

---

**Desarrollado por**: aii.cr - Artificial Intelligence Integration  
**Cliente**: Mora Real S.A.  
**Fecha**: Diciembre 2024
