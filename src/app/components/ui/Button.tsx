import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { ButtonHTMLAttributes, FC } from 'react'

export const buttonVariants = cva(
    'active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
    {
      variants: {
        variant: {
          default: 'bg-slate-900 text-white hover:bg-slate-800',
          ghost: 'bg-transparent hover:text-slate-900 hover:bg-slate-200',
        },
        size: {
          default: 'h-10 py-2 px-4',
          sm: 'h-9 px-2',
          lg: 'h-11 px-8',
        },
      },
      defaultVariants: {
        variant: 'default',
        size: 'default',
      },
    }
  )

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants>{
    isLoading?: boolean
}

const Button: FC<ButtonProps> = ({className, children, variant, isLoading, size, ...props}) => {
    // cn helps me to override the styles I already declare, if I wish to do so
  return <button className={cn(buttonVariants({variant, size, className}))} disabled={isLoading} {...props}>
    {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
    {children}   
    {/* children = ce scriem in <button>Hello</button> --> hello e children */}

    {/* What happens if I don't include ...props?

    --ma ajuta sa adaug variabile si functii noi in buton, pe langa alea specificate deja inainte de props
    For example, if you had <Button onClick={handleClick}>Click me</Button> and you didn't include ...props in the Button component definition, the onClick prop would not be passed down to the underlying <button> element, and the click event would not be handled by the component. */}
  </button>
}

export default Button