import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';

export default function Card(props) {

    const [style, setStyle] = useState({
        blur: 'blur(0px)',
        MarginTopMN: '0px',
        FCoverflowY: 'hidden'
    });
    //const [changeWords, setChangeWords] = useState('Click');

    function minimizeWindow() {
        if (style.MarginTopMN === '0px') {
            setStyle({
                blur: 'blur(15px)',
                MarginTopMN: '-250px',
                FCoverflowY: 'scroll'
            });
        } else {
            setStyle({
                blur: 'blur(0px)',
                MarginTopMN: '0px',
                FCoverflowY: 'hidden'
            });
        }
    };

    return (
        <div className='FrontCard' style={{ overflowY: style.FCoverflowY }}/*onScroll={minimizeWindow}*/>
            <Link to={`/MovieName/${props.MovieName}`} className='MovieName' >
                <img src={props.src} alt={props.src} className='Photo' style={{ filter: style.blur }} />
            </Link>
            <h3 className='MovieName' title='Movie name' style={{ marginTop: style.MarginTopMN }}>
                {props.MovieName}
            </h3>
            <p className='MovieDescription' onClick={minimizeWindow}>
                <span style={{ fontWeight: 'bold' }}>Description:</span> {props.MovieDescription}
            </p>
        </div >
    )
};
