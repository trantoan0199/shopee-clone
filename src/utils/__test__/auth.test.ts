import { getProfileFromLS } from './../auth'
import { describe, expect, it } from 'vitest'
import {
  getAccessTokenFromLS,
  setRefreshTokenToLS,
  setAccessTokenToLS,
  getRefreshTokenFromLS,
  setProfileToLS,
  clearLS
} from '../auth'
const access_token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmIyNjljYmI2NTk3MDMzNjYxMGU5YyIsImVtYWlsIjoidHJhbnRydW5ndG9hbkBnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTA3LTAyVDA5OjM5OjA3LjM5MloiLCJpYXQiOjE3MTk5MTMxNDcsImV4cCI6MTcxOTk5OTU0N30.gr7dmmRJKBdyOhmUtVV5LuwZJYjrh8J1O5V9EPvbSPQ'
const refresh_token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmIyNjljYmI2NTk3MDMzNjYxMGU5YyIsImVtYWlsIjoidHJhbnRydW5ndG9hbkBnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTA3LTAyVDA5OjM5OjA3LjM5MloiLCJpYXQiOjE3MTk5MTMxNDcsImV4cCI6MTczMzczNzE0N30.RRVXPu0SW3jEnTw68p9THfjIQyfwx68SOw3x_Jk62n8'
const profile =
  '{"_id":"666b269cbb65970336610e9c","roles":["User"],"email":"trantrungtoan@gmail.com","createdAt":"2024-06-13T17:04:28.784Z","updatedAt":"2024-06-26T15:17:40.378Z","__v":0,"date_of_birth":"1999-01-19T17:00:00.000Z","name":"toan","phone":"0123456789","address":"da nang city","avatar":"a562cfc2-3ade-4897-be77-1dbc75d2e059.png"}'

describe('access_token', () => {
  it('access_token được set vào localStorage', () => {
    setAccessTokenToLS(access_token), expect(getAccessTokenFromLS()).toBe(access_token)
  })
})

describe('refresh_token', () => {
  it('refresh_token được set vào localStorage', () => {
    setRefreshTokenToLS(refresh_token), expect(getRefreshTokenFromLS()).toEqual(refresh_token)
  })
})

describe('profile', () => {
  it('profile được set vào localStorage', () => {
    expect(getProfileFromLS()).toEqual(null)
    setProfileToLS(JSON.parse(profile))
    expect(getProfileFromLS()).toEqual(JSON.parse(profile))
  })
})

describe('clearLS', () => {
  it('Xoá access_token, refresh_token, profile ra khỏi localStorage', () => {
    setAccessTokenToLS(access_token)
    setRefreshTokenToLS(refresh_token)
    setProfileToLS(JSON.parse(profile))
    clearLS()
    expect(getAccessTokenFromLS()).toBe('')
    expect(getRefreshTokenFromLS()).toBe('')
    expect(getProfileFromLS()).toBe(null)
  })
})
