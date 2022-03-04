import React from 'react';

const Filter = ({ count, filterText, filter }) => {
  return (
    <div className="filter">
      <span className="filter__count">{count}</span>
      <input
        type="text"
        className="filter__input"
        value={filterText}
        onChange={e => {
          e.preventDefault();
          filter(e.target.value);
        }}
      />
    </div>
  );
};
export default Filter;
