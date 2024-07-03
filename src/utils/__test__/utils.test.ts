import { AxiosError } from 'axios'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import { describe, expect, it } from 'vitest'
import { isAxiosError, isAxiosUnprocessableEntityError } from '../utils'

// describe dùng để mô tả tập hợp các ngữ cảnh hoặc đơn vị cần test: ví dụ function component
describe('isAxiosError', () => {
  // it dùng để ghi chú trường hợp cần  test
  it('isAxiosError return boolean', () => {
    expect(isAxiosError(new Error())).toBe(false)
    expect(isAxiosError(new AxiosError())).toBe(true)
  })
})

describe('isAxiosUnprocessableEntityError', () => {
  it('isAxiosUnprocessableEntityError return boolean', () => {
    expect(isAxiosUnprocessableEntityError(new Error())).toBe(false)
    expect(
      isAxiosUnprocessableEntityError(
        new AxiosError(undefined, undefined, undefined, undefined, {
          status: HttpStatusCode.InternalServerError,
          data: null
        } as any)
      )
    ).toBe(false)
    expect(
      isAxiosUnprocessableEntityError(
        new AxiosError(undefined, undefined, undefined, undefined, {
          status: HttpStatusCode.UnprocessableEntity,
          data: null
        } as any)
      )
    ).toBe(true)
  })
})
