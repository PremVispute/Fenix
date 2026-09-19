export const site = {
  name: 'Fenix Learning Services',
  shortName: 'Fenix',
  tagline: 'We ignite the flame to define your future.',
  pillars: ['People', 'Potential', 'Progress'] as const,
  summary:
    'Assessment, career guidance and practical learning for students, professionals and organisations.',
  contact: {
    email: 'sumeet@fenixlearningservices.com',
    phone: '+91 99308 78328',
    phoneHref: 'tel:+919930878328',
    location: 'Bengaluru, India',
  },
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'linkedin' },
    { label: 'Instagram', href: 'https://www.instagram.com', icon: 'instagram' },
    { label: 'Facebook', href: 'https://www.facebook.com', icon: 'facebook' },
    { label: 'YouTube', href: 'https://www.youtube.com', icon: 'youtube' },
  ],
} as const

export const stats = [
  { value: '500+', label: 'Students Guided', icon: 'users' },
  { value: '50+', label: 'Training Programmes', icon: 'presentation' },
  { value: '15+', label: 'Partner Institutions', icon: 'building' },
  { value: '95%', label: 'Positive Feedback', icon: 'star' },
] as const
