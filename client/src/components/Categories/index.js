import React, { useState } from "react";
import "../Form/form.css";

function Category() {

  const [category, setCategory] = React.useState('');

  const handleCategoryChange = (category) => {
     setCategory(category);
     console.log(category);
 }

  return (
    <select name="category" value={category} onChange={event => handleCategoryChange(event.target.value)}>
      <option value=""> Categories </option>
      <option value="American"> American </option>
      <option value="Breakfast"> Breakfast </option>
      <option value="Sandwiches"> Sandwiches </option>
      <option value="Italian"> Italian </option>
      <option value="Cafes"> Cafes </option>
      <option value="Coffee"> Coffee </option>
      <option value="Fast Food"> Fast Food </option>
      <option value="Seafood"> Seafood </option>
      <option value="Steakhouses"> Steakhouses </option>
      <option value="Salad"> Salad </option>
      <option value="Cocktail Bars"> Cocktail Bars </option>
      <option value="Pizza"> Pizza </option>
      <option value="Burgers"> Burgers </option>
      <option value="Delis"> Delis </option>
      <option value="Mexican"> Mexican </option>
      <option value="Wine Bars"> Wine Bars </option>
      <option value="French"> French </option>
      <option value="Mediterranean"> Mediterranean </option>
      <option value="Desserts"> Desserts </option>
      <option value="Sushi"> Sushi </option>
      <option value="Chinese"> Chinese </option>
      <option value="Juice Bars"> Juice Bars </option>
      <option value="Lounges"> Lounges </option>
      <option value="Vegetarian"> Vegetarian </option>
      <option value="Bakeries"> Bakeries </option>
      <option value="Japanese"> Japanese </option>
      <option value="Asian Fusion"> Asian Fusion </option>
      <option value="Barbeque"> Barbeque </option>
      <option value="Sports Bars"> Sports Bars </option>
      <option value="Hot Dogs"> Hot Dogs </option>
      <option value="Specialty Food"> Specialty Food </option>
      <option value="Donuts"> Donuts </option>
      <option value="Thai"> Thai </option>
      <option value="Tours"> Tours </option>
      <option value="Bagels"> Bagels </option>
      <option value="Chicken Shop"> Chicken Shop </option>
      <option value="Food Court"> Food Court </option>
      <option value="Gastropubs"> Gastropubs </option>
      <option value="Gluten-Free"> Gluten-Free </option>
      <option value="Grocery"> Grocery </option>
      <option value="Indian"> Indian </option>
      <option value="Pop-Up Restaurants"> Pop-Up Restaurants </option>
      <option value="Tapas/Small Plates"> Tapas/Small Plates </option>
      <option value="Vegan"> Vegan </option>
      <option value="Wraps"> Wraps </option>
      <option value="Bowling"> Bowling </option>
      <option value="Buffets"> 	Buffets </option>
      <option value="Cafeteria"> 	Cafeteria </option>
      <option value="Cantonese"> Cantonese </option>
      <option value="Chicken Wings"> 	Chicken Wings </option>
      <option value="Coffee Roasteries"> Coffee Roasteries </option>
      <option value="Dim Sum"> Dim Sum </option>
      <option value="Dinner Theater"> Dinner Theater </option>
      <option value="Falafel"> Falafel </option>
      <option value="Gelato"> Gelato </option>
      <option value="Ice Cream"> Ice Cream </option>
      <option value="Irish Pub"> Irish Pub </option>
      <option value="Middle Eastern"> Middle Eastern </option>
      <option value="Soup"> Soup </option>
      <option value="Southern"> Southern </option>
      <option value="Tacos"> Tacos </option>
      <option value="Vietnamese"> Vietnamese </option>
    </select>
 

  );
}


export default Category;

