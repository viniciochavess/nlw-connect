import { type ComponentProps, ReactNode } from 'react'

interface PropsIconButton extends ComponentProps<'button'> {}

export function IconButton(props: PropsIconButton) {
  return (
    <button
      className="p-2 h-12 bg-gray-500 text-blue rounded-md  cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
      {...props}
    />
  )
}
