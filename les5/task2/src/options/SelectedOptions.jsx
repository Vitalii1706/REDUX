import React from 'react';
import { connect } from 'react-redux';
import { selectedOptionsSelector } from './options.selectors';
import { toggleOption } from './options.actions';
import Options from './Options';

const mapState = state => {
  return {
    options: selectedOptionsSelector(state),
  };
};

const mapDispatch = {
  moveOption: toggleOption,
};

export default connect(mapState, mapDispatch)(Options);
