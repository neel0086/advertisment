import React from 'react'

function CityList({ handleCity }) {
    const cities = ['All', 'Nadiad', 'Baroda', 'Ahemdabad', 'Surat'];
    return (
        <>
            <h3>City</h3>
            <ul>
                <label htmlFor="city">Choose a City:</label>
                <select name="city" onClick={(e) => { handleCity(e.target.name, e.target.value) }}>
                    {
                        cities.map((city, index) => (
                            <option key={index} value={city}>{city}</option>
                        ))
                    }
                </select>
            </ul>
        </>
    )
}

export default CityList