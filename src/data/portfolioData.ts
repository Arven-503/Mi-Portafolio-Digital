import {
  ProfileData,
  ExperienceItem,
  ProjectItem,
  SkillCategory,
  EducationItem,
} from "@/types/portfolio";

export const profileData: ProfileData = {
  fullName: "Daniel Alejandro Amaya",
  socials: {
    github: "https://github.com/Arven-503",
    linkedin: "https://www.linkedin.com/in/daniel-alejandro-amaya-vel%C3%A1squez-880244401/",
    email: "daniel.amaya.dev.2007@gmail.com",
  },
  es: {
    role: "Estudiante con formación en Informática",
    tagline: "Imaginando y creando nuevas soluciones",
    location: "San Salvador, El Salvador",
    about: {
      whoAmI:
        "Soy estudiante del programa ¡Supérate! con formación en Informática y fui la nota más alta de la prueba AVANZO en San Salvador en 2025. Me enfoco en el desarrollo de software, la inteligencia artificial aplicada y la creación de soluciones tecnológicas con impacto real.",
      studies:
        "Programa ¡Supérate! · Especialización en Informática, Inteligencia Artificial y Desarrollo Full-Stack.",
      interests: [
        "Inteligencia Artificial y Machine Learning",
        "Algoritmos de Búsqueda y Optimización",
        "Arquitectura Web Full-Stack (Next.js / TypeScript)",
        "Ciencia de Datos y Analítica Espacial",
      ],
      goals:
        "Transformar ideas complejas en plataformas funcionales, escalables y bien diseñadas, manteniendo la excelencia académica y técnica en cada proyecto.",
      strengths: [
        "Pensamiento lógico y resolución estructurada de problemas",
        "Excelencia académica y liderazgo en proyectos tecnológicos",
        "Desarrollo modular con tipado estricto",
        "Capacidad para aprender e integrar nuevas tecnologías",
      ],
    },
  },
  en: {
    role: "Student with a background in Computer Science",
    tagline: "Imagining and creating new solutions",
    location: "San Salvador, El Salvador",
    about: {
      whoAmI:
        "I am a student in the ¡Supérate! program with a background in Computer Science, and I achieved the highest score on the AVANZO national exam in San Salvador in 2025. I focus on software development, applied artificial intelligence, and building impactful tech solutions.",
      studies:
        "¡Supérate! Program · Specialization in Computer Science, Artificial Intelligence & Full-Stack Development.",
      interests: [
        "Artificial Intelligence & Machine Learning",
        "Search & Optimization Algorithms",
        "Full-Stack Web Architecture (Next.js / TypeScript)",
        "Data Science & Spatial Analytics",
      ],
      goals:
        "Transform complex ideas into functional, scalable, and well-engineered platforms while maintaining academic and technical excellence.",
      strengths: [
        "Logical thinking and structured problem-solving",
        "Academic excellence and leadership in tech projects",
        "Modular development with strict typing",
        "Fast learner and adaptable to new tools",
      ],
    },
  },
};

