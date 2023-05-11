import { SingleNavItem } from '../types';

const NavTree: SingleNavItem[] = [
  { label: 'Home', key: 'home', path: '/home' },
  {
    label: 'Products',
    key: 'products',
    path: '',
    nestedMenu: [
      { label: 'CV Builder', key: 'cv_builder', path: '/cv-builder' },
      {
        label: 'CV Reviewer',
        key: 'cv_reviewer',
        path: '/cv-reviewer',
      },
      {
        label: 'LinkedIn Reviewer',
        key: 'linkedin_reviewer',
        path: '/linkedin-reviewer',
      },
      {
        label: 'Cover Letter',
        key: 'cover_letter',
        path: '/cover-letter',
      },
      {
        label: 'Recommendation Letter',
        key: 'recommendation_letter',
        path: '/recommendation-letter',
      },
      {
        label: 'Job Application',
        key: 'job_application',
        path: '/job-application',
      },
    ],
  },
  { label: 'About', key: 'about', path: '/about' },
  { label: 'Blog', key: 'blog', path: '/blog' },
];

const navigationConfig: SingleNavItem[] = [...NavTree];

export default navigationConfig;
