/* eslint-disable array-callback-return */
import React from 'react'

import { Link } from 'react-router-dom';


export default function Cards(props) {
    console.log(props.searchText)
    const handleClick = (val) => {

        localStorage.setItem('data', JSON.stringify(val));

    }
    return (
        <>
            <div className="container mt-2  px-6 mx-auto">
                {/* <button type="button" onClick={props.getBusinessNews} class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Business</button> */}
                {/* <button type="button" onClick={props.getEntertainmentNews} class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Entertainment</button>
                <button type="button" onClick={props.getTechnologyNews} class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Technology</button> */}
                {/* Section: Design Block */}
                <section className="mb-32 text-gray-800">
                    <h2 className="text-3xl font-bold mb-12 text-center"> {props.name} articles</h2>

                    <div className="grid lg:grid-cols-3 gap-6" >
                        {
                            props.businessData
                                .filter((val) => {
                                    if (props.searchText === undefined) {
                                        return val;
                                    }
                                    if (
                                        val.title
                                            .toLowerCase()
                                            .includes(props.searchText && props.searchText.toLowerCase())
                                    ) {
                                        console.log(val.title)
                                        return val;
                                    }
                                })
                                // .filter((items) => {
                                //     if ((props && props.searchText) === undefined) {
                                //         return items
                                //     }
                                //     if (items.title.toLowerCase().includes(props && props.searchText && props.searchText.toLowerCase())) {
                                //         // console.log(props.searchText.toLowerCase())
                                //         return items
                                //         // console.log((items.title).toLowerCase())
                                //     }
                                //val.title
                                // .toLowerCase()
                                //             .includes(props.search && props.search.toLowerCase())
                                //(items.title).toLowerCase().includes(props.searchText.toLowerCase())
                                //(items.title).toLowerCase().localeCompare(props.searchText.toLowerCase())
                                // })
                                .map((val, key) => {
                                    return (
                                        <>
                                            <div key={key} className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg" style={{ backgroundPosition: '50%' }} data-mdb-ripple="true" data-mdb-ripple-color="light">
                                                <img src={props.businessData[key] && props.businessData[key].urlToImage} className="w-full" alt="" />
                                                <Link to={`/landingPage/${key}`} onClick={() => handleClick(val)}>
                                                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                                                        <div className="flex justify-start items-end h-full">
                                                            <div className="text-white m-6">
                                                                <h5 className="font-bold text-lg mb-3">{props.businessData[key] && props.businessData[key].title}</h5>
                                                                <p>
                                                                    <small>{props.businessData[key] && props.businessData[key].publishedAt} <u></u> {props.businessData[key] && props.businessData[key].author}</small>
                                                                </p>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </>
                                    )
                                })

                        }


                    </div>
                </section>
                {/* Section: Design Block */}
            </div >
        </>
    )
}
