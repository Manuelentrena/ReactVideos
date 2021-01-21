import React from 'react';
import '../assets/styles/components/Categories.scss';

const labels = {
  TITLE: 'Mi lista',
}

const Categories = ({children}) => {

  const { TITLE } = labels;

  return (
    <div className="categories">
      <h3 className="categories__title">{TITLE}</h3>
      {children}
    </div> 
  )
};

export default Categories;
