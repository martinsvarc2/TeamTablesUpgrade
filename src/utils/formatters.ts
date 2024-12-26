export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' })
}

export function formatDateShort(date: string) {
  return new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

export function filterData(data: any[], query: string) {
  return data.filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase())
  )
}

