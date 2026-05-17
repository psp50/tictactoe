import React, { useState, useTransition } from 'react'
import { z } from 'zod'

const recipeSchema = z.object({
  name: z.string().min(1, 'Recipe name is required'),
  indgredients: z.string().min(1, 'Add more ingredients'),
  time: z.coerce.number().min(1, 'Cooking time is required'),
})

function Recipeform({ onAdd }) {
  const [name, setName] = useState('')
  const [indgredients, setIndgredients] = useState('')
  const [time, setTime] = useState('')
  const [errors, setErrors] = useState({})
  const [isPending, startTransition] = useTransition()

  const handlesubmit = (e) => {
    e.preventDefault()
    const result = recipeSchema.safeParse({ name, indgredients, time })
    if (!result.success) {
      const fieldError = {}
      result.error.issues.forEach((err) => {
        fieldError[err.path[0]] = err.message
      })
      setErrors(fieldError)
      return
    }

    setErrors({})
    startTransition(() => {
      onAdd({ name, indgredients, time })
      setName('')
      setIndgredients('')
      setTime('')
    })
  }

  const styles = {
    form: {
      display: 'grid',
      gap: '18px',
      background: '#f8fbff',
      padding: '24px',
      borderRadius: '22px',
      border: '1px solid rgba(148, 163, 184, 0.24)',
      boxShadow: '0 18px 40px rgba(15, 23, 42, 0.06)',
    },
    field: {
      width: '100%',
      minHeight: '48px',
      padding: '14px 16px',
      borderRadius: '16px',
      border: '1px solid rgba(148, 163, 184, 0.35)',
      background: 'white',
      color: '#111827',
      fontSize: '1rem',
      outline: 'none',
      boxShadow: 'inset 0 1px 2px rgba(15, 23, 42, 0.04)',
    },
    textarea: {
      minHeight: '120px',
      resize: 'vertical',
      padding: '16px',
      borderRadius: '18px',
      border: '1px solid rgba(148, 163, 184, 0.35)',
      background: 'white',
      fontSize: '1rem',
      color: '#111827',
      outline: 'none',
      boxShadow: 'inset 0 1px 2px rgba(15, 23, 42, 0.06)',
    },
    label: {
      margin: 0,
      color: '#475569',
      fontSize: '0.95rem',
    },
    button: {
      width: 'fit-content',
      padding: '14px 24px',
      borderRadius: '999px',
      border: 'none',
      background: '#4f46e5',
      color: 'white',
      fontWeight: 700,
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'transform 0.2s ease, opacity 0.2s ease',
      alignSelf: 'flex-start',
    },
    buttonDisabled: {
      opacity: 0.65,
      cursor: 'not-allowed',
      transform: 'none',
    },
    helper: {
      margin: 0,
      color: '#64748b',
      fontSize: '0.9rem',
    },
    error: {
      margin: 0,
      color: '#dc2626',
      fontSize: '0.92rem',
    },
  }

  return (
    <form style={styles.form} onSubmit={handlesubmit}>
      <div>
        <p style={styles.label}>Recipe name</p>
        <input
          style={styles.field}
          type="text"
          name="name"
          value={name}
          placeholder="e.g. Chocolate Cake"
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p style={styles.error}>{errors.name}</p>}
      </div>

      <div>
        <p style={styles.label}>Ingredients</p>
        <textarea
          style={styles.textarea}
          name="indgredients"
          value={indgredients}
          placeholder="List ingredients separated by commas"
          onChange={(e) => setIndgredients(e.target.value)}
        />
        <p style={styles.helper}>{indgredients.length} characters</p>
        {errors.indgredients && <p style={styles.error}>{errors.indgredients}</p>}
      </div>

      <div>
        <p style={styles.label}>Cooking time (minutes)</p>
        <input
          style={styles.field}
          type="number"
          name="time"
          value={time}
          placeholder="e.g. 30"
          onChange={(e) => setTime(e.target.value)}
          min="1"
        />
        {errors.time && <p style={styles.error}>{errors.time}</p>}
      </div>

      <button
        type="submit"
        disabled={isPending}
        style={isPending ? { ...styles.button, ...styles.buttonDisabled } : styles.button}
      >
        {isPending ? 'Adding...' : 'Add Recipe'}
      </button>
    </form>
  )
}

export default Recipeform