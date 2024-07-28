import React from 'react';
import "./HomePage.scss";
import { useMealContext } from '../../context/mealContext';
import CategoryList from "../../components/Category/CategoryList";
import MealList from "../../components/Meal/MealList";

const HomePage = () => {
  const {categories, meals} = useMealContext();

  return (
    <main className='main-content'>
      { <MealList meals = {meals} /> }
      { <CategoryList categories = {categories} /> }
    </main>
  )
}

export default HomePage;