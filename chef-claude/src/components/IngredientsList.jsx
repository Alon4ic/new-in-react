import React from 'react'

export default function IngredientsList(props) {
  const ingredientsListItems = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))
  return (
    <section>
                <h2>Ingradients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                {props.ingredients.length >= 4 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients</p>
                        <button onClick={props.click}>Get a recipe</button>
                    </div>
                </div>}
            </section>
  )
}
