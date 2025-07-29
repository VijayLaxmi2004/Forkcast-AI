const recipes = {
  "Fresh Summer Salad": {
    image: "img/salad1.jpg",
    details: "Ingredients: Corn, cherry tomatoes, red onion, avocado, cilantro, lime juice, black pepper, salt<br><br> Steps: Boil or grill corn,<br><br>then cut off kernels.<br><br>Dice tomatoes, onion, and avocado.<br><br>Toss all ingredients in a bowl.<br><br> Squeeze fresh lime juice, sprinkle salt and pepper, mix gently. <br><br> Chill for 10 minutes and serve.."
  },
  "Quick Veggie Sandwich": {
    image: "img/sanwich2.jpg",
    details: "Ingredients: Bread, cucumber, tomato, onion, mayo.<br><br>Steps: Layer veggies and spread between toasted bread. Serve with ketchup."
  },
  "Creamy Tomato Pasta": {
    image: "img/pasta1.jpg",
    details: "Ingredients: Pasta, tomato puree, garlic, cream.<br><br>Steps: Boil pasta. Cook sauce with garlic & tomato. Add cream. Mix together."
  },
  "Veggie Stir Fry": {
    image: "img/fry1.jpg",
    details: "Ingredients: Broccoli, bell pepper, onion, soy sauce.<br><br>Steps: Stir fry everything on high flame. Add sauce at the end."
  },
  "Classic Lasagna": {
    image: "img/lasa1.jpg",
    details: "Ingredients: Pasta sheets, tomato sauce, cheese.<br><br>Steps: Layer sauce and cheese. Bake 30 min."
  },
  "Stuffed Bell Peppers": {
    image: "img/bell1.jpg",
    details: "Ingredients: Peppers, rice, onion, tomato.<br><br>Steps: Fill peppers with rice mix. Bake 20 min."
  },
  "Spicy Veg Biryani": {
    image: "img/rice1.jpg",
    details: "Ingredients: Rice, veggies, biryani masala.<br><br>Steps: Cook rice and veggies separately. Layer and steam."
  },
  "Baked Mac & Cheese": {
    image: "img/mc1.jpg",
    details: "Ingredients: Macaroni, cheese, butter.<br><br>Steps: Mix boiled pasta and cheese sauce. Bake."
  }
};

document.querySelectorAll(".recipe-card").forEach(card => {
  card.addEventListener("click", () => {
    const title = card.dataset.title;
    const data = recipes[title];

    if (data) {
      document.getElementById("recipeTitle").innerText = title;
      document.getElementById("recipeImage").src = data.image;
      document.getElementById("recipeDetails").innerHTML = data.details;
      document.getElementById("recipeModal").style.display = "flex";
    }
  });
});

document.querySelector(".close").onclick = () => {
  document.getElementById("recipeModal").style.display = "none";
};

window.onclick = (e) => {
  if (e.target == document.getElementById("recipeModal")) {
    document.getElementById("recipeModal").style.display = "none";
  }
};