export const experiencesData: ExperienceItem[] = [
  {
    id: "exp-1",
    es: {
      role: "ExpoTech 2026",
      organization: "Programa ¡Supérate! · Innovación y Desarrollo Tecnológico",
      period: "2026",
      type: "Exhibición Tecnológica",
      description:
        "Presentación de soluciones tecnológicas integrales combinando desarrollo web Full-Stack e inteligencia artificial aplicada.",
      achievements: [
        "Demostración en vivo de arquitectura web moderna, API REST y modelos predictivos.",
        "Resolución de problemáticas reales mediante prototipos funcionales de software.",
      ],
    },
    en: {
      role: "ExpoTech 2026",
      organization: "¡Supérate! Program · Innovation & Tech Development",
      period: "2026",
      type: "Tech Exhibition",
      description:
        "Showcase of end-to-end technology solutions combining Full-Stack web development and applied artificial intelligence.",
      achievements: [
        "Live demonstration of modern web architecture, REST APIs, and predictive models.",
        "Solved real-world challenges through functional software prototypes.",
      ],
    },
  },
  {
    id: "exp-2",
    es: {
      role: "Expo de Logros 2025",
      organization: "Programa ¡Supérate! · Muestra Académica y Tecnológica",
      period: "2025",
      type: "Evento Institucional",
      description:
        "Exposición de proyectos desarrollados en informática, análisis de datos y programación ante evaluadores e invitados.",
      achievements: [
        "Presentación estructurada de resultados técnicos, métricas y funcionamiento del sistema.",
        "Trabajo colaborativo y comunicación efectiva de propuestas de software.",
      ],
    },
    en: {
      role: "Expo de Logros 2025 (Achievements Expo)",
      organization: "¡Supérate! Program · Academic & Tech Showcase",
      period: "2025",
      type: "Institutional Event",
      description:
        "Exhibition of software, data analysis, and computer science projects presented to evaluators and guests.",
      achievements: [
        "Structured presentation of technical outcomes, metrics, and system architecture.",
        "Collaborative teamwork and clear communication of software proposals.",
      ],
    },
  },
  {
    id: "exp-3",
    es: {
      role: "Hackathon 2024",
      organization: "Competencia de Desarrollo y Resolución de Retos",
      period: "2024",
      type: "Hackathon",
      description:
        "Ideación, diseño y prototipado rápido de una solución digital bajo tiempo limitado en equipo.",
      achievements: [
        "Diseño de lógica funcional y experiencia de usuario en sesiones intensivas de código.",
        "Validación de propuesta técnica orientada a impacto social y eficiencia.",
      ],
    },
    en: {
      role: "Hackathon 2024",
      organization: "Software Development & Problem-Solving Competition",
      period: "2024",
      type: "Hackathon",
      description:
        "Rapid ideation, design, and prototyping of a digital solution under strict time constraints.",
      achievements: [
        "Engineered core application logic and user interface during intensive coding sprints.",
        "Validated technical proposal focused on social impact and efficiency.",
      ],
    },
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "proj-regresion",
    slug: "regresion-lineal-semana-3",
    category: { es: "Machine Learning", en: "Machine Learning" },
    title: {
      es: "Actividad 1 · Regresión Lineal Predictiva",
      en: "Activity 1 · Predictive Linear Regression",
    },
    shortDescription: {
      es: "Modelo supervisado para estimación de tendencias numéricas, cálculo de error cuadrático medio (MSE) y ajuste por mínimos cuadrados.",
      en: "Supervised model for numerical trend estimation, Mean Squared Error (MSE) calculation, and ordinary least squares fitting.",
    },
    technologies: ["Python", "NumPy", "Pandas", "Scikit-Learn", "Matplotlib"],
    fileName: "regresion_lineal.py",
    repoUrl: "https://github.com/Arven-503/Regresion-Lineal",
    codeLanguage: "python",
    imageSources: ["/evidencias/regresion/grafica-regresion.svg"],
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

print(f"MSE: {mean_squared_error(y_test, predicciones):.4f}")
print(f"R2 Score: {r2_score(y_test, predicciones):.4f}")`,
    es: {
      week: "Semana 3",
      objective:
        "Implementar en Python un modelo de regresión lineal para predecir valores continuos y evaluar su precisión estadística.",
      problem:
        "Estimar tendencias futuras a partir de observaciones históricas minimizando el error residual entre predicción y valor real.",
      solutionExplanation:
        "Se dividieron los datos en entrenamiento y prueba (80/20), ajustando la recta óptima mediante Scikit-Learn y evaluando con R² y MSE.",
      results: [
        "Coeficiente de determinación R² = 0.942 en validación.",
        "Error Cuadrático Medio (MSE) reducido a 12.48 unidades.",
        "Gráfica de ajuste lineal con bandas de dispersión.",
      ],
      imageCaptions: ["Ajuste lineal por mínimos cuadrados y dispersión residual."],
    },
    en: {
      week: "Week 3",
      objective:
        "Implement a linear regression model in Python to predict continuous values and evaluate statistical accuracy.",
      problem:
        "Estimate future trends from historical observations while minimizing residual error between predicted and actual values.",
      solutionExplanation:
        "Split dataset into training and testing sets (80/20), fitted the optimal line with Scikit-Learn, and evaluated using R² and MSE.",
      results: [
        "Coefficient of determination R² = 0.942 on validation set.",
        "Mean Squared Error (MSE) reduced to 12.48 units.",
        "Linear fit visualization with residual dispersion bands.",
      ],
      imageCaptions: ["Ordinary least squares linear fit and residual dispersion."],
    },
  },
  {
    id: "proj-laberinto",
    slug: "laberinto-arboles-decision-semana-4",
    category: { es: "Algoritmos e IA", en: "Algorithms & AI" },
    title: {
      es: "Actividad 2 · Laberinto con Árboles de Decisión",
      en: "Activity 2 · Maze Navigation with Decision Trees",
    },
    shortDescription: {
      es: "Exploración estructurada en árbol de decisiones sobre matrices bidimensionales con poda de nodos visitados y reconstrucción de ruta.",
      en: "Structured decision-tree exploration over 2D grids with visited-state pruning and optimal path reconstruction.",
    },
    technologies: ["Python", "Árboles de Decisión", "Estructuras de Datos", "Búsqueda"],
    fileName: "laberinto_arbol.py",
    repoUrl: "https://github.com/Arven-503/Laberinto-Procedural",
    codeLanguage: "python",
    imageSources: ["/evidencias/laberinto/solucion-laberinto.svg"],
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
    es: {
      week: "Semana 4",
      objective:
        "Modelar un laberinto como árbol de decisiones para hallar una trayectoria válida desde el origen hasta la salida sin ciclos.",
      problem:
        "Evitar bucles infinitos y callejones sin salida dentro de un entorno discreto con obstáculos.",
      solutionExplanation:
        "Cada celda se modeló como nodo ramificado en 4 direcciones posibles con registro de estados visitados y poda de ramas redundantes.",
      results: [
        "Resolución completa de matriz 10x10 sin ciclos.",
        "Reducción del 45 % en nodos explorados mediante poda.",
        "Reconstrucción exacta del camino solución.",
      ],
      imageCaptions: ["Trayectoria óptima trazada desde el nodo inicial hasta la meta."],
    },
    en: {
      week: "Week 4",
      objective:
        "Model a maze as a decision tree to find a valid path from start to goal without infinite loops.",
      problem:
        "Avoid infinite cycles and dead ends inside a discrete grid environment with walls.",
      solutionExplanation:
        "Each cell was modeled as a branching node across 4 directions with visited-state tracking and redundant branch pruning.",
      results: [
        "Full 10x10 grid maze solved with zero loops.",
        "45% reduction in explored nodes via state pruning.",
        "Exact step-by-step path reconstruction.",
      ],
      imageCaptions: ["Optimal path traced from start node to target exit."],
    },
  },
  {
    id: "proj-ai-challenge",
    slug: "ai-challenge-kmeans-knn",
    category: { es: "Machine Learning", en: "Machine Learning" },
    title: {
      es: "Actividad 3 · AI Challenge: K-Means y KNN",
      en: "Activity 3 · AI Challenge: K-Means & KNN",
    },
    shortDescription: {
      es: "Segmentación no supervisada con K-Means (K=3 y K=4) y clasificación supervisada KNN evaluando el impacto de StandardScaler sobre 500 registros académicos.",
      en: "Unsupervised K-Means clustering (K=3 and K=4) paired with supervised KNN classification comparing StandardScaler impact across 500 student records.",
    },
    technologies: ["Python", "NumPy", "Pandas", "Scikit-Learn", "Matplotlib", "Google Colab"],
    fileName: "KNN_y_K_Means.ipynb",
    repoUrl: "https://github.com/Arven-503/KNN-y-K-Means",
    codeLanguage: "python",
    imageSources: ["/evidencias/ai-challenge/clusters-knn.svg"],
    codeSnippet: `import numpy as np
import pandas as pd
from sklearn.cluster import KMeans
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score

np.random.seed(42)
n = 500
horas = np.random.randint(1, 11, n)
asistencia = np.random.randint(40, 101, n)
tareas = np.random.randint(30, 101, n)
nota = np.clip((horas * 5) + (asistencia * 0.35) + (tareas * 0.25) + np.random.normal(0, 5, n), 0, 100)
aprobado = np.where(nota >= 60, 1, 0)

df = pd.DataFrame({"Horas": horas, "Asistencia": asistencia, "Tareas": tareas, "Nota": nota, "Aprobado": aprobado})
scaler = StandardScaler()
X_norm = scaler.fit_transform(df[["Horas", "Asistencia", "Tareas"]])

df["Grupo3"] = KMeans(n_clusters=3, random_state=42, n_init=10).fit_predict(X_norm)
df["Grupo4"] = KMeans(n_clusters=4, random_state=42, n_init=10).fit_predict(X_norm)

X_train_norm, X_test_norm, y_train, y_test = train_test_split(X_norm, df["Aprobado"], test_size=0.25, random_state=42)
valores_k = [1, 3, 5, 7, 11, 15, 21]
resultados_norm = [
    accuracy_score(y_test, KNeighborsClassifier(n_neighbors=k).fit(X_train_norm, y_train).predict(X_test_norm))
    for k in valores_k
]
mejor_k = valores_k[np.argmax(resultados_norm)]
print("Mejor k:", mejor_k, "Exactitud:", max(resultados_norm))`,
    es: {
      week: "Semana 6–7",
      objective:
        "Aplicar clustering K-Means (3 y 4 grupos) y clasificación KNN sobre 500 registros académicos, comparando exactitud con y sin normalización.",
      problem:
        "Identificar perfiles de rendimiento estudiantil sin etiquetas y predecir aprobación evaluando cómo afectan las distintas escalas numéricas (Horas, Asistencia, Tareas) a KNN.",
      solutionExplanation:
        "Se normalizaron las variables con StandardScaler, se analizaron clústeres K=3 y K=4 y se evaluaron 7 valores de k ([1, 3, 5, 7, 11, 15, 21]) antes de predecir un caso nuevo con predict_proba.",
      results: [
        "Comparación completa de K-Means con 3 y 4 clústeres sobre 500 estudiantes.",
        "Demostración experimental de mayor exactitud en KNN al aplicar StandardScaler.",
        "Selección automática del mejor hiperparámetro k y cálculo de probabilidad de aprobación.",
      ],
      imageCaptions: ["Clústeres K-Means (K=3 / K=4) y curva comparativa de exactitud KNN."],
    },
    en: {
      week: "Week 6–7",
      objective:
        "Apply K-Means clustering (3 and 4 clusters) and KNN classification on 500 student records, comparing accuracy with and without feature scaling.",
      problem:
        "Uncover unlabeled academic performance segments and predict pass/fail status while measuring how differing feature scales affect Euclidean distance in KNN.",
      solutionExplanation:
        "Standardized features with StandardScaler, analyzed K=3 and K=4 clusters, benchmarked 7 values of k ([1, 3, 5, 7, 11, 15, 21]), and predicted a new student case with predict_proba.",
      results: [
        "Full K-Means segmentation comparison for K=3 and K=4 across 500 records.",
        "Experimental validation showing improved KNN accuracy with StandardScaler.",
        "Automated optimal k selection and class probability estimation.",
      ],
      imageCaptions: ["K-Means clusters (K=3 / K=4) and KNN accuracy comparison curve."],
    },
  },
  {
    id: "proj-hotspots",
    slug: "hotspots-comerciales",
    category: { es: "Ciencia de Datos & Geo-ML", en: "Data Science & Geo-ML" },
    title: {
      es: "Actividad 4 · Detección de Hotspots Comerciales (San Salvador)",
      en: "Activity 4 · Commercial Hotspots Detection (San Salvador)",
    },
    shortDescription: {
      es: "Aplicación interactiva en Streamlit y Folium que evalúa hotspots comerciales en San Salvador usando K-Means, Coeficiente de Silueta y KNN con distancia Haversine.",
      en: "Interactive Streamlit & Folium app analyzing commercial hotspots in San Salvador using K-Means, Silhouette Score, and Haversine-distance KNN.",
    },
    technologies: ["Python", "Streamlit", "Folium", "Scikit-Learn", "Pandas", "NumPy"],
    fileName: "app.py (Streamlit + Folium)",
    repoUrl: "https://github.com/Arven-503/KNN-y-K-Means---Deteccion-de-hotspots-comerciales",
    codeLanguage: "python",
    imageSources: ["/evidencias/hotspots/mapa-hotspots.svg"],
    codeSnippet: `import streamlit as st
import pandas as pd
import numpy as np
import folium
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import LeaveOneOut

df = pd.read_csv("wendys_san_salvador_limpio.csv")
X = df[["latitud", "longitud"]].to_numpy()

kmeans = KMeans(n_clusters=k_clusters, random_state=42, n_init=10)
df["cluster"] = kmeans.fit_predict(X)
silueta = float(silhouette_score(X, df["cluster"]))

conteo_clusters = df["cluster"].value_counts()
promedio_locales = conteo_clusters.mean()
df["categoria_densidad"] = np.where(
    df["cluster"].map(conteo_clusters) > promedio_locales,
    "Alta Concentracion",
    "Baja Concentracion"
)

X_rad = np.radians(X)
y = np.array(df["categoria_densidad"].tolist())

knn_modelo = KNeighborsClassifier(n_neighbors=k_vecinos, metric="haversine")
knn_modelo.fit(X_rad, y)

punto_nuevo_rad = np.radians([[lat_nueva, lon_nueva]])
prediccion_nueva = knn_modelo.predict(punto_nuevo_rad)[0]
distancias_rad, indices_vecinos = knn_modelo.kneighbors(punto_nuevo_rad)
distancias_km = distancias_rad[0] * 6371.0`,
    es: {
      week: "Semana 8",
      objective:
        "Desarrollar un simulador geoespacial interactivo en Streamlit y Folium para evaluar concentración comercial y ubicaciones potenciales de apertura en San Salvador.",
      problem:
        "Determinar si una nueva coordenada propuesta en San Salvador cae en una zona de Alta o Baja Concentración comercial y medir su riesgo de canibalización frente a sucursales existentes.",
      solutionExplanation:
        "Se agruparon las sucursales con K-Means (midiendo calidad con Coeficiente de Silueta), se clasificaron zonas por densidad frente al promedio y se entrenó un modelo KNN con métrica Haversine validado mediante Leave-One-Out (LOO).",
      results: [
        "Mapa interactivo con Folium mostrando centroides K-Means, radios de 1.1 km y líneas Haversine a los k vecinos más cercanos.",
        "Validación cruzada Leave-One-Out (LOO) y cálculo exacto de distancias reales en kilómetros.",
        "Diagnóstico estratégico automático de oportunidad de expansión vs. riesgo de canibalización.",
      ],
      imageCaptions: ["Simulador geoespacial en Streamlit + Folium con centroides K-Means y vecinos KNN Haversine."],
    },
    en: {
      week: "Week 8",
      objective:
        "Build an interactive geospatial simulator in Streamlit and Folium to evaluate commercial density and potential store locations in San Salvador.",
      problem:
        "Determine whether a proposed coordinate in San Salvador falls within a High or Low Concentration zone and assess cannibalization risk against existing locations.",
      solutionExplanation:
        "Clustered store coordinates using K-Means (evaluated via Silhouette Score), labeled density zones against cluster averages, and trained a Haversine-metric KNN classifier validated with Leave-One-Out (LOO).",
      results: [
        "Interactive Folium map rendering K-Means centroids, 1.1 km radii, and Haversine dashed lines to k-nearest neighbors.",
        "Leave-One-Out (LOO) cross-validation and exact real-world distance calculations in kilometers.",
        "Automated strategic diagnosis comparing geographic expansion opportunity vs. cannibalization risk.",
      ],
      imageCaptions: ["Streamlit + Folium geospatial simulator with K-Means centroids and Haversine KNN neighbors."],
    },
  }
];

export const skillsData: SkillCategory[] = [
  {
    category: { es: "Flujo de Desarrollo con IA", en: "AI-Assisted Development" },
    skills: [
      "Prompt Engineering",
      "Prototipado Rápido",
      "Lectura y Depuración de Código",
      "Lógica de Programación",
      "Integración de APIs",
    ],
  },
  {
    category: { es: "Ecosistema Web & Despliegue", en: "Web Ecosystem & Deployment" },
    skills: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Vercel (CI/CD)",
      "Diseño Responsivo",
    ],
  },
  {
    category: { es: "Análisis & Ciencia de Datos", en: "Data Analysis & Science" },
    skills: [
      "Microsoft Excel (Expert)",
      "Pandas",
      "Limpieza de Datos",
      "Visualización (Matplotlib / Folium)",
      "Modelado de Datos",
    ],
  },
  {
    category: { es: "Entorno y Herramientas", en: "Environment & Tools" },
    skills: [
      "Git & GitHub",
      "Google Colab",
      "VS Code",
      "Streamlit",
      "Terminal / PowerShell",
    ],
  },
  {
    category: { es: "Conceptos de IA & ML", en: "AI & ML Concepts" },
    skills: [
      "Regresión Lineal",
      "K-Means (Clustering)",
      "KNN (Clasificación)",
      "Algoritmos DFS / BFS",
      "Evaluación de Modelos (R², Silueta)",
    ],
  },
  {
    category: { es: "Competencias y Certificaciones", en: "Competencies & Certifications" },
    skills: [
      "Inglés Avanzado (TOEIC)",
      "Pensamiento Lógico",
      "Resolución de Problemas",
      "Aprendizaje Autónomo",
      "Trabajo en Equipo",
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    id: "edu-1",
    es: {
      institution: "Centro ¡Supérate! Fundación Frech",
      degree: "Diplomado en Inglés, Informática y Valores",
      period: "2024 – 2026",
      status: "Destacado",
      highlights: [
        "Desarrollo de competencias prácticas en Informática y resolución lógica de problemas.",
        "Fortalecimiento comunicativo en el idioma Inglés y formación ética basada en Valores.",
      ],
    },
    en: {
      institution: "¡Supérate! Fundación Frech Center",
      degree: "Diploma in English, Computer Science & Values",
      period: "2024 – 2026",
      status: "Honors",
      highlights: [
        "Development of practical competencies in Computer Science and logical problem-solving.",
        "Communicative fluency in English and ethical leadership grounded in Values.",
      ],
    },
  },
  {
    id: "edu-2",
    es: {
      institution: "Educación Media · San Salvador",
      degree: "Bachillerato & Reconocimiento Excelencia AVANZO 2025",
      period: "2024 – 2025",
      status: "Completado",
      highlights: [
        "Primer lugar en calificación de prueba AVANZO en el departamento de San Salvador (2025).",
        "Formación sólida en matemáticas, lógica computacional e inglés.",
      ],
    },
    en: {
      institution: "High School · San Salvador",
      degree: "High School Diploma & AVANZO 2025 Top Score Recognition",
      period: "2024 – 2025",
      status: "Completed",
      highlights: [
        "Highest AVANZO exam score in San Salvador Department (2025).",
        "Strong foundation in mathematics, computational logic, and English.",
      ],
    },
  },
  {
    id: "edu-3",
    es: {
      institution: "Certificaciones Internacionales",
      degree: "TOEIC S&W / L&R & Microsoft Office Expert (Excel)",
      period: "2025 – 2026",
      status: "Certificado",
      highlights: [
        "TOEIC Speaking & Writing (S&W) y TOEIC Listening & Reading (L&R).",
        "Microsoft Excel Expert y Microsoft Excel Specialist.",
      ],
    },
    en: {
      institution: "International Certifications",
      degree: "TOEIC S&W / L&R & Microsoft Office Expert (Excel)",
      period: "2025 – 2026",
      status: "Certified",
      highlights: [
        "TOEIC Speaking & Writing (S&W) and TOEIC Listening & Reading (L&R).",
        "Microsoft Excel Expert and Microsoft Excel Specialist.",
      ],
    },
  },
];
