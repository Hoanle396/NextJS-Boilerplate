import { FCC } from '@/types/react'
import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {}

const Button: FCC<Props> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`flex items-center gap-1 rounded-md text-white bg-primary py-3 px-6 xl:px-8 border-2 border-primary font-medium hover:bg-white hover:text-primary hover:font-semibold ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
