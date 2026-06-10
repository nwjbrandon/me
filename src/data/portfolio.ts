/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT
 *  This is the single file you edit to update the site's content.
 *  Everything below is plain data — no styling or layout logic lives here.
 *  Types are defined in `./portfolio.types` so your editor will autocomplete
 *  and warn you if a required field is missing.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type {
  Award,
  Experience,
  PortfolioData,
  Profile,
  Project,
  SkillGroup,
  SocialLink,
} from './portfolio.types';

const profile: Profile = {
  name: 'Brandon Ng',
  // Cycled through with a typewriter effect in the hero.
  roles: [
    'Software Engineer',
    'Machine Learning Engineer',
    'Full-Stack Developer',
    'NUS Master Student',
  ],
  tagline: 'I build machine-learning systems and the products around them.',
  about:
    'I have industrial experience in full-stack development and machine learning, ' +
    'spanning computer vision, OCR, and natural language processing. I also enjoy ' +
    'managing projects and translating fuzzy user requirements into shipped features. ' +
    "I'm comfortable across JavaScript, C++, Go, and Java — but Python is home.",
  location: 'Singapore',
  email: 'nwjbrandon@gmail.com',
  // Drop a PDF into the `public/` folder and point this at it (e.g. '/resume.pdf'),
  // or leave it null to hide the "Resume" button.
  resumeUrl: null,
};

const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/nwjbrandon', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nwjbrandon', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:nwjbrandon@gmail.com', icon: 'mail' },
];

const skills: SkillGroup[] = [
  { label: 'Languages', items: ['Python', 'JavaScript / TypeScript', 'C++', 'Go', 'Java'] },
  { label: 'Machine Learning', items: ['PyTorch', 'Computer Vision', 'NLP', 'OCR'] },
  { label: 'Cloud & Infra', items: ['AWS', 'Terraform', 'Kubernetes', 'Docker'] },
  { label: 'Web', items: ['React', 'Node.js', 'REST APIs'] },
];

const experiences: Experience[] = [
  {
    role: 'Software Engineer',
    company: 'AI Singapore',
    period: 'Jun 2022 — Present',
    highlights: [
      'Developed scalable computer-vision algorithms to support online exam grading.',
      'Trained OCR models on self-annotated handwriting datasets.',
      'Deployed AWS resources with Terraform, compliant with NUS IT security.',
      'Demonstrated product features and gathered feedback and requirements.',
    ],
    tags: ['Computer Vision', 'OCR', 'AWS', 'Terraform', 'Python'],
  },
  {
    role: 'Algorithm Engineer Intern',
    company: 'Shopee',
    period: 'Dec 2021 — May 2022',
    highlights: [
      'Extracted embeddings to cluster text with similar semantics in batches.',
      'Performed model distillation to learn model weights with fewer parameters.',
    ],
    tags: ['NLP', 'Embeddings', 'Model Distillation', 'Python'],
  },
  {
    role: 'AI Developer Intern',
    company: 'Augmentus',
    period: 'May 2021 — Sep 2021',
    highlights: [
      'Trained object-detection models to locate object positions in images.',
      'Created a training pipeline on AWS to queue and train models.',
    ],
    tags: ['Object Detection', 'AWS', 'Python'],
  },
  {
    role: 'System Engineer Intern',
    company: 'GovTech',
    period: 'Dec 2020 — Mar 2021',
    highlights: [
      'Trained a crowd-counting model to estimate the number of people in an image.',
      'Deployed the model on a Jetson device to estimate crowd count from security cameras.',
    ],
    tags: ['Crowd Counting', 'Edge AI', 'Jetson'],
  },
  {
    role: 'Data Analytics / NLP Intern',
    company: 'GovTech',
    period: 'Jan 2020 — Jul 2020',
    highlights: [
      'Built a dashboard integrating NLP models for visualising and cleaning datasets.',
      'Deployed the dashboard on a Kubernetes cluster on AWS.',
    ],
    tags: ['NLP', 'Dashboards', 'Kubernetes', 'AWS'],
  },
];

const projects: Project[] = [
  {
    title: 'Teleoperated Robotic Arm via 3D Pose Estimation',
    context: 'CG4001 B.Eng. Dissertation',
    period: 'Aug 2021 — Apr 2022',
    highlights: [
      'Trained pose-estimation models to estimate 3D hand and body poses from images.',
      'Integrated the models to remotely control a robotic arm.',
    ],
    tags: ['3D Pose Estimation', 'Robotics', 'PyTorch'],
    link: null,
  },
  {
    title: 'Wearable Devices to Classify Dance Moves',
    context: 'CG4002 Computer Engineering Capstone',
    period: 'Jan 2021 — May 2021',
    highlights: [
      'Performed time- and frequency-domain feature engineering on time-series data.',
      'Trained a machine-learning model in PyTorch to classify dance moves.',
    ],
    tags: ['Time Series', 'Feature Engineering', 'PyTorch', 'Wearables'],
    link: null,
  },
  {
    title: 'Sixth Sense — Experiential Tourism for Bengkala',
    context: 'Community Service Project',
    period: 'Jan 2019 — Aug 2019',
    highlights: [
      'Led a group to promote experiential tourism for the Bengkala community.',
      'Built a website for the community to update and share their stories.',
    ],
    tags: ['Web Development', 'Leadership', 'Community'],
    link: null,
  },
];

const awards: Award[] = [
  {
    title: "Dean's List, AY2021/2022 Semester 2",
    period: 'Jul 2022',
    description: "Attained the Dean's List for top 5% academic achievement in the cohort.",
  },
  {
    title: 'NUS Hack&Roll Winner',
    period: 'Jan 2022',
    description: 'Awarded a winning project out of 206 teams at NUS Hack&Roll.',
  },
  {
    title: 'CG4002 Capstone Commendation Letter',
    period: 'Dec 2021',
    description: 'Received a commendation letter out of 92 students for the capstone project.',
  },
  {
    title: 'NUS Merit Scholarship',
    period: 'Jul 2018',
    description: 'Awarded for outstanding academics, co-curriculars, and leadership.',
  },
];

const portfolio: PortfolioData = {
  profile,
  socials,
  skills,
  experiences,
  projects,
  awards,
};

export default portfolio;
