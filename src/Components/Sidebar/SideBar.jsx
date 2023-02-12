import {useState} from 'react'
import CategoryList from './CategoryList'
function SideBar() {
    const [searchCriteria,setSearchCriteria] = useState({city:'all',category:'all'})

    const handleSearchCriteria = (event)=>{
        const {name,value} = event.target;
        // console.log(name)
        // console.log(value)
        console.log(event.target)
        setSearchCriteria(prevState => {
            return ({
                ...prevState,
                [name]:value
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
            <h3>City</h3>
            <ul>
                <label for="city">Choose a City:</label>
                <select name="cars" id="city">
                    <option value="nadiad">Nadia</option>
                    <option value="baroda">Baroda</option>
                    <option value="ahemdabad">Ahemdabad</option>
                    <option value="surat">Surat</option>
                </select>
            </ul>
            <CategoryList handleCategory={handleSearchCriteria}/>
        </div>
    )
}

export default SideBar;
