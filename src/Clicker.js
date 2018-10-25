import React from 'react';
import './Clicker.css';

const Clicker = ({counter,onPlusClick,onRefreshClick,onMinusClick}) => (
    <div className="container">
        <div className="clickerContainer mt-5">
            <div className="screen d-flex">
                <div>{counter}</div>
            </div>
            <div className="controllers">
                <button className="controller plus" onClick={onPlusClick}>
                    <i className="fa fa-plus fa-2x text-white"></i>
                </button>
                <button className="controller refresh" onClick={onRefreshClick}>
                    <i className="fa fa-refresh fa-2x"></i>
                </button>
                <button className="controller minus" onClick={onMinusClick}>
                    <i className="fa fa-minus fa-2x text-white"></i>
                </button>
            </div>
        </div>
    </div>
    
);

export default Clicker;