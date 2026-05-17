import React from 'react'

function Recipeitem({ recipe, onRemove }) {
  const { name, indgredients, time } = recipe

  const styles = {
    card: {
      padding: '18px',
      borderRadius: '16px',
      border: '1px solid rgba(148, 163, 184, 0.25)',
      background: 'white',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      minHeight: '170px',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '12px',
    },
    title: {
      margin: 0,
      fontSize: '1.2rem',
      color: '#111827',
    },
    label: {
      margin: 0,
      color: '#4b5563',
      lineHeight: 1.6,
    },
    info: {
      margin: '0 0 8px',
      color: '#374151',
    },
    button: {
      border: 'none',
      borderRadius: '999px',
      background: '#ef4444',
      color: 'white',
      padding: '10px 14px',
      cursor: 'pointer',
      fontWeight: 600,
      transition: 'transform 0.2s ease, opacity 0.2s ease',
    },
  }

  return (
    <article style={styles.card}>
      <div style={styles.header}>
        <h4 style={styles.title}>{name}</h4>
        <button style={styles.button} onClick={onRemove} type="button">
          Remove
        </button>
      </div>
      <p style={styles.info}>
        <strong>Ingredients:</strong> {indgredients}
      </p>
      <p style={styles.info}>
        <strong>Cooking time:</strong> {time} minute{time === '1' || time === 1 ? '' : 's'}
      </p>
      <p style={styles.label}>
        Tip: separate ingredients with commas for easier reading.
      </p>
    </article>
  )
}

export default Recipeitem
