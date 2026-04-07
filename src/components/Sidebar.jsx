import React from 'react';
import './Sidebar.css';

const Sidebar = ({ categories }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-block">
        <h3 className="sidebar-title">Категорії</h3>
        <ul className="sidebar-list">
          {categories.map((category, index) => (
            <li key={index}><a href="#">{category}</a></li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
