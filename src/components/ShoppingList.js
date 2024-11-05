import React from 'react';
import Filter from './Filter';
import Item from './Item';

function ShoppingList({ category, onCategoryChange }) {
  const items = [
    { id: 1, name: 'Apples', category: 'Fruit' },
    { id: 2, name: 'Bananas', category: 'Fruit' },
    { id: 3, name: 'Carrots', category: 'Vegetable' },
    { id: 4, name: 'Lettuce', category: 'Vegetable' },
    { id: 5, name: 'Milk', category: 'Dairy' },
    // Add more items as needed
  ];

  const filteredItems = category === 'All'
    ? items
    : items.filter(item => item.category === category);

  return (
    <section>
      <Filter currentCategory={category} onCategoryChange={onCategoryChange} />
      <ul>
        {filteredItems.map(item => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </section>
  );
}

export default ShoppingList;
