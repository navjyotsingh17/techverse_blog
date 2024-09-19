"use client"

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const OnThisPage = ({ htmlContent }) => {
    const [headings, setHeadings] = useState([]);

    useEffect(() => {
        const getHeadings = (html) => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            const headings = [];
            tempDiv.querySelectorAll('h2').forEach(heading => {
                const textContent = heading.textContent || heading.innerText;
                headings.push({ id: heading.id, text: textContent });
            });
            return headings;
        };

        setHeadings(getHeadings(htmlContent));
    }, [htmlContent]);

    return (
        <div className="on-this-page absolute top-24 right-16">
            <div className="headings">
                <span className='text-md font-bold'>On this page</span>
                {headings.map((heading, index) => (
                    <div className='text-sm space-y-1 my-2' key={index} >
                        <a href={`#${heading.id}`}>{heading.text}</a>
                    </div>
                ))}
            </div>
        </div >
    );
};

OnThisPage.propTypes = {
    htmlContent: PropTypes.string.isRequired,
};

export default OnThisPage;