//The teacher's option
import React, { useEffect } from "react"
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../ai.js"


export default function Main() {
    const [ingredients, setIngredients] = React.useState([]);
    const [recipe, setRecipe] = React.useState("")
    const recipeSection = React.useRef(null)
    useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({
                behavior: "smooth"
            })
        }
    }, [recipe])
    
    function addIngredient(formData) {
        const newIngredient = formData.get('ingredient')
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button type="submit">Add ingredient</button>
            </form>
            {ingredients.length > 0 ?
                <IngredientsList 
                    ref={recipeSection}
                    ingredients={ingredients}
                    click={getRecipe} 
                /> 
             : null}

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}

//My option
// import React from "react"
// import ClaudeRecipe from "./ClaudeRecipe";
// import IngredientsList from "./IngredientsList";
// import { getRecipeFromMistral } from "../ai.js"


// export default function Main() {
//     const [ingredients, setIngredients] = React.useState(["all the main spices", "pasta", "ground beef", "tomato paste"]);
//     const [recipeShown, setRecipeShown] = React.useState(false);
//     const [recipe, setRecipe] = React.useState("")
    
    
//     function addIngredient(formData) {
//         const newIngredient = formData.get('ingredient')
//         setIngredients(prevIngredients => [...prevIngredients, newIngredient])
//     }

//     async function toggleRecipeShown() {
//         if (!recipeShown) {
//             setRecipe("")
//             try {
//                 console.log("🔄 Generating recipe from:", ingredients)
//                 const aiRecipe = await getRecipeFromMistral(ingredients)
//                 setRecipe(aiRecipe)
//                 setRecipeShown(true)
//             } catch (err) {
//                 console.error("❌ Error generating recipe:", err)

//                 setRecipeShown(false)
//             }
//         } else {
//             // Если скрываем рецепт
//             setRecipeShown(false)
//             setRecipe("")
//         }
        
//     }
//     const cleanRecipe = recipe
//   .replace(/[#*]/g, "")
//   .replace(/\n{2,}/g, "\n\n");
//     // function toggleRecipeShown() {
//     //     setRecipeShown(prevShown => !prevShown)
//     //     console.log(getRecipeFromMistral(ingredients))
//     // }

//     return (
//         <main>
//             <form action={addIngredient} className="add-ingredient-form">
//                 <input 
//                     type="text"
//                     placeholder="e.g. oregano"
//                     aria-label="Add ingredient"
//                     name="ingredient"
//                 />
//                 <button type="submit">Add ingredient</button>
//             </form>
//             {ingredients.length > 0 ?
//                 <IngredientsList 
//                     ingredients={ingredients}
//                     click={toggleRecipeShown} 
//                 /> 
//              : null}

//             {recipeShown && <ClaudeRecipe cleanRecipe={cleanRecipe} />}
//         </main>
//     )
// }


// export default function Main(){
//     const ingredients = ["Chicken", "Oregano", "Tomatoes"]
//     return (<main>
//         <form className="add-ingredient-form">
//             <input type="text" aria-label="Add ingredient" placeholder="e.g. oregano" />
//             <button>Add ingredient</button>   
//         </form>   
//         <ul>
//             {ingredients.map((ingredient) => {
//                 return <li key={ingredient}>{ingredient}</li>
//             })}
//         </ul>
//     </main>)
// }