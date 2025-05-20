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
  minLength: 3,
  maxLength: 30
}

export default {
  vendorCode,
  vendorName,
  vendorBusinessName,
  vendorAddress,
  vendorCity,
  vendorState
} as const
