import React, { useState, useCallback } from 'react';
import { useAuth } from '../contexts/AuthContext';
import debounce from 'lodash/debounce';

function Search() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useAuth();

  const searchCountries = useCallback(
    debounce(async (searchQuery) => {
      if (!searchQuery) return;
      setLoading(true);
      try {
        const response = await fetch(`https://api.first.org/data/v1/countries?q=${searchQuery}`);
        const data = await response.json();
        dispatch({ type: 'SET_SEARCH_RESULTS', payload: data.data });
        dispatch({
          type: 'SET_PAGINATION',
          payload: {
            currentPage: 1,
            totalPages: Math.ceil(data.data.length / state.pagination.itemsPerPage)
          }
        });
      } catch (error) {
        console.error('Search failed:', error);
      } finally {
        setLoading(false);
      }
    }, 300),
    [dispatch, state.pagination.itemsPerPage]
  );

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    searchCountries(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search countries..."
      />
      {loading && <p>Loading...</p>}
      <ul>
        {state.searchResults.slice(
          (state.pagination.currentPage - 1) * state.pagination.itemsPerPage,
          state.pagination.currentPage * state.pagination.itemsPerPage
        ).map((country) => (
          <li key={country.country}>{country.country}</li>
        ))}
      </ul>
      {/* Add pagination controls here */}
    </div>
  );
}

export default Search;