const btn=document.getElementById('btn');  


btn.addEventListener('click',()=>{
const srcrecipe=document.getElementById("input").value;
const output=document.getElementById("op");
const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${srcrecipe}`;
fetch(url)
.then(res=>res.json())
.then(data=>{
    const recipes=data.meals;
    if(recipes){
        recipes.forEach(recipe=> {
            const recipediv=document.createElement('div');
            const output=document.getElementById("op");
            recipediv.innerHTML=`
        <h3>${recipe.strMeal}</h3>
        <img src=${recipe.strMealThumb} width=100%>
        <p>${recipe. strInstructions}</p>
            `;
            output.appendChild(recipediv);
        });
    }
    else{
       output.innerText="No recipes found";
      
    }
   
})
});