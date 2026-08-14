export function cn(...classes: Array<string | false | null | undefined>) { return classes.filter(Boolean).join(' ') }
export function minutesBetween(start: string, end: string) {
  const [sh, sm] = start.split(':').map(Number), [eh, em] = end.split(':').map(Number)
  return (eh * 60 + em) - (sh * 60 + sm)
}
export function formatDate(date: string) { return new Intl.DateTimeFormat('ms-MY', { dateStyle: 'long' }).format(new Date(date)) }
