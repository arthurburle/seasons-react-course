import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.messege}
            </div>
        </div>
    );
};

Spinner.defaultProps = {
    messege: 'Loading...'
};

export default Spinner;