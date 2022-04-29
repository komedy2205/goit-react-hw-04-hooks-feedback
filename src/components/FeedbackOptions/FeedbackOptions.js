import React from "react";
import {Button} from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            {options.map(type => (
                <div>
                    <Button
                        key={type.toString()}
                        type="button"
                        onClick={() => onLeaveFeedback(type)}
                    >
                        {type}
                    </Button>
                </div>
            ))}
        </>
    );
};

export default FeedbackOptions;