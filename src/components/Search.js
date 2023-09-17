import React from 'react'

const Search = ({handleSearch}) => {
  return (
    <input type="search" 
        placeholder='Search for friend'
        onChange={(e) => handleSearch(e)}
    />
  )
}

export default Search