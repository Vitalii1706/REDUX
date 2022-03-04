import React from 'react';
import { connect } from 'react-redux';
import { filterList } from './users.actions';
import { userListSelector, filterTextSelector, filterListSelector } from './users.selectors';
import User from './User.jsx';
import Filter from './Filter';

const UsersList = ({ users, filterText, filter }) => {
  return (
    <div>
      <Filter count={users.length} filterText={filterText} filter={filter} />
      <ul className="users">
        {users.map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: filterListSelector(state),
    filterText: filterTextSelector(state),
  };
};

const mapDispatch = {
  filter: filterList,
};

const connector = connect(mapStateToProps, mapDispatch);

export default connector(UsersList);
