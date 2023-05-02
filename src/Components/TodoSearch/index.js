//** styles **//
import './TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue }) {

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };
    return (
        <>
            <input
            className="TodoSearch"
            placeholder="Cebolla"
            value={searchValue}
            onChange={onSearchValueChange}
            />

            <p>{searchValue}</p>

        </>
    )
}

export default TodoSearch