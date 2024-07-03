import * as React from 'react'
import Footer from 'src/components/Footer/Footer'
import RegisterHead from 'src/components/RegisterHead/RegisterHead'

interface Props {
  children?: React.ReactNode
}
export default function RegisterLayout({ children }: Props) {
  return (
    <div>
      <RegisterHead />
      {children}
      <Footer />
    </div>
  )
}
