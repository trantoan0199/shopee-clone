import { waitFor } from '@testing-library/react'
import path from 'src/constants/path'
import { access_token } from 'src/msw/auth.msw'
import { setAccessTokenToLS } from 'src/utils/auth'
import { renderWithRoute } from 'src/utils/testUtils'
import { describe, expect, it } from 'vitest'

describe('Profile', () => {
  it('Hiển thị trang profile', async () => {
    setAccessTokenToLS(access_token)
    const { container } = renderWithRoute({ route: path.profile })
    await waitFor(() => {
      expect((container.querySelector('form input[placeholder="Tên"]') as HTMLInputElement).value).toBe('toan')
    })
  })
})
