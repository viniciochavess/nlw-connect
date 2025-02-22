import type { ComponentProps } from 'react'

interface InputRootProps extends ComponentProps<'div'> {
  error?: boolean
}
export function InputRoot({ error = false, ...props }: InputRootProps) {
  return (
    <div
      data-error={error}
      className="group flex items-center bg-gray-800 h-12  border-gray-600 rounded-xl px-4 gap-2 focus-within:border-gray-100 data-[error=true]:border-danger data-[error=true]:border-1"
      {...props}
    />
  )
}

interface InputIconProps extends ComponentProps<'span'> {}
export function InputIcon(props: InputIconProps) {
  return (
    <span
      className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger "
      {...props}
    />
  )
}

interface InputFieldsProps extends ComponentProps<'input'> {}
export function InputField(props: InputFieldsProps) {
  return <input className="flex-1 outline-0" {...props} />
}
