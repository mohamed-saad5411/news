'use client'

import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


export default function Navbar() {
    return <>
        <nav className="navbar  fixed-top navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link className="navbar-brand fw-bold h1 m-0" href="/">News</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" href="/Business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" href="/Entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" href="/Health">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" href="/Science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" href="/Sport">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" href="/Technology">Technology</Link>
                        </li>
                  
                    </ul>
             
                </div>
            </div>
        </nav>

    </>
}


//Business Entertainment Health Science Sports Technology