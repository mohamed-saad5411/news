'use client'

import axios from 'axios'
import Image from 'next/image'
import notfoundimg from '../../assets/shutterstock_479042983.jpg.webp'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


export default function Business() {

    const [allNews, setallNews] = useState([])

    async function getAllNews() {
        let { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c556647584a1474c8d94f35284b9bd9b`)

        setallNews(data.articles)

    }
    useEffect(() => {
        getAllNews()
    }, [])

    return <>

        <div className="container my-5">
            <h3 className='text-center text-success m-0 my-3 pt-5'>Business News</h3>
            <div className="row justify-content-center g-3">
                {allNews.map((article) =>
                    <div className="col-md-6 col-lg-4" key={article.source.id}>
                        <a href={article.url} target='_blank' className='text-dark text-decoration-none'>
                            <div className='new-container bg-body-tertiary rounded-2 p-3 bg-'>
                                {article.urlToImage == null ? <Image
                                    className='w-100 rounded-2'
                                    src={notfoundimg}
                                    alt="Next.js logo"
                                    height={200}
                                    priority
                                /> :
                                    <img src={article.urlToImage} className='w-100 rounded-2' alt="" />
                                }
                                <h1 className='h3 my-3'>{article.source.name}</h1>
                                <p className='m-0'>{(article.title).split('').splice(0, 70).join('')} ....</p>
                                <a href={article.url} target='_blank' className='text-decoration-none'><button className=' w-100 mt-4 btn btn-outline-success'>See More</button></a>
                            </div>
                        </a>
                    </div>

                )}
            </div>
        </div>

    </>
}