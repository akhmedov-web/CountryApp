import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Spinner from './Spinner';
import { SEARCH_URL } from '../api/api';

export default function PullPage() {
    const [country, setCountry] = useState([])
    const { name } = useParams();
    const back = useNavigate();
    const getData = () => {
        axios
            .get(`${SEARCH_URL}/${name}`)
            .then((response) => setCountry(response.data))
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        getData();
    }, [name])
    console.log(country)
    return (
        <>
            <div className="container">
                <div className="card mx-auto w-75 p-2 m-4 text-center" style={{backgroundColor:'#C5BCF1'}}>
                    Information of {name}
                </div>
                {country.length === 0 ? <div className="card mx-auto w-75 p-2 m-4 bg-info text-center">
                    <h2><Spinner/></h2>
                </div> :(
                    <div className="data_card d-flex mx-auto w-75 p-2 m-4 text-center">

    <img src={country[0].flags.png} alt="flag_img" className='col-6 m-5' />
<div className="col-6 d-flex flex-column justify-content-center">
<p className="d-flex justify-content-start ps-3" ><b>Name:</b>ㅤ<p>{country[0].name}</p></p>
<p className="d-flex justify-content-start ps-3" ><b>Capital:</b>ㅤ<p>{country[0].capital}</p></p>
<p className="d-flex justify-content-start ps-3" ><b>Region:</b>ㅤ<p>{country[0].region}</p></p>
<p className="d-flex justify-content-start ps-3" ><b>Nation:</b>ㅤ<p>{country[0].demonym}</p></p>
<p className="d-flex justify-content-start ps-3" ><b>Domain:</b>ㅤ<p>{country[0].topLevelDomain}</p></p>
</div>


                    </div>
                )}

                <div className="card mx-auto w-75 p-2 m-4 text-center" style={{backgroundColor:'#C5BCF1'}}>
                <button className='btn btn-success w-100 text-light m-1'>
                       Look at the map
                    </button>
                    <button className='btn btn-danger w-100 text-light m-1' onClick={() => back(-1)}>
                        Go back
                    </button>
                </div>
            </div>
        </>
    )
}
