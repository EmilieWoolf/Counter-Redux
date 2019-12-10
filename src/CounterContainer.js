import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    count: state
});

const CounterContainer = ({ count, dispatch }) => (
    <div>
        <p>{count}</p>
        <button onClick={() => dispatch({type: 'ADD'})}>+</button>
        <button onClick={() => dispatch({type: 'REMOVE'})}>-</button>
        <button onClick={() => dispatch({type: 'ADD_10'})}>+ 10</button>
        <button onClick={() => dispatch({type: 'REMOVE_10'})}>- 10</button>
        <button onClick={() => dispatch({type: 'RESET'})}>Reset</button>
    </div>
);

export default connect (mapStateToProps)(CounterContainer);