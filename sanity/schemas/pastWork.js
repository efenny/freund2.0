import { MdComputer } from 'react-icons/md';

const PastWork = {
  title: 'Past Work',
  name: 'past-work',
  type: 'document',
  icon: MdComputer,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      title: 'Date Published',
      name: 'datePublished',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today',
      },
    },
    {
      title: 'Role',
      name: 'role',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Site URL',
      name: 'siteUrl',
      type: 'url',
    },
    {
      title: 'Tech Stack',
      name: 'techStack',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
  ],
  orderings: [
    {
      title: 'Publish Date, New',
      name: 'releaseDateDesc',
      by: [{ field: 'datePublished', direction: 'desc' }],
    },
    {
      title: 'Publish Date, Old',
      name: 'releaseDateAsc',
      by: [{ field: 'datePublished', direction: 'asc' }],
    },
  ],
};

export default PastWork;
