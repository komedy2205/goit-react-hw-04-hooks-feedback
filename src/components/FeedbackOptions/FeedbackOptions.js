import React from "react";
import {Button} from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, goodIncrement, neutralIncrement, badIncrement }) => {
    return (
        <>
                <div>
                    <Button
                        type="button"
                        onClick={() => goodIncrement()}
                    >
                        {'good'}
                    </Button>
                </div>
                <div>
                    <Button
                        type="button"
                        onClick={() => neutralIncrement()}
                    >
                        {'neutral'}
                    </Button>
                </div>
                <div>
                    <Button
                        type="button"
                        onClick={() => badIncrement()}
                    >
                        {'bad'}
                    </Button>
                </div>
            
        </>
    );
};

export default FeedbackOptions;