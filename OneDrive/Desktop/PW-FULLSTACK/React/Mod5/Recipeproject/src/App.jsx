import { useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'
import Recipeform from './Component/Recipeform'
import Recipelist from './Component/Recipelist'

function App() {
  const [recipes, setRecipes] = useState([])

  const addrecipe = (recipe) => {
    setRecipes((curr) => [...curr, recipe])
  }

  const removeRecipe = (index) => {
    setRecipes((curr) => curr.filter((_, i) => i !== index))
  }

  return (
    <div className="app-shell">
      <div className="app-card">
        <header className="app-header">
          <div>
            <p className="app-subtitle">Easy cooking, one recipe at a time</p>
            <h1 className="app-title">Recipe App</h1>
          </div>
          <img src={heroImg} alt="Recipe hero" className="app-hero" />
        </header>
        <Recipeform onAdd={addrecipe} />
        <Recipelist recipes={recipes} onRemove={removeRecipe} />
      </div>
    </div>
  )
}

export default App
