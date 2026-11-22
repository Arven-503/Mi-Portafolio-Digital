export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface ProfileData {
  fullName: string;
  role: string;
  tagline: string;
  avatarUrl: string;
  location: string;
  socials: SocialLinks;
  about: {
    whoAmI: string;
    studies: string;
    interests: string[];
    goals: string;
    strengths: string[];
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: "Académica" | "Proyecto Colaborativo" | "Pasantía" | "Voluntariado";
  description: string;
  achievements: string[];
}

export interface ProjectEvidence {
  week: string;
  objective: string;
  problem: string;
  solutionExplanation: string;
  results: string[];
  technologies: string[];
  codeSnippet: string;
  codeLanguage: string;
  fileName: string;
  repoUrl: string;
  images: {
    src: string;
    caption: string;
  }[];
  architectureDetails?: {
    projectStructure: string[];
    frontendComponents: string[];
    backendEndpoints: string[];
    validations: string[];
  };
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: "Machine Learning" | "Algoritmos e IA" | "Ciencia de Datos" | "Full-Stack Web";
  shortDescription: string;
  accentColor: "indigo" | "emerald" | "amber" | "rose" | "cyan";
  evidence: ProjectEvidence;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  status: string;
  highlights: string[];
}
