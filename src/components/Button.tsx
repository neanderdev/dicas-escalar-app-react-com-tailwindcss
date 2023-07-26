import { CheckCircle } from 'lucide-react';
import { ComponentProps } from 'react';

export type ButtonProps = ComponentProps<'button'> & {
    success?: boolean;
}

export function Button({ success = false, ...props }: ButtonProps) {
    return (
        <button
            data-success={success}
            className='bg-zinc-50 flex justify-center items-center text-zinc-900 h-10 text-sm font-medium px-4 rounded hover:bg-zinc-200 data-[success=true]:bg-emerald-500 data-[success=true]:hover:bg-emerald-600'
            {...props}
        >
            {success ? <CheckCircle className='w-4 h-4' /> : props.children}
        </button>
    )
}
