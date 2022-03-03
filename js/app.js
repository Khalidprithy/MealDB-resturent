const searchMeals = () => {
    const inputValue = document.getElementById('input-text');
    const inputText = inputValue.value;
    const error1 = document.getElementById('error-1');
    console.log(inputText);
    if (inputText == '') {
        error1.classList.remove('hidden');
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayMeal(data.meals))
    }
}

const displayMeal = meals => {

    const resultDiv = document.getElementById('result-div');
    const detailsDiv = document.getElementById('detail-div');
    const error1 = document.getElementById('error-1');
    const error2 = document.getElementById('error-2');
    error1.classList.add('hidden');
    detailsDiv.textContent = '';
    resultDiv.textContent = '';
    if (meals === null) {
        error2.classList.remove('hidden');
    }
    else {
        meals.forEach(meal => {
            console.log(meal);
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="group relative drop-shadow-lg border-2 p-2 rounded-md">
                        <div
                            class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-32 lg:aspect-none">
                            <img src="${meal.strMealThumb}"
                                alt="Front of men&#039;s Basic Tee in black."
                                class="w-full h-40 object-center object-cover lg:w-full lg:h-32">
                        </div>
                        <div class="mt-4 flex justify-center">
                            <div>
                                <h3 class="text-xl text-gray-700">${meal.strMeal}</h3>
                                <p class="mt-1 text-xs text-gray-600 p-2">${meal.strInstructions.slice(0, 100)}</p>
                                <button onclick="loadDetails(${meal.idMeal})"
                                    class="bg-teal-600 hover:bg-teal-800 text-slate-200 rounded-md py-0.5 px-2 text-sm">Read More</button>
                            </div>
                        </div>
                    </div>
            
            `;
            resultDiv.appendChild(div);
            error2.classList.add('hidden');

        })
    }
}

const loadDetails = (mealId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}


const displayMealDetails = meals => {
    console.log(meals);
    const detailsDiv = document.getElementById('detail-div');
    const div = document.createElement('div');
    detailsDiv.textContent = '';
    div.innerHTML = `
        <div class="group relative drop-shadow-lg border-2 p-2 rounded-md mx-auto">
                <div
                    class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-40 lg:w-72 lg:aspect-none">
                    <img src="${meals.strMealThumb}" alt="Meal image"
                        class="w-full h-64 object-center object-cover lg:w-full lg:h-64">
                </div>
                <div class="mt-4 flex justify-center">
                    <div>
                        <h3 class="text-xl text-gray-700">${meals.strMeal}</h3>
                        <h4>${meals.strArea} </h4>
                        <h4>${meals.strCategory} </h4>
                        
                        <p class="mt-1 text-xs text-gray-600 p-2">${meals.strInstructions.slice(0, 1000)}</p>

                        <button onclick="mealDetails()"
                            class="bg-red-600 hover:bg-red-800 text-slate-200 rounded-md py-0.5 px-2 text-sm">YouTube</button>
                    </div>
                </div>
            </div>
        `;
    detailsDiv.appendChild(div);
}

const loadYoutube = () => {

}