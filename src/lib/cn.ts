/** Tiny class-name joiner — keeps conditional Tailwind lists readable. */
export const cn = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(' ')
