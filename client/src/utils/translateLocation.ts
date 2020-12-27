export function translateLocation(location: string): string {
  if (location === '/') return '/'
  if (location.substr(0, 7) === '/skills') return '/skills'
  if (location.substr(0, 11) === '/activities') return '/activities'
  return ''
}
