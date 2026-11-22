import {
  ProfileData,
  ExperienceItem,
  ProjectItem,
  SkillCategory,
  EducationItem,
} from "@/types/portfolio";

export const profileData: ProfileData = {
  fullName: "Daniel Alejandro Mendoza",
  role: "Desarrollador de Software & Especialista en IA / Machine Learning",
  tagline:
    "Transformando datos y algoritmos en soluciones web inteligentes con rigor técnico y sensibilidad estética.",
  avatarUrl: "",
  location: "San Salvador, El Salvador",
  socials: {
    github: "https://github.com/usuario-simulado",
    linkedin: "https://linkedin.com/in/usuario-simulado",
    email: "contacto.simulado@ejemplo.com",
  },
  about: {
    whoAmI:
      "Soy estudiante y desarrollador enfocado en la intersección entre la inteligencia artificial aplicada y la ingeniería web moderna. Me apasiona construir sistemas donde cada modelo matemático tiene una interfaz clara, rápida y comprensible.",
    studies:
      "Programa Intensivo de Inteligencia Artificial, Machine Learning y Desarrollo de Aplicaciones Web (10 Semanas) e Ingeniería en Sistemas.",
    interests: [
      "Aprendizaje Supervisado y No Supervisado",
      "Optimización de Algoritmos de Búsqueda",
      "Arquitectura Full-Stack con Next.js y TypeScript",
      "Visualización de Datos Geoespaciales",
    ],
    goals:
      "Consolidar mi perfil como ingeniero de software capaz de llevar modelos de ciencia de datos desde notebooks experimentales hasta aplicaciones web en producción escalables.",
    strengths: [
      "Pensamiento analítico y resolución estructurada de problemas",
      "Código limpio, modular y tipado estricto",
      "Capacidad de comunicar hallazgos técnicos de forma visual",
      "Aprendizaje autónomo e integración ágil de nuevas herramientas",
    ],
  },
};

