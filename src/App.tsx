import { useState } from 'react'
import headshot from '/headshot.jpg'
import './App.css'

function App() {
  return (
    <>
        <div class="container mx-auto px-4">
            <h1 class="text-3xl font-bold underline p-4 text-violet-900/50">
                Ryan Geary
            </h1>

            <div class="flex justify-center">
                <img src={headshot} alt="a pic of me" class="w-3xs rounded-full p-10 " />
            </div>

            <div class="grid grid-cols-2 grid-rows-2 gap-4">
                <a href="/projects" class="btn">Projects</a>
                <a href="/blog" class="btn">Blog</a>
                <a target="_blank" href="https://github.com/theryangeary/" class="btn">Github</a>
                <a target="_blank" href="https://www.linkedin.com/in/theryangeary/" class="btn">LinkedIn</a>
            </div>
        </div>
    </>
  )
}

export default App
