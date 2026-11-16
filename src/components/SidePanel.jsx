import Scene from './Scene'
import './SidePanel.css'

export default function SidePanel({ tag, title, text }) {
  return (
    <section className="side">
      <Scene />

      <div className="side-text">
        <span className="tag">{tag}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  )
}
