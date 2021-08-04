import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Counter = ({ counter, decAC, incAC, randAC }) => {
  return (
    <div className='jumbotron text-center'>
      <h2 className='align-center'>{counter}</h2>
      <button onClick={incAC} className='btn btn-danger btn-large'>
        DEC
      </button>
      <button onClick={decAC} className='btn btn-primary btn-large'>
        INC
      </button>
      <button onClick={randAC} className='btn btn-default btn-dark'>
        rand
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};
/*
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
  /!* const { decAC, incAC, randAC } = bindActionCreators(actions, dispatch);

  return {
    decAC,
    incAC,
    randAC,
  };*!/
};*/
export default connect(mapStateToProps, actions)(Counter);
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
