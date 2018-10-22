import React from 'react';
import './Clicker.css';

const Clicker = ({counter,onPlusClick,onRefreshClick,onMinusClick}) => (
    <div className="clickerContainer">
        <div className="screen">
            <span>{counter}</span>
        </div>
        <div className="controllers">
            <button className="controller plus" onClick={onPlusClick}>
                <span>+</span>
            </button>
            <button className="controller refresh" onClick={onRefreshClick}>
                <i className="fa fa-refresh fa-2x"></i>
            </button>
            <button className="controller minus" onClick={onMinusClick}>
                <span>-</span>
            </button>
            
        </div>
    </div>
);

export default Clicker;