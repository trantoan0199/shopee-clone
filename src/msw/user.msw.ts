import { http } from 'msw'
import config from 'src/constants/config'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import { access_token_1s } from './auth.msw'

const meRes = {
  message: 'Lấy người dùng thành công',
  data: {
    _id: '666b269cbb65970336610e9c',
    roles: ['User'],
    email: 'trantrungtoan@gmail.com',
    createdAt: '2024-06-13T17:04:28.784Z',
    updatedAt: '2024-06-26T15:17:40.378Z',
    date_of_birth: '1999-01-19T17:00:00.000Z',
    name: 'toan',
    phone: '0123456789',
    address: 'da nang city',
    avatar: 'a562cfc2-3ade-4897-be77-1dbc75d2e059.png'
  }
}

const meRequest = http.get(`${config.baseUrl}me`, (req, res, ctx) => {
  const access_token = req.headers.get('authorization')
  console.log(access_token)
  if (access_token === access_token_1s) {
    return res(
      ctx.status(HttpStatusCode.Unauthorized),
      ctx.json({
        message: 'Lỗi',
        data: {
          message: 'Token hết hạn',
          name: 'EXPIRED_TOKEN'
        }
      })
    )
  }
  return res(ctx.status(HttpStatusCode.Ok), ctx.json(meRes))
})

const userRequests = [meRequest]

export default userRequests
