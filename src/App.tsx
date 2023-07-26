import { Button } from './components/Button';

export function App() {
  return (
    <div className='flex h-screen items-center justify-center bg-zinc-950 text-zinc-50 flex-col gap-6'>
      <Button success size='default' className='w-20'>Sign in</Button>

      <Button size='sm'>Sign in</Button>

      <Button size='xs'>Sign in</Button>

      <Button>Sign in</Button>

      <Button>Sign in</Button>
    </div>
  )
}
