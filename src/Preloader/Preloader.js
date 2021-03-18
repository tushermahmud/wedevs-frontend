import React from 'react'
import './Preloader.css'
const Preloader = () => {
    return (
        <div className="center-pre">
            <div className="ring">
            </div>
            <span className="preload-span">loading...</span>
        </div>
    )
}

export default Preloader
