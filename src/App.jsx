import { useState } from 'react'
import SidePanel from './components/SidePanel'
import ModeSwitch from './components/ModeSwitch'
import AuthForm from './components/AuthForm'
import { content } from './components/content'
import './App.css'

export default function App() {
  const [mode, setMode] = useState('login')

  return (
    <main className="page">
      <SidePanel {...content[mode]} />

      <section className="panel">
        <div className="box">
          <ModeSwitch mode={mode} onChange={setMode} />
          <AuthForm mode={mode} buttonText={content[mode].button} />
        </div>
      </section>
    </main>
  )
}
