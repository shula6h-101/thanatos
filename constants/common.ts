export const bannerContent: { iconClass: string; title: string; id: string }[] = [
  { title: 'Curriculum vitae', iconClass: 'fi fi-ts-file-user', id: 'title_1' },
  { title: 'LinkedIn Profile', iconClass: 'fi fi-brands-linkedin', id: 'title_2' },
  { title: 'Application Letter', iconClass: 'fi fi-ts-poll-h', id: 'title_3' },
];

export const cvBuilderOptions: {
  id: string;
  iconClass: string;
  title: string;
  description: string;
}[] = [
  {
    title: 'Upload CV',
    iconClass: 'fi fi-ts-file-upload',
    id: 'upload',
    description: 'Upload you CV of size not more than 5mb to generate the optimised version of it.',
  },
  {
    title: 'Fill Profile Details',
    iconClass: 'fi fi-ts-clipboard',
    id: 'fill',
    description: 'Fill your profile details and sit back we will handel the rest.',
  },
];
