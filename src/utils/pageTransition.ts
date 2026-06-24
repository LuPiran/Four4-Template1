/** Groups routes that should not replay the page transition (e.g. shop product modal). */
export function getPageTransitionKey(pathname: string): string {
  if (pathname.startsWith('/shop')) return '/shop'
  return pathname
}
