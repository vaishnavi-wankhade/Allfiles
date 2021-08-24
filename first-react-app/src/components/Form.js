import React, { useState } from 'react';

export default function Form() {

    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        mobileNumber: "",
        city: "",
        gender: "",
        isActive: false,
        address: ""
    })

    const handleInputChange = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]:
                e.target.type === "checkbox" ? e.target.checked : e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserDetails({
            ...userDetails,
            [e.target.name]:
                e.target.type === "checkbox" ? e.target.checked : e.target.value
        })

    }




    return (
        <div className="box">
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={userDetails.firstName}
                    onChange={handleInputChange}
                /> <br />

                <label htmlFor="">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={userDetails.lastName}
                    onChange={handleInputChange}
                /> <br />


                <label htmlFor="">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={userDetails.email}
                    onChange={handleInputChange}
                /> <br />


                <label htmlFor="">Password</label>
                <input
                    type="password"
                    name="password"
                    id="passwword"
                    value={userDetails.password}
                    onChange={handleInputChange}
                /> <br />


                <label htmlFor="">Moblile Number</label>
                <input
                    type="number"
                    name="mobileNumber"
                    id="mobileNumber"
                    value={userDetails.mobileNumber}
                    onChange={handleInputChange}
                /> <br />


                <label htmlFor="">Select City</label>
                <select
                    name="city"
                    id="city"
                    value={userDetails.city}
                    onChange={handleInputChange}>

                    <option value="pune">Pune</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="nashik">Nashik</option>
                    <option value="hydrabad">Hydrabad</option>
                    <option value="banglore">Banglore</option>
                </select>

                <br />


                <label htmlFor="">Gender</label>
                <input
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    checked={userDetails.gender === "male"}
                    onChange={handleInputChange}
                />
                <label htmlFor="">Male</label>

                <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    checked={userDetails.gender === "female"}
                    onChange={handleInputChange}
                />
                <label htmlFor="">Female</label><br />

                <label htmlFor="">Are you Active</label>
                <input
                    type="checkbox"
                    name="isActive"
                    id="status"
                    checked={userDetails.isActive}
                    value={true}
                    onChange={handleInputChange}
                /> <br />

                <label htmlFor="">Address</label>
                <input
                    type="text"
                    name="address"
                    id="address"
                    value={userDetails.address}
                    onChange={handleInputChange}
                /> <br />

                <button type="submit" onClick={handleSubmit}>Submit and View Data</button>


            </form>




            <p>{userDetails.firstName}</p>
            <p>{userDetails.lastName}</p>
            <p>{userDetails.email}</p>
            <p> {userDetails.password}</p>
            <p>{userDetails.mobileNumber}</p>
            <p>{userDetails.city}</p>
            <p> Gender : {userDetails.gender}</p>
            <p>{userDetails.isActive ? "Yes" : "No"}</p>
            <p>{userDetails.address}</p>


        </div>

    )
}

