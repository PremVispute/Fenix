import { serviceCategories, services, type ServiceCategorySlug } from './services'

export interface NavLink {
  label: string
  to: string
}

/** Every service lives at /services/:category/:slug */
export const serviceHref = (category: ServiceCategorySlug, slug: string) =>
  `/services/${category}/${slug}`

export const categoryHref = (category: ServiceCategorySlug) => `/services/${category}`

/** The mega-menu is three columns; the shorter groups share the last one. */
export const megaMenuColumns = [
  ['assessments-career'],
  ['training-development'],
  ['language-training', 'child-psychology-parenting'],
].map((slugs) =>
  slugs.map((slug) => {
    const category = serviceCategories.find((entry) => entry.slug === slug)!
    return {
      ...category,
      links: services
        .filter((service) => service.category === category.slug)
        .map((service) => ({
          label: service.title,
          to: serviceHref(service.category, service.slug),
          kicker: service.kicker,
        })),
    }
  }),
)

export const primaryNav: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Students & Parents', to: '/students-parents' },
  { label: 'Corporates', to: '/corporates' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/contact' },
]

export const footerNav = {
  quickLinks: [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Students & Parents', to: '/students-parents' },
    { label: 'Corporates', to: '/corporates' },
    { label: 'Blogs', to: '/blogs' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Testimonials', to: '/testimonials' },
    { label: 'Leave a Review', to: '/reviews' },
    { label: 'Contact', to: '/contact' },
  ] satisfies NavLink[],
  services: [
    { label: 'Assessments & Career', to: categoryHref('assessments-career') },
    { label: 'Child Psychology & Parenting', to: categoryHref('child-psychology-parenting') },
    { label: 'Training & Development', to: categoryHref('training-development') },
    { label: 'Language Training', to: categoryHref('language-training') },
  ] satisfies NavLink[],
  legal: [{ label: 'Privacy Policy', to: '/privacy-policy' }] satisfies NavLink[],
}
