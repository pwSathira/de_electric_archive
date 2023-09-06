import React from 'react';
import './Pages.css'; // Assuming the CSS is in this file

const StyledParagraph = ({ text, underlineWords, italicWords }) => {
    // Split the text into words
    const words = text.split(' ');

    return (
        <p>
            {words.map((word, index) => {
                // Check if the word should be underlined or italicized
                const shouldUnderline = underlineWords.includes(word);
                const shouldItalic = italicWords.includes(word);

                // Apply styles accordingly
                if (shouldUnderline && shouldItalic) {
                    return <span key={index} className="underline italic">{word} </span>;
                } else if (shouldUnderline) {
                    return <span key={index} className="underline">{word} </span>;
                } else if (shouldItalic) {
                    return <span key={index} className="italic">{word} </span>;
                } else {
                    return <span key={index}>{word} </span>;
                }
            })}
        </p>
    );
};

export default StyledParagraph;
