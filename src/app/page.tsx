import { createClient } from '../utils/supabase/server'
import { cookies } from 'next/headers'
import Contact from '@/components/main/Contact'
import Experience from '@/components/main/Experience'
import Hero from '@/components/main/Hero'
import Projects from '@/components/main/Projects'
import Skills from '@/components/main/Skills'
import Tracker from "@/components/main/Tracker";

export default async function Home() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  return (
    <main className='h-full w-full'>
      <div className="flex flex-col gap-20">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        {/* <Contact /> */}
      </div>
    </main>
  )
}
