import React, { useState } from 'react';

/*

TODO:

*Need to find the correct way to calculate the heightOfPMovie.DONE
*Need to fix the GrayShadow position.DONE
*Need to fix the FrontCard position after click on GrayShadow(CSS:check space item).DONE
*Need to add back button and Details button on the GrayShadow after click on.DONE
*Need to add page when clicking on Details button.

*/

export default function Card(props) {

    const [style, setStyle] = useState({
        blur: 'blur(0px)',
        MarginTopMN: '0px',
        GrayShadowBottom: '243px',
        TwoBtnBottom: '276px'
    });
    const [changeWords, setChangeWords] = useState('Click');

    /*const call = useCallback((node) => {
        if (node !== null) {
            setHeightOfPMovie(node.getBoundingClientRect().height)
            console.log(node.getBoundingClientRect().height)
        }
        // eslint-disable-next-line
    }, []);*/

    function minimizeWindow() {
        if (style.MarginTopMN === '0px') {
            setStyle({
                blur: 'blur(15px)',
                MarginTopMN: '-240px',
                GrayShadowBottom: '2px',
                TwoBtnBottom: '36px'
            });
            setChangeWords('Back');
            console.log(style);
        } else {
            setStyle({
                blur: 'blur(0px)',
                MarginTopMN: '0px',
                GrayShadowBottom: '243px',
                TwoBtnBottom: '276px'
            });
            setChangeWords('Click');
            console.log(style);
        }
    };

    return (
        <div className='FrontCard'  >
            <img src={props.src} alt={props.src} className='Photo' style={{ filter: style.blur }} />
            <h3 className='MovieName' title='Movie name' style={{ marginTop: style.MarginTopMN }}>The Fate of the Furious</h3>
            <p className='MovieDescription' >
                <span style={{ fontWeight: 'bold' }}>description:</span> Dom Toretto is living the quiet life off the grid with Letty
                and his son, but they know that danger always lurks just
                over the peaceful horizon. This time, that threat forces Dom to confront the sins of his past to save those he loves most. His crew
                soon comes together to stop a world-shattering plot by the most skilled assassin and high-performance driver they've ever encountered
                -- Dom's forsaken brother.
            </p>
            <div className='GrayShadow' style={{ bottom: style.GrayShadowBottom }}></div>
            <div className='TwoBtn' style={{ bottom: style.TwoBtnBottom }}>
                <button className='BackAndDetailsBtn' onClick={minimizeWindow}>{changeWords}</button>
                <button className='BackAndDetailsBtn'>Details</button></div>
        </div>
    )
};