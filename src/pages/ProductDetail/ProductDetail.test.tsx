import { renderWithRoute } from 'src/utils/testUtils'
import { describe, expect, test } from 'vitest'

describe('Product Detail', () => {
  test('Render UI ProductDetail', async () => {
    renderWithRoute({ route: '/Điện-Thoại-Vsmart-Active-3-6GB64GB--Hàng-Chính-Hãng-i-60afb2c76ef5b902180aacba' })
    expect(document.body).toMatchSnapshot()
  })
})
