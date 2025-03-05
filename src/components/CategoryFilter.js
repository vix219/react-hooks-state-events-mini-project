import React from "react";
import { CATEGORIES } from "../data";

function CategoryFilter({ setCategoryFilter, categoryFilter }) {
  return (
    <div className="categories">
      <h5>Category Filters</h5>
      {CATEGORIES.map((category) => (
        <button 
          key={category}
          onClick={() => setCategoryFilter(category)}
          className={category === categoryFilter ? "selected" : null}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;






// onClick={handleClick}
//   const [catFilter, setCatFilter] = useState('all')

//   const filteredCategory = catFilter === 'all' ? (
//     CATEGORIES 
//   ) : ( CATEGORIES.filter((CATEGORIES) => CATEGORIES.TASK === catFilter) 
// )
//  const filter = filteredCategory.map((CATEGORIES) => <TaskList key={TASKS} CATEGORIES={CATEGORIES}/>)
//   function handleClick(event) {
//     console.log(event)
//   }
// //    const filterCategory = CategoryFilter === 'all'
// // CATEGORIES.filter((CATEGORIES) => filterCategory.filter)