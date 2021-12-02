import { useState, useEffect } from "react";
import { Link } from "react-router-dom";




function CountriesList({countriesData}) {

    const [countries, setCountries] = useState([])
    //state for the initial render

    useEffect(() => {
        setCountries(countriesData);
    }, []);

    
    return (  

        <div>

        <h3>Countries</h3>
            {countries.map((country) => {
                console.log("Country:", country.name.common)
                return (
                    <div>
                        <p>{country.name.common}</p>

                        <img src=
                            {`http://www.geognos.com/api/en/countries/flag/${country.alpha2Code}.png`}
                        alt={"country-flag"}>

                        </img>
                    </div>
                    
                )
            })

            }
       
        </div>

    );
}

export default CountriesList;