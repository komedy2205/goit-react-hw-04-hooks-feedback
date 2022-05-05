import React from "react";
import {Button} from './FeedbackOptions.styled';

export default function FeedbackOptions ({ options, increment }) {
    return (
        <>
            {options.map(type => (
                <div>
                    <Button
                        key={type.toString()}
                        type="button"
                        onClick={() => increment(type)}
                    >
                        {type}
                    </Button>
                </div>
            ))}
        </>
    );
};