export const experiencesData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Desarrollador de Modelos Predictivos y Analítica",
    organization: "Programa IA & Desarrollo Web – Cohorte 2026",
    period: "Septiembre 2026 – Noviembre 2026",
    type: "Académica",
    description:
      "Implementación de flujos completos de ciencia de datos, algoritmos de búsqueda, clustering y despliegue de aplicaciones web Full-Stack.",
    achievements: [
      "Entrenamiento y evaluación de modelos de Regresión Lineal, K-Means y KNN sobre conjuntos de datos reales.",
      "Diseño e implementación de una API REST validada en Next.js conectada a interfaz reactiva.",
    ],
  },
  {
    id: "exp-2",
    role: "Colaborador en Reto AI Challenge (Clustering y Clasificación)",
    organization: "Laboratorio Práctico de Machine Learning",
    period: "Octubre 2026",
    type: "Proyecto Colaborativo",
    description:
      "Segmentación de perfiles y clasificación supervisada mediante métricas de distancia euclidiana y selección óptima de hiperparámetros K.",
    achievements: [
      "Reducción de inercia intra-clúster mediante método del codo y validación cruzada.",
      "Documentación reproducida en repositorio Git con visualizaciones comparativas.",
    ],
  },
  {
    id: "exp-3",
    role: "Analista de Inteligencia Geoespacial (Hotspots Comerciales)",
    organization: "Proyecto Integrador de Ciencia de Datos",
    period: "Noviembre 2026",
    type: "Proyecto Colaborativo",
    description:
      "Identificación de zonas de alta densidad comercial para optimizar decisiones estratégicas de ubicación.",
    achievements: [
      "Limpieza de coordenadas, normalización espacial y detección de núcleos de concentración.",
      "Generación de mapas de densidad interpretables para toma de decisiones.",
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "proj-regresion",
    slug: "regresion-lineal-semana-3",
    title: "Actividad 1 · Regresión Lineal Predictiva",
    category: "Machine Learning",
    shortDescription:
      "Modelo supervisado de regresión lineal para estimación de tendencias numéricas, cálculo de error cuadrático medio (MSE) y visualización de ajuste.",
    accentColor: "cyan",
    evidence: {
      week: "Semana 3",
      objective:
        "Comprender e implementar matemáticamente y con Python el ajuste de una recta de regresión lineal para predecir valores continuos y evaluar su precisión.",
      problem:
        "Se disponía de un conjunto de observaciones históricas con dispersión lineal donde era necesario estimar valores futuros minimizando el error residual.",
      solutionExplanation:
        "Se realizó el preprocesamiento de variables independientes y dependientes, división en conjuntos de entrenamiento y prueba (80/20), ajuste por mínimos cuadrados ordinarios y evaluación mediante R² y MSE.",
      results: [
        "Coeficiente de determinación R² de 0.942 en el conjunto de validación.",
        "Error Cuadrático Medio (MSE) reducido a 12.48 unidades.",
        "Visualización clara de la recta de tendencia frente a los datos reales.",
      ],
      technologies: ["Python", "NumPy", "Pandas", "Scikit-Learn", "Matplotlib"],
      fileName: "regresion_lineal.py",
      repoUrl: "https://github.com/usuario-simulado/actividad-1-regresion-lineal",
      codeLanguage: "python",
      codeSnippet: `import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

X = np.array([[10], [20], [30], [40], [50], [60], [70], [80], [90], [100]])
y = np.array([18, 35, 49, 66, 81, 95, 112, 128, 141, 159])

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

modelo = LinearRegression()
modelo.fit(X_train, y_train)
predicciones = modelo.predict(X_test)

print(f"Pendiente (w): {modelo.coef_[0]:.4f}")
print(f"Intercepto (b): {modelo.intercept_:.4f}")
print(f"MSE: {mean_squared_error(y_test, predicciones):.4f}")
print(f"R2 Score: {r2_score(y_test, predicciones):.4f}")`,
      images: [
        {
          src: "/evidencias/regresion/grafica-regresion.svg",
          caption: "Ajuste lineal por mínimos cuadrados y banda de dispersión residual.",
        },
      ],
    },
  },
  {
    id: "proj-laberinto",
    slug: "laberinto-arboles-decision-semana-4",
    title: "Actividad 2 · Navegación en Laberinto (Árboles de Decisión)",
    category: "Algoritmos e IA",
    shortDescription:
      "Resolución algorítmica de laberintos mediante exploración estructurada en árbol de decisiones, control de estados visitados y reconstrucción de ruta óptima.",
    accentColor: "emerald",
    evidence: {
      week: "Semana 4",
      objective:
        "Modelar un entorno discreto en forma de matriz como un árbol de decisiones para encontrar una trayectoria válida desde el nodo inicial hasta la meta.",
      problem:
        "Dado un laberinto bidimensional con muros, bifurcaciones y callejones sin salida, el agente debía evitar ciclos infinitos y hallar la ruta de salida.",
      solutionExplanation:
        "Cada celda transitada se representó como un nodo con hasta 4 ramificaciones (Arriba, Abajo, Izquierda, Derecha). Se implementó una estructura de árbol de decisión con registro de nodos visitados y retroceso (backtracking) para podar ramas bloqueadas.",
      results: [
        "Resolución exitosa del laberinto de 10x10 sin caer en bucles.",
        "Reducción del 45 % de nodos explorados gracias a la poda de estados visitados.",
        "Trazado paso a paso de la ruta solución desde el origen hasta el objetivo.",
      ],
      technologies: ["Python", "Estructuras de Datos", "Árboles de Decisión", "Algoritmos de Búsqueda"],
      fileName: "laberinto_arbol.py",
      repoUrl: "https://github.com/usuario-simulado/actividad-2-laberinto-arbol",
      codeLanguage: "python",
      codeSnippet: `from collections import deque

def resolver_laberinto(laberinto, inicio, meta):
    filas, columnas = len(laberinto), len(laberinto[0])
    cola = deque([(inicio, [inicio])])
    visitados = {inicio}
    movimientos = [(-1, 0), (1, 0), (0, -1), (0, 1)]

    while cola:
        (f, c), camino = cola.popleft()
        if (f, c) == meta:
            return camino

        for df, dc in movimientos:
            nf, nc = f + df, c + dc
            if (
                0 <= nf < filas
                and 0 <= nc < columnas
                and laberinto[nf][nc] == 0
                and (nf, nc) not in visitados
            ):
                visitados.add((nf, nc))
                cola.append(((nf, nc), camino + [(nf, nc)]))

    return []`,
      images: [
        {
          src: "/evidencias/laberinto/solucion-laberinto.svg",
          caption: "Recorrido óptimo reconstruido desde el nodo origen hasta la salida.",
        },
      ],
    },
  },
  {
    id: "proj-ai-challenge",
    slug: "ai-challenge-kmeans-knn",
    title: "Actividad 3 · AI Challenge: K-Means y KNN",
    category: "Machine Learning",
    shortDescription:
      "Combinación de aprendizaje no supervisado (K-Means) para descubrir segmentos latentes y aprendizaje supervisado (KNN) para clasificar nuevos registros.",
    accentColor: "rose",
    evidence: {
      week: "Semana 6–7",
      objective:
        "Aplicar algoritmos basados en distancias para agrupar datos sin etiquetar mediante K-Means y predecir categorías de nuevos puntos mediante K-Nearest Neighbors.",
      problem:
        "Se requería segmentar un dataset multidimensional sin etiquetas previas para descubrir patrones naturales y posteriormente clasificar nuevas muestras entrantes con alta precisión.",
      solutionExplanation:
        "Primero se estandarizaron las características con StandardScaler. Se ejecutó K-Means evaluando el método del codo (K=3) para asignar etiquetas de clúster y luego se entrenó un clasificador KNN (K=5) con distancia euclidiana.",
      results: [
        "Identificación de 3 clústeres bien diferenciados con baja inercia intra-grupo.",
        "Exactitud (Accuracy) del 93.5 % en clasificación con KNN (K=5).",
        "Visualización bidimensional de centroides y fronteras de vecindad.",
      ],
      technologies: ["Python", "Scikit-Learn", "K-Means", "KNN", "Pandas", "Matplotlib"],
      fileName: "ai_challenge_kmeans_knn.py",
      repoUrl: "https://github.com/usuario-simulado/actividad-3-ai-challenge",
      codeLanguage: "python",
      codeSnippet: `from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import numpy as np

datos = np.random.rand(150, 2) * 100
scaler = StandardScaler()
datos_norm = scaler.fit_transform(datos)

kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
etiquetas_cluster = kmeans.fit_predict(datos_norm)

X_train, X_test, y_train, y_test = train_test_split(
    datos_norm, etiquetas_cluster, test_size=0.25, random_state=42
)

knn = KNeighborsClassifier(n_neighbors=5, metric="euclidean")
knn.fit(X_train, y_train)
exactitud = accuracy_score(y_test, knn.predict(X_test))
print(f"Exactitud KNN: {exactitud * 100:.2f}%")`,
      images: [
        {
          src: "/evidencias/ai-challenge/clusters-knn.svg",
          caption: "Distribución de los 3 centroides K-Means y vecindarios de clasificación KNN.",
        },
      ],
    },
  },
  {
    id: "proj-hotspots",
    slug: "hotspots-comerciales",
    title: "Actividad 4 · Detección de Hotspots Comerciales",
    category: "Ciencia de Datos",
    shortDescription:
      "Análisis espacial y agrupamiento por densidad para detectar zonas de alta actividad comercial y oportunidades de expansión.",
    accentColor: "amber",
    evidence: {
      week: "Semana 8",
      objective:
        "Identificar polos de concentración comercial a partir de registros geolocalizados para apoyar decisiones de apertura o inversión.",
      problem:
        "La dispersión de puntos de venta y flujo de clientes dificultaba distinguir visualmente qué sectores concentraban mayor actividad comercial real.",
      solutionExplanation:
        "Se depuraron registros geográficos (latitud, longitud e intensidad de transacciones), aplicando agrupamiento espacial y estimación de densidad para aislar los principales hotspots urbanos.",
      results: [
        "Detección de 3 zonas núcleo que concentran el 68 % de la actividad comercial analizada.",
        "Eliminación de ruido geográfico y registros atípicos fuera del área metropolitana.",
        "Generación de mapa de intensidad para presentación ejecutiva.",
      ],
      technologies: ["Python", "Pandas", "Geo-Analítica", "Clustering Espacial", "Visualización"],
      fileName: "hotspots_comerciales.py",
      repoUrl: "https://github.com/usuario-simulado/actividad-4-hotspots-comerciales",
      codeLanguage: "python",
      codeSnippet: `import pandas as pd
from sklearn.cluster import DBSCAN
import numpy as np

df = pd.DataFrame({
    "latitud": [13.6929, 13.6941, 13.7012, 13.7025, 13.6780, 13.6792],
    "longitud": [-89.2182, -89.2175, -89.2240, -89.2231, -89.2390, -89.2385],
    "volumen": [120, 145, 210, 195, 88, 92]
})

coordenadas = np.radians(df[["latitud", "longitud"]])
modelo_espacial = DBSCAN(eps=0.001, min_samples=2, metric="haversine")
df["hotspot_id"] = modelo_espacial.fit_predict(coordenadas)

resumen = df.groupby("hotspot_id")["volumen"].sum()
print(resumen)`,
      images: [
        {
          src: "/evidencias/hotspots/mapa-hotspots.svg",
          caption: "Núcleos de densidad comercial detectados mediante agrupamiento espacial.",
        },
      ],
    },
  },
  {
    id: "proj-fullstack",
    slug: "arquitectura-fullstack-nextjs",
    title: "Actividad 5 · Desarrollo Full-Stack y API REST (Este Portafolio)",
    category: "Full-Stack Web",
    shortDescription:
      "Arquitectura completa de aplicación web con Next.js App Router, React, TypeScript, Tailwind CSS y endpoint REST POST /api/contact validado.",
    accentColor: "indigo",
    evidence: {
      week: "Semana 9–10",
      objective:
        "Diseñar, desarrollar y desplegar en Vercel una aplicación web Full-Stack original que integre frontend reactivo, tipado estricto y una API REST funcional.",
      problem:
        "Se necesitaba construir una plataforma propia y escalable que unificara todas las evidencias del período junto con un canal de contacto validado en servidor.",
      solutionExplanation:
        "Se estructuró el proyecto bajo Next.js App Router separando datos tipados (src/data), componentes modulares (src/components) y rutas de servidor (src/app/api/contact/route.ts) con validación de payload y variables de entorno protegidas.",
      results: [
        "Interfaz responsive con estética litográfica y acuarela oscura optimizada.",
        "Endpoint REST POST /api/contact con validación de campos y respuestas JSON estructuradas.",
        "Despliegue continuo en Vercel conectado al repositorio independiente en GitHub.",
      ],
      technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "API REST", "Vercel"],
      fileName: "src/app/api/contact/route.ts",
      repoUrl: "https://github.com/usuario-simulado/mi-portafolio-digital",
      codeLanguage: "typescript",
      codeSnippet: `import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const nombre = String(body.name ?? "").trim();
  const correo = String(body.email ?? "").trim();
  const mensaje = String(body.message ?? "").trim();

  if (nombre.length < 2 || !correo.includes("@") || mensaje.length < 10) {
    return NextResponse.json(
      { ok: false, error: "Datos incompletos o formato inválido." },
      { status: 400 }
    );
  }

  return NextResponse.json(
    { ok: true, message: "Mensaje recibido correctamente por la API." },
    { status: 200 }
  );
}`,
      images: [
        {
          src: "/evidencias/arquitectura/diagrama-fullstack.svg",
          caption: "Flujo entre componentes React, endpoint POST /api/contact y despliegue en Vercel.",
        },
      ],
      architectureDetails: {
        projectStructure: [
          "src/app/page.tsx – Página principal integrando las 7 secciones obligatorias",
          "src/app/api/contact/route.ts – Controlador backend REST para mensajería",
          "src/components/ – Componentes modulares de UI, visor de evidencias y formulario",
          "src/data/portfolioData.ts – Capa de datos tipados y evidencias de las 10 semanas",
          "src/types/portfolio.ts – Contratos e interfaces TypeScript",
          "public/evidencias/ – Recursos gráficos y láminas técnicas de proyectos",
        ],
        frontendComponents: [
          "Navbar.tsx – Navegación fluida responsive con indicador de sección",
          "HeroSection.tsx – Presentación principal con identidad litográfica y enlaces",
          "AboutExperienceSection.tsx – Perfil personal, intereses, fortalezas y trayectoria",
          "ProjectsShowcase.tsx – Galería interactiva con modal/drawer de código y evidencias",
          "SkillsEducationSection.tsx – Matriz categorizada de habilidades y formación académica",
          "ContactSection.tsx – Formulario controlado conectado a POST /api/contact",
        ],
        backendEndpoints: [
          "POST /api/contact – Recibe JSON { name, email, message }, valida reglas de negocio y retorna estado HTTP 200 o 400.",
        ],
        validations: [
          "Validación en tiempo real en cliente (longitud mínima, formato de correo electrónico y campos requeridos).",
          "Doble validación estricta en el servidor (route.ts) para prevenir peticiones malformadas.",
          "Protección de variables de entorno sensibles mediante .env.local excluido en .gitignore.",
        ],
      },
    },
  },
];

