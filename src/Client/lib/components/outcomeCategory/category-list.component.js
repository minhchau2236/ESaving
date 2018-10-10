import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CategoryList = ({categories, onDelete}) => {
  const categoriesRow = (category, index) => {
    return <tr key={index}>
      <td><Link to={`/category/${category.id}`}>{category.name}</Link></td>
      <td><input type="button" style={{width: '100px'}} value="Delete" onClick={ () => onDelete(category.id)}></input></td>      
    </tr>;
  };
  return (
    <div>
      <table>
        <thead></thead>
        <tbody>
          {categories.map(categoriesRow)}
        </tbody>
      </table>
   
      <div>
        {/* <input type="text" onChange={this.onTitleChange} value={this.state.category.title}></input> */}
      </div>
    </div>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default CategoryList;