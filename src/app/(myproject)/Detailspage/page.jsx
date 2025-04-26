'use client'

import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'

export default function Navbar() {
    
    return <>
        <div className="container my-5">
            <div className="row">
                <div className="col-md-3">
                    <Image className='w-100' src={logo}></Image>
                    {/* <img src={logo} alt="" /> */}
                </div>
                <div className="col-md-9">
                    <h1>name</h1>
                    <h1>author</h1>
                    <p>title</p>
                    <p>description</p>
                    <p>content</p>
                    <p>source</p>
                </div>
            </div>
        </div>

    </>
}
