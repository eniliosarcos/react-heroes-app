import React, { useMemo } from 'react';
import queryString from 'query-string'

import { useLocation } from 'react-router';
import { useForm } from '../../Hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchPage = ({history}) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const initialForm = {
        searchText: q
    }
    
    const [formValues, handleInputChange] = useForm(initialForm);

    const heroesFilter =  useMemo(() => getHeroesByName(q), [q]) ;

    const handleSearch = (e) => {

        e.preventDefault();
        history.push(`?q=${formValues.searchText}`)
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>

            <div className="row">

                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value= {formValues.searchText}
                            onChange={handleInputChange}
                        />

                        <button
                            type="submit"
                            className="btn mt-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>

                    {
                        (q ==='') 
                        && 
                        <div className="alert alert-info"> Search a hero.. </div>
                    }

                    {
                        (q !== '' && heroesFilter.length === 0) 
                        && 
                        <div className="alert alert-danger"> There is no a hero with { q }.. </div>
                    }

                    {
                        heroesFilter.map(hero=>(
                            <HeroCard 
                                hero={hero}
                                key={hero.id}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
