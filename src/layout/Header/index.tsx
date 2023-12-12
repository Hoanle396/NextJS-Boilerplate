/* eslint-disable @next/next/no-img-element */
import { useHeader } from '@/hooks/useHeader'
import { Badge } from 'antd'
import Link from 'next/link'
import { FC } from 'react'
import { PiShoppingCartFill } from 'react-icons/pi'

const Header: FC = () => {
  const { scroll } = useHeader()
  return (
    <header className={`${scroll ? 'fixed' : 'absolute'} w-full z-50 top-0`}>
      <nav id="container_header" className="bg-transparent px-4 lg:px-10 py-4 h-full mt-0">
        <div className="flex justify-between items-center mx-auto max-w-screen">
          <div className="justify-center items-center flex gap-6 ">
            <Link href="/" className="flex items-center gap-3 no-underline">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center font-extrabold text-3xl text-primary whitespace-nowrap">
                LOGO
                <span className="text-foreground-secondary font-extrabold text-3xl">HERE</span>
              </span>
            </Link>
          </div>
          <div className="items-center flex w-auto gap-4">
            <button className="hidden lg:flex rounded-full text-white bg-primary py-2 px-4 xl:px-6 border-2 border-primary hover:bg-white hover:text-primary font-semibold">
              Login
            </button>
            <Badge count={0} showZero size="small" className="text-primary cursor-pointer">
              <PiShoppingCartFill size={32} className="text-primary" />
            </Badge>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
