import './ModeSwitch.css'

export default function ModeSwitch({ mode, onChange }) {
  return (
    <div className="switch" data-mode={mode}>
      <span className="pill" />
      <button type="button" onClick={() => onChange('login')}>Login</button>
      <button type="button" onClick={() => onChange('signup')}>Sign up</button>
    </div>
  )
}
