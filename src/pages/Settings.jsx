import React, { useEffect, useState } from "react";

function Settings() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedQuestionCount, setSelectedQuestionCount] = useState(0)
  const selectedQuestionCountOption = []

  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch("https://opentdb.com/api_category.php");
      try {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();

        setCategories(data.trivia_categories);
      } catch (e) {
        console.error(e);
      }
    }

    fetchCategories();
  }, []);

  const categoriesOptionElements = categories.map((category) => {
    return (
      <option
        key={category.id}
        value={category.name}
        onClick={() => setSelectedCategory(category.id)}
      >
        {category.name}
      </option>
    );
  });


  for(let i = 5; i <= 50; i++) {
    selectedQuestionCountOption.push(
      <option
        value={i}
        onClick={() => setSelectedQuestionCount(i)}
      >
        {i}
      </option>
    ) 
  }
  

  console.log(selectedCategory, selectedQuestionCount)
  return (
    <div className="intro-container">
      <h1 className="intro-title">Set the category and number of questions you want to answer:</h1>
      <h6 className="intro-description">Category type:</h6>
      <select>{categoriesOptionElements}</select>

      <h6 className="intro-description">Number of questions:</h6>
      <select>{selectedQuestionCountOption}</select>
    </div>
  );
}

export default Settings;
