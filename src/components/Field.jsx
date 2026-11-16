import './Field.css'

export default function Field({ label, action, ...inputProps }) {
  return (
    <label className="field">
      {label}
      <div className="field-box">
        <input {...inputProps} />
        {action}
      </div>
    </label>
  )
}
