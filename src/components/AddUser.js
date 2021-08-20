import React from 'react'

const AddUser = ({addUser}) => {

    return (
        <form className="add-user-form">
            <div className="personal-info">
                <p>Personal Info</p>
                <input type="text" placeholder="First Name*"/>
                <input type="text" placeholder="Last Name*"/>
                <input type="text" placeholder="City*"/>
                <input type="text" placeholder="Country*"/>
            </div>
            <div className="employment-info">
                <p>Employment Info</p>
                <input type="text" placeholder="Job Title*"/>
                <input type="text" placeholder="Employer*"/>
            </div>
            <div className="favorite-movies">
                 <p>Favorite Movies</p>
                <input type="text" placeholder="Favorite Movie*"/>
                <input type="text" placeholder="Favorite Movie*"/>
                <input type="text" placeholder="Favorite Movie*"/>
            </div>
            <button onClick={(e) => {
                addUser(e.target.value)}}>Submit</button>
        </form>
    )
}

export default AddUser;