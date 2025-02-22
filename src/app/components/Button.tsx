import { type ComponentProps, ReactNode } from 'react'

interface PropsButton extends ComponentProps<'button'> {}

export function Button(props: PropsButton) {
  return (
    <button
      className=" flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
      {...props}
    />
  )
}
