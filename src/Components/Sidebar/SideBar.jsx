import { useState } from 'react'
import CategoryList from './CategoryList'
import CityList from './CityList'
import './SideBar.css'
function SideBar() {
    const [searchCriteria, setSearchCriteria] = useState({ city: 'All', category: 'All' })

    const handleSearchCriteria = (name, value) => {

        if ('city' === name && value === searchCriteria.city) return;
        console.log(name, " ", value)
        setSearchCriteria(prevState => {
            return ({
                ...prevState,
                [name]: value
            })
        })
    }

    return (
        <div className="side-bar">
            {/* <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul> */}
            <CityList handleCity={handleSearchCriteria} />
            <CategoryList handleCategory={handleSearchCriteria} searchCriteria={searchCriteria} />
        </div>
    )
}

export default SideBar;
