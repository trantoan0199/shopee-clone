import { http } from 'msw'
import config from 'src/constants/config'
import httpStatusCode from 'src/constants/httpStatusCode.enum'

const loginRes = {
  access_token:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmIyNjljYmI2NTk3MDMzNjYxMGU5YyIsImVtYWlsIjoidHJhbnRydW5ndG9hbkBnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTA3LTAzVDEzOjU3OjEyLjcxNVoiLCJpYXQiOjE3MjAwMTUwMzIsImV4cCI6MTcyMDExNTAzMX0.UnWGY_pE5bkvTxcllMGDuTK7Be33_K7oDe2QwdZeUnM',
  expires: 99999,
  refresh_token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmIyNjljYmI2NTk3MDMzNjYxMGU5YyIsImVtYWlsIjoidHJhbnRydW5ndG9hbkBnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTA3LTAzVDEzOjU3OjEyLjcxNVoiLCJpYXQiOjE3MjAwMTUwMzIsImV4cCI6MTcyODY1NTAzMn0.7d7CKGVXqyZLkKp4wFMDaANT12UrvM53FJJTz2I8iBs',
  expires_refresh_token: 8640000,
  user: {
    _id: '666b269cbb65970336610e9c',
    roles: ['User'],
    email: 'trantrungtoan@gmail.com',
    createdAt: '2024-06-13T17:04:28.784Z',
    updatedAt: '2024-06-26T15:17:40.378Z',
    __v: 0,
    date_of_birth: '1999-01-19T17:00:00.000Z',
    name: 'toan',
    phone: '0123456789',
    address: 'da nang city',
    avatar: 'a562cfc2-3ade-4897-be77-1dbc75d2e059.png'
  }
}

const refreshTokenRes = {
  message: 'Refresh Token thành công',
  data: {
    access_token:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmY5MzVlNWZkYzVmMDM3ZTZmNjhkMyIsImVtYWlsIjoiZDNAZ21haWwuY29tIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyMi0xMi0xOVQwNzozMTowMC4yNTJaIiwiaWF0IjoxNjcxNDM1MDYwLCJleHAiOjE2NzIwMzk4NjB9.vTHglpuxad5h_CPpIaDCUpW0xJPYarJzLFeeul0W61E'
  }
}

export const access_token_1s =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmIyNjljYmI2NTk3MDMzNjYxMGU5YyIsImVtYWlsIjoidHJhbnRydW5ndG9hbkBnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTA3LTAyVDEwOjUxOjUyLjg2M1oiLCJpYXQiOjE3MTk5MTc1MTIsImV4cCI6MTcxOTkxNzUxM30.b-h1po4J5371qdX5oigRTBdPcYR7oLWKhE-xlLakmSs'
export const refresh_token_1000days =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmIyNjljYmI2NTk3MDMzNjYxMGU5YyIsImVtYWlsIjoidHJhbnRydW5ndG9hbkBnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTA3LTAyVDEwOjUxOjUyLjg2M1oiLCJpYXQiOjE3MTk5MTc1MTIsImV4cCI6MTcyODU1NzUxMn0.JTFdfHp-PbPfj_nZVwVaX8Vu247KI0AiTG-zxkpm1Bg'
export const access_token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmIyNjljYmI2NTk3MDMzNjYxMGU5YyIsImVtYWlsIjoidHJhbnRydW5ndG9hbkBnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTA3LTAzVDE2OjI2OjU2LjEwN1oiLCJpYXQiOjE3MjAwMjQwMTYsImV4cCI6MTcyMDEyNDAxNX0.Bc585pfSw_BUdtP8YvCmPQD5JPAc4jIbdkyRFXarnyw'

const loginRequest = http.post(`${config.baseUrl}login`, (req, res, ctx) => {
  return res(ctx.status(httpStatusCode.Ok), ctx.json(loginRes))
})

const refreshToken = http.post(`${config.baseUrl}refresh-access-token`, (req, res, ctx) => {
  return res(ctx.status(httpStatusCode.Ok), ctx.json(refreshTokenRes))
})

const authRequests = [loginRequest, refreshToken]

export default authRequests
