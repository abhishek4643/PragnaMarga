export type UserData = {
  education: string;
  skills: string;
  certifications: string;
  projects: string;
  interests: string;
  experience: string;
};

export const CAREER_PATHS = [
  'AI Developer',
  'Data Scientist',
  'Business Analyst',
  'DevOps Engineer',
  'System Analyst',
  'Software Engineer',
] as const;

export type CareerPath = typeof CAREER_PATHS[number];

const KEYWORD_SCORES: Record<string, Partial<Record<CareerPath, number>>> = {
  // AI / ML
  'ai': { 'AI Developer': 3, 'Data Scientist': 1 },
  'machine learning': { 'AI Developer': 3, 'Data Scientist': 2 },
  'deep learning': { 'AI Developer': 3 },
  'tensorflow': { 'AI Developer': 2, 'Data Scientist': 1 },
  'pytorch': { 'AI Developer': 2, 'Data Scientist': 1 },
  'neural': { 'AI Developer': 2 },
  
  // Data
  'data': { 'Data Scientist': 3, 'Business Analyst': 1 },
  'statistics': { 'Data Scientist': 2, 'Business Analyst': 1 },
  'python': { 'Data Scientist': 2, 'AI Developer': 2, 'Software Engineer': 1 },
  'r': { 'Data Scientist': 2 },
  'sql': { 'Data Scientist': 1, 'Business Analyst': 2, 'System Analyst': 1 },
  'analytics': { 'Data Scientist': 2, 'Business Analyst': 3 },
  
  // Business / Systems
  'business': { 'Business Analyst': 3, 'System Analyst': 2 },
  'management': { 'Business Analyst': 2, 'System Analyst': 1 },
  'requirements': { 'Business Analyst': 2, 'System Analyst': 2 },
  'agile': { 'Business Analyst': 1, 'Software Engineer': 1, 'System Analyst': 1 },
  'system': { 'System Analyst': 3, 'DevOps Engineer': 1 },
  'architecture': { 'System Analyst': 2, 'Software Engineer': 1 },
  'erp': { 'System Analyst': 2, 'Business Analyst': 1 },
  
  // DevOps
  'aws': { 'DevOps Engineer': 2, 'Software Engineer': 1 },
  'cloud': { 'DevOps Engineer': 3, 'Software Engineer': 1 },
  'docker': { 'DevOps Engineer': 2, 'Software Engineer': 1 },
  'kubernetes': { 'DevOps Engineer': 3 },
  'ci/cd': { 'DevOps Engineer': 3, 'Software Engineer': 1 },
  'linux': { 'DevOps Engineer': 2, 'System Analyst': 1 },
  
  // Software Engineering
  'javascript': { 'Software Engineer': 3 },
  'java': { 'Software Engineer': 3 },
  'c++': { 'Software Engineer': 2, 'AI Developer': 1 },
  'react': { 'Software Engineer': 2 },
  'node': { 'Software Engineer': 2 },
  'web': { 'Software Engineer': 2 },
  'app': { 'Software Engineer': 2 },
  'code': { 'Software Engineer': 2 },
};

export const recommendCareer = (data: UserData): { path: CareerPath; reason: string } => {
  const scores: Record<CareerPath, number> = {
    'AI Developer': 0,
    'Data Scientist': 0,
    'Business Analyst': 0,
    'DevOps Engineer': 0,
    'System Analyst': 0,
    'Software Engineer': 0,
  };

  const allText = Object.values(data).join(' ').toLowerCase();

  Object.entries(KEYWORD_SCORES).forEach(([keyword, pathScores]) => {
    if (allText.includes(keyword)) {
      Object.entries(pathScores).forEach(([path, score]) => {
        scores[path as CareerPath] += score;
      });
    }
  });

  // Find the max score
  let maxScore = -1;
  let recommendedPath: CareerPath = 'Software Engineer'; // Default fallback

  Object.entries(scores).forEach(([path, score]) => {
    if (score > maxScore) {
      maxScore = score;
      recommendedPath = path as CareerPath;
    }
  });

  // Basic reasoning
  const reasons: Record<CareerPath, string> = {
    'AI Developer': 'Your interest in advanced algorithms, machine learning, and AI technologies strongly aligns with building intelligent systems.',
    'Data Scientist': 'Your focus on data, statistics, and analytical tools makes you a great fit for extracting insights from complex datasets.',
    'Business Analyst': 'Your combination of business acumen and analytical skills is perfect for bridging the gap between stakeholders and tech teams.',
    'DevOps Engineer': 'Your inclination towards cloud, infrastructure, and deployment pipelines makes you ideal for streamlining software delivery.',
    'System Analyst': 'Your understanding of systems, architecture, and requirements makes you a strong candidate for designing IT solutions.',
    'Software Engineer': 'Your coding skills and passion for building applications make you a versatile and capable software engineer.'
  };

  return {
    path: recommendedPath,
    reason: reasons[recommendedPath]
  };
};
