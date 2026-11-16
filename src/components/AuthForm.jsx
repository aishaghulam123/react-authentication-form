import { useState } from 'react'
import Field from './Field'
import './AuthForm.css'

export default function AuthForm({ mode, buttonText }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const isSignup = mode === 'signup'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(mode, form)
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div className={`name-row ${isSignup ? 'open' : ''}`}>
        <div>
          <Field
            label="Full name"
            name="name"
            value={form.name}
            onChange={handleChange}
            disabled={!isSignup}
            required={isSignup}
            placeholder="Batch 18"
          />
        </div>
      </div>

      <Field
        label="Email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
        placeholder="you@example.com"
      />

      <Field
        label="Password"
        type={showPassword ? 'text' : 'password'}
        name="password"
        value={form.password}
        onChange={handleChange}
        required
        minLength={6}
        placeholder="••••••••"
        action={
          <button type="button" className="toggle" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        }
      />

      {!isSignup && (
        <a className="forgot" href="/forgot-password">
          Forgot password?
        </a>
      )}

      <button className="submit" type="submit">
        {buttonText} <span>→</span>
      </button>
    </form>
  )
}
