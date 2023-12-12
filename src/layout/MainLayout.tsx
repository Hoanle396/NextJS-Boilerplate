import { FCC } from '@/types/react'
import Footer from './Footer'
import Header from './Header'

const MainLayout: FCC = ({ children }) => {
  return (
    <main className="p-0 m-0">
      <Header />
      <div className="w-full h-full pt-20 flex justify-center">{children}</div>
      <Footer />
    </main>
  )
}

export default MainLayout
