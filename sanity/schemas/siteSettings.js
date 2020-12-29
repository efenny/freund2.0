const siteSettings = {
  title: 'Site Settings',
  name: 'site-settings',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Site name',
      type: 'string',
    },
    {
      name: 'profilePhoto',
      title: 'Profile Photo',
      type: 'image',
    },
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'number',
    },
  ],
};

export default siteSettings;
