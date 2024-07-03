const path = {
  home: '/',
  login: '/login',
  register: '/register',
  user: '/user',
  profile: '/user/profile',
  historyPurchase: '/user/purchase',
  changePassword: '/user/password',
  logout: '/logout',
  productDetail: ':nameId',
  cart: '/cart'
} as const

export default path
