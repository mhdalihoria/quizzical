import React, { useEffect, useState } from "react";

function Settings() {
  const [categories, setCategories] = useState([]);
  const [selectedSettings, setSelectedSettings] = useState({categoryId: 9, questionCount: 5})
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
        onClick={() => setSelectedSettings(prevSelectedSettings => ({...prevSelectedSettings, categoryId: category.id}))}
      >
        {category.name}
      </option>
    );
  });


  for(let i = 5; i <= 50; i++) {
    selectedQuestionCountOption.push(
      <option
        value={i}
        onClick={() => setSelectedSettings(prevSelectedSettings => ({...prevSelectedSettings, questionCount: i}))}
      >
        {i}
      </option>
    ) 
  }
  

  console.log(selectedSettings)
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
