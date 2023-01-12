import React from 'react'
import CountryDetails from './CountryDetails'

function Country({ data }) {
    // console.log(data)

    return (



        <div>
            <div className='conatiner'>
                {
                    data?.map((el, i) => {

                        // console.log(i)
                        return (<div className='grid-containers' key={el.i}>
                            <div><img src={el.flags.png} alt="country-image" /></div>
                            <div className='content-text'>
                                <h2>{el.name.common}</h2>
                                <p><span>Population: </span>{el.population}</p>
                                <p><span>Region: </span>{el.region}</p>
                                <p><span>Capital: </span>{el.capital}</p>
                                <CountryDetails id={i} el={el} />
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Country

// - Country     name
// - Image of flag  flag
// - Population  population
// - Region  region
// - Capital capital