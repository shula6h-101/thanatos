import { SingleNavItem } from '../types';

const NavTree: SingleNavItem[] = [
  { name: 'Home', id: 'home', path: '/home' },
  {
    name: 'Products',
    id: 'products',
    path: '/products',
    nestedMenu: [
      { name: 'CV Builder', id: 'cv_builder', path: '/cv-builder' },
      {
        name: 'CV Reviewer',
        id: 'cv_reviewer',
        path: '/cv-reviewer',
      },
      {
        name: 'LinkedIn Reviewer',
        id: 'linkedin_reviewer',
        path: '/linkedin-reviewer',
      },
      {
        name: 'Cover Letter',
        id: 'cover_letter',
        path: '/cover-letter',
      },
      {
        name: 'Recommendation Letter',
        id: 'recommendation_letter',
        path: '/recommendation-letter',
      },
      {
        name: 'Job Application',
        id: 'job_application',
        path: '/job-application',
      },
    ],
  },
  { name: 'About', id: 'about', path: '/about' },
  { name: 'Blog', id: 'blog', path: '/blog' },
];

const navigationConfig: SingleNavItem[] = [...NavTree];

export default navigationConfig;
