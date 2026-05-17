import React from 'react'
import Recipeitem from './Recipeitem'

const styles = {
  container: {
    padding: '24px',
    maxWidth: '900px',
    margin: '0 auto',
    background: '#fafafa',
    borderRadius: '18px',
    boxShadow: '0 18px 40px rgba(15, 23, 42, 0.08)',
  },
  title: {
    margin: '0 0 18px',
    fontSize: '1.65rem',
    color: '#1f2937',
    textAlign: 'center',
  },
  empty: {
    margin: 0,
    color: '#4b5563',
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gap: '16px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  },
}

function Recipelist({ recipes, onRemove }) {
  return (
    <section style={styles.container}>
      <h3 style={styles.title}>Recipes</h3>
      {recipes.length === 0 ? (
        <p style={styles.empty}>No recipes added yet. Start by adding a recipe above.</p>
      ) : (
        <div style={styles.grid}>
          {recipes.map((recipe, index) => (
            <Recipeitem key={index} recipe={recipe} onRemove={() => onRemove(index)} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Recipelist
