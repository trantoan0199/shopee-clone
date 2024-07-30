import * as React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from 'src/components/Footer/Footer'
import RegisterHead from 'src/components/RegisterHead/RegisterHead'

interface Props {
  children?: React.ReactNode
}
function RegisterLayoutInner({ children }: Props) {
  return (
    <div>
      <RegisterHead />
      {children}
      <Outlet />
      <Footer />
    </div>
  )
}

const RegisterLayout = React.memo(RegisterLayoutInner)

export default RegisterLayout
