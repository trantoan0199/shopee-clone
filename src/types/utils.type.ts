export interface SuccessResponse<Data> {
  message: string
  data: Data
}

export interface ErrorResponse<Data> {
  message: string
  data?: Data
}

// '-?:' sẽ loại bỏ undefined của key optional
export type NoUndefinedField<T> = {
  [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>> //NonNulllable là util của js dùng để loại bỏ undefined của 1 type
}