export const skillsData: SkillCategory[] = [
  {
    category: "Lenguajes de programación",
    skills: ["Python", "TypeScript", "JavaScript (ES6+)", "SQL", "HTML5 / CSS3"],
  },
  {
    category: "Desarrollo web",
    skills: ["React", "Next.js (App Router)", "Tailwind CSS", "API REST", "Diseño Responsive"],
  },
  {
    category: "Bases de datos",
    skills: ["PostgreSQL", "MySQL", "SQLite", "Modelado Relacional"],
  },
  {
    category: "Herramientas tecnológicas",
    skills: ["Git & GitHub", "Docker / WSL2", "Vercel", "VS Code", "Jupyter Notebooks"],
  },
  {
    category: "Inteligencia artificial y Machine Learning",
    skills: [
      "Regresión Lineal",
      "Árboles de Decisión",
      "K-Means Clustering",
      "K-Nearest Neighbors (KNN)",
      "Scikit-Learn, NumPy & Pandas",
    ],
  },
  {
    category: "Habilidades personales",
    skills: [
      "Pensamiento Analítico",
      "Resolución de Problemas",
      "Comunicación Técnica",
      "Trabajo Colaborativo",
      "Aprendizaje Continuo",
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    id: "edu-1",
    institution: "Programa Académico IA Supérate",
    degree: "Especialización en Inteligencia Artificial, Machine Learning y Desarrollo Web",
    period: "2026 (10 Semanas)",
    status: "Completado",
    highlights: [
      "Desarrollo de modelos supervisados y no supervisados en Python.",
      "Construcción y despliegue en producción de aplicaciones Full-Stack con Next.js y Vercel.",
    ],
  },
  {
    id: "edu-2",
    institution: "Institución Educativa Superior (Simulada)",
    degree: "Ingeniería en Ciencias de la Computación / Desarrollo de Software",
    period: "2024 – Actualidad",
    status: "En curso",
    highlights: [
      "Fundamentos de algoritmos, estructuras de datos y matemáticas aplicadas.",
      "Participación en laboratorios prácticos de desarrollo de software.",
    ],
  },
  {
    id: "edu-3",
    institution: "Formación Complementaria & Certificaciones",
    degree: "Control de Versiones con Git, TypeScript Moderno y Ciencia de Datos",
    period: "2025 – 2026",
    status: "Certificado",
    highlights: [
      "Buenas prácticas de repositorios, flujos de ramas y documentación técnica.",
      "Análisis exploratorio de datos y visualización científica.",
    ],
  },
];
