import React from "react";
import Ccontent from "./Ccontent";
import SubCategory from "./SubCategory.json"; // path to your JSON file

function importImage(imagePath) {
  // Adjust based on how your images are structured
  return require(`../Components/${imagePath}`);
}

function CategorySection({ category }) {
  const categoryCards =SubCategory.filter((item) => item.category === category);

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        {categoryCards.map((item, index) => (
          <div key={index} className="col-md-4 d-flex justify-content-center mb-4">
            <Ccontent
              title={item.title}
              img={importImage(item.img)}
              next="Shop Now"
              Link={item.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export const Cat1 = () => <CategorySection category="Cat1" />;
export const Cat2 = () => <CategorySection category="Cat2" />;
export const Cat3 = () => <CategorySection category="Cat3" />;
export const Cat4 = () => <CategorySection category="Cat4" />;