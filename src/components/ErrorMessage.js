import React from 'react-dom';

const ErrorMessage = ({ error }) => {
    return (
        <div class="ui negative message">
            <i class="close icon"></i>
            <div class="header">
                {error.message}
            </div>
        </div>
    )
}


export default ErrorMessage;