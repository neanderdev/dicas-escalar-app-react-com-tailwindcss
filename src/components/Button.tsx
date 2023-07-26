import { CheckCircle } from 'lucide-react';
import { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const button = tv({
    base: 'bg-zinc-50 flex justify-center items-center text-zinc-900 text-sm font-medium rounded hover:bg-zinc-200',
    variants: {
        size: {
            default: 'h-10 px-4',
            sm: 'h-8 px-3',
            xs: 'h-6 px-2 text-xs'
        },
        success: {
            true: 'bg-emerald-500 hover:bg-emerald-600',
        }
    },
    defaultVariants: {
        size: 'default',
        success: false,
    },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ success, size, className, ...props }: ButtonProps) {
    return (
        <button
            className={button({ size, success, className })}
            {...props}
        >
            {success ? <CheckCircle className='w-4 h-4' /> : props.children}
        </button>
    )
}
