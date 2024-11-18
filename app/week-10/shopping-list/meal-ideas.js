'use client';
import { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.meals; // The API returns a list of meals in the 'meals' array
      } catch (error) {
        console.error('Error fetching meal ideas:', error);
        return [];
    };
};

const MealIdeas = ({ingredient}) => {
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals || []);
    };

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    return(
        <div className = "pl-2 mt-5">
            <p className="text-lg font-bold text-white mb-4">Meal Ideas with {ingredient}</p>
            <ul>
                {meals.length > 0 ? (
                    meals.map((meal) => (
                        <li key={meal.idMeal}
                        className='bg-gray-800 my-2 px-1 py-2 font-semibold'>
                            {meal.strMeal}
                        </li>
                    ))
                ) : (
                    <li>Sorry, no meals were found!</li>
                )}
            </ul>
        </div>
    );
};

export default MealIdeas;

