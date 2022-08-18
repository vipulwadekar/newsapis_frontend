import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function LandingPage(props) {
    const [data, setData] = useState([]);
    const id = useParams();

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('data'));
        if (items) {
            setData(items);
        }
        console.log("get ITEMS", data)
    }, []);
    return (
        <>
            {/* Container for demo purpose */}
            < div className="container my-24 px-6 mx-auto" >
                {/* Section: Design Block */}
                <section section className="mb-32" >
                    <style dangerouslySetInnerHTML={{ __html: "\n      @media (min-width: 992px) {\n        #cta-img-nml-50 {\n          margin-left: 50px;\n        }\n      }\n    " }} />
                    <div className="flex flex-wrap">
                        <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0">
                            {data && <div className="flex lg:py-12">
                                <img src={data.urlToImage} className="w-full rounded-lg shadow-lg" id="cta-img-nml-50" style={{ zIndex: 10 }} alt="" />
                            </div>}
                        </div>
                        <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                            {data && <div className="bg-yellow-500 h-full rounded-lg p-6 lg:pl-12 text-white flex items-center text-center lg:text-left">
                                <div className="lg:pl-12">
                                    <h2 className="text-3xl font-bold mb-6">{data.title}</h2>
                                    <p className="mb-6 pb-2 lg:pb-0">
                                        {data.content}
                                    </p>

                                    <p>
                                        {data.description}
                                    </p>

                                    <div className="mt-8 flex flex-col md:flex-row md:justify-around xl:justify-end mb-6 mx-auto">
                                        <a href={data.url}><button type="button" class="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">Show More</button></a>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    </div>
                </section >
                {/* Section: Design Block */}
            </div >
            {/* Container for demo purpose */}
        </>

    )
}
