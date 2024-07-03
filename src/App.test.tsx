import { describe, expect, test } from 'vitest'
import { screen, waitFor } from '@testing-library/react'
import { renderWithRoute } from './utils/testUtils'
import path from './constants/path'

describe('App', () => {
  test('App render và chuyển page', async () => {
    const { user } = renderWithRoute()
    // waitFor sẽ run callback 1 vài lần
    // cho đến khi hết timeout hoặc expect pass
    // số lần run phụ thuộc vào timeout và interval
    // mặc định: timeout = 1000ms, interval = 50ms

    // verify vào đúng trang chủ
    await waitFor(
      () => {
        expect(document.head.querySelector('title')?.textContent).toBe('Trang chủ | Shopee Clone')
      },
      {
        timeout: 1000
      }
    )

    // verify chuyển sang trang login
    await user.click(screen.getByText(/Đăng nhập/i))
    await waitFor(() => {
      expect(screen.queryByText('Bạn chưa có tài khoản?')).toBeInTheDocument()
      expect(document.querySelector('title')?.textContent).toBe('Đăng nhập | Shopee Clone')
    })

    // Giống như console.log
    // screen.debug(document.body.parentElement, 999999)
  })

  test('Not Found', async () => {
    const badRoute = '/some/bad/route'
    renderWithRoute({ route: badRoute })
    await waitFor(() => {
      expect(screen.getByText(/Page not found/i)).toBeInTheDocument()
    })
  })

  test('Render register page', async () => {
    renderWithRoute({ route: path.register })
    await waitFor(() => {
      expect(screen.getByText(/Bạn đã có tài khoản?/i)).toBeInTheDocument()
    })
  })
})
