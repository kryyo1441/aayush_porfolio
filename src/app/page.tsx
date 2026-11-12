import { Contact } from "@/components/sections/contact"
import { Experience } from "@/components/sections/experience"
import { Intro } from "@/components/sections/intro"
import { Stack } from "@/components/sections/stack"
import { Work } from "@/components/sections/work"

export default function Home() {
  return (
    <>
      <Intro />
      <Work />
      <Experience />
      <Stack />
      <Contact />
    </>
  )
}
