import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ContextObj } from "../Context";
import Spinner from "../components/Spinner";

function Settings() {
  const [categories, setCategories] = useState([]);
  const { setCount, setCategoryId } = useContext(ContextObj);

  const selectedQuestionCountOption = [];
  const navigate = useNavigate();

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
        onClick={() => {
          setCategoryId(category.id);
        }}
      >
        {category.name}
      </option>
    );
  });

  for (let i = 5; i <= 50; i++) {
    selectedQuestionCountOption.push(
      <option
        key={i}
        value={i}
        onClick={() => {
          setCount(i);
        }}
      >
        {i}
      </option>
    );
  }

  if (categories.length === 0) {
    return <Spinner />;
  }

  return (
    <div className="settings-container">
      <h1 className="settings-title">
        Set the category and number of questions you want to answer:
      </h1>

      <div className="settings-select-section">
        <h6 className="settings-subtitle">Category type:</h6>
        <select>{categoriesOptionElements}</select>
      </div>
      <div className="settings-select-section">
        <h6 className="settings-subtitle">Number of questions:</h6>
        <select>{selectedQuestionCountOption}</select>
      </div>

      <button
        className="custom-quiz"
        onClick={() => navigate("/custom-quiz")}
      >
        Custom Quiz
      </button>
    </div>
  );
}

export default Settings;
