import { setAccessTokenToLS, setRefreshTokenToLS } from 'src/utils/auth'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import { describe, it, expect, beforeEach } from 'vitest'
import { Http } from '../http'
import { access_token_1s, refresh_token_1000days } from 'src/msw/auth.msw'

describe('http axios', () => {
  let http = new Http().instance
  beforeEach(() => {
    localStorage.clear()
    http = new Http().instance
  })

  it('Call api', async () => {
    // Không nên đụng đến thư mục apis
    // Vì ta test riêng file http thì chỉ nên dùng http thôi
    // vì lỡ như thư mục apis thay đổi gì đó thì không cần thay đổi file test
    const res = await http.get('products')
    expect(res.status).toBe(HttpStatusCode.Ok)
  })

  it('Auth request', async () => {
    // Nên có 1 account test và 1 server test
    await http.post('login', {
      email: 'trantrungtoan@gmail.com',
      password: '123123'
    })
    const res = await http.get('me')
    expect(res.status).toBe(HttpStatusCode.Ok)
  })

  it('Refresh token', async () => {
    setAccessTokenToLS(access_token_1s)
    setRefreshTokenToLS(refresh_token_1000days)
    const httpNew = new Http().instance
    const res = await httpNew.get('me')
    expect(res.status).toBe(HttpStatusCode.Ok)
  })
})
