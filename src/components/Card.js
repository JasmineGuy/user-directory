import React from 'react'
import ContentLoader from 'react-content-loader'

const Card = ({id, selected, length, pending, selectedIndex}) => {
    console.log('selected:', selected)
    return (
        <div className="card">
            {
                pending || !selected ?
                <ContentLoader />
                :
            <>
                <div className="top">
                    <h1>{selectedIndex + 1}/{length}</h1>
                </div>
                <div className="title">
                    <p>{selected.name.first} {selected.name.last}</p>
                </div>
                <div className="main">
                    <h3>From: {selected.city}, {selected.country} </h3>
                    <h3>Job Title: {selected.title} </h3>
                    <h3>Employer: {selected.employer} </h3>
                </div>
                <div className="bottom">
                    <div>Favorite Movies:
                            <p> 1. {selected.favoriteMovies[0]}</p>
                            <p> 2. {selected.favoriteMovies[1]}</p>
                            <p> 3. {selected.favoriteMovies[2]}</p>
                    </div>
                </div>
            </>
            }
        </div>
    )
}
export default Card