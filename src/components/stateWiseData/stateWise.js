import React, { useEffect, useState } from 'react';
import '../../css/stateWiseCss/stateWise.css'

const Statewise = () => {
    const [data, setData] = useState([]);

    const getCovidData = async () => {
        let response = await fetch('https://api.covid19india.org/data.json');
        let actual_data = await response.json();
        console.log(actual_data.statewise);
        setData(actual_data.statewise)
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h1 className="mb-5 text-center"><span className="font-weight-bold">INDIA</span> COVID-19 Dashboard</h1>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((currentElem, index) => {
                                    return (<tr key={index}>
                                        <td>{currentElem.state}</td>
                                        <td>{currentElem.recovered}</td>
                                        <td>{currentElem.confirmed}</td>
                                        <td>{currentElem.deaths}</td>
                                        <td>{currentElem.active}</td>
                                        <td>{currentElem.lastupdatedtime}</td>
                                    </tr>)
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Statewise