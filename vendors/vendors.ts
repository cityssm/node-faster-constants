export const vendorCode = {
  maxLength: 25
}

export const vendorName = {
  maxLength: 40
}

export const vendorBusinessName = {
  maxLength: 40
}

export const vendorAddress = {
  maxLength: 40
}

export const vendorCity = {
  maxLength: 40
}

export const vendorState = {
  maxLength: 30,
  minLength: 3
}

export const vendorCategories = [
  'Asset',
  'Fuel',
  'Inventory',
  'Sublet'
] as const

export default {
  vendorAddress,
  vendorBusinessName,
  vendorCategories,
  vendorCity,
  vendorCode,
  vendorName,
  vendorState
} as const
