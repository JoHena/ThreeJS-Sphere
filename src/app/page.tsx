import {  motion  } from 'framer-motion' 
import ComputerCanvas from '@/app/components/Computer/Computer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className='h-screen w-full'>
        <ComputerCanvas />
      </section>
    </main>
  )
}