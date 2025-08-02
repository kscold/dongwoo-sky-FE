export interface QuickAction {
  href: string
  icon: string
  title: string
  description: string
}

export interface StatCard {
  icon: string
  value: number | string
  label: string
  loading?: boolean
}