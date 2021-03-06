import React from 'react';
import SearchForm from './SearchForm';
import NavigationButtons from './NavigationButtons';
import CategoryButtons from './CategoryButtons';
require('./assets/styles/styles.scss');

const presenter = ({
    getDefault,
    selectedCategory,
    changeCategory,
    showDefault,
    prevDefault,
    nextDefault,
    submitForm,
    offset=0,
    query="",
    count,
    next,
    prev
}) => {
    return(
        <div className="header-wrapper">
            <div className="header">
                <div className="logo">
                    <img src="logo.svg" alt="Logo"/>
                </div>
                <CategoryButtons
                    getDefault={getDefault}
                    changeCategory={changeCategory}
                    offset={offset}
                    selected={selectedCategory}
                />
                <SearchForm
                    category={selectedCategory}
                    onSubmit={submitForm}
                />
            </div>
            <NavigationButtons
                category={selectedCategory}
                showDefault={showDefault}
                prevDefault={prevDefault}
                nextDefault={nextDefault}
                offset={offset}
                query={query}
                count={count}
                prev={prev}
                next={next}
            />
        </div>
    )
};

export default presenter