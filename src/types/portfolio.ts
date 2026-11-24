export type Language = "es" | "en";

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface ProfileContent {
  role: string;
  tagline: string;
  location: string;
  about: {
    whoAmI: string;
    studies: string;
    interests: string[];
    goals: string;
    strengths: string[];
  };
}

export interface ProfileData {
  fullName: string;
  socials: SocialLinks;
  es: ProfileContent;
  en: ProfileContent;
}

export interface ExperienceLocalized {
  role: string;
  organization: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
}

export interface ExperienceItem {
  id: string;
  es: ExperienceLocalized;
  en: ExperienceLocalized;
}

export interface ProjectEvidenceLocalized {
  week: string;
  objective: string;
  problem: string;
  solutionExplanation: string;
  results: string[];
  imageCaptions: string[];
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
  category: { es: string; en: string };
  title: { es: string; en: string };
  shortDescription: { es: string; en: string };
  technologies: string[];
  codeSnippet: string;
  codeLanguage: string;
  fileName: string;
  repoUrl: string;
  imageSources: string[];
  es: ProjectEvidenceLocalized;
  en: ProjectEvidenceLocalized;
}

export interface SkillCategory {
  category: { es: string; en: string };
  skills: string[];
}

export interface EducationLocalized {
  institution: string;
  degree: string;
  period: string;
  status: string;
  highlights: string[];
}

export interface EducationItem {
  id: string;
  es: EducationLocalized;
  en: EducationLocalized;
}
