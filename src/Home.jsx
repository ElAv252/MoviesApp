import React, { useEffect, useState } from 'react';
import Card from './Card';

export default function Home(props) {

    const [md, setMd] = useState('Loading...');
    const [mn, setMn] = useState('Loading...');
    const [mp, setMp] = useState([]);
    const [inter, setInter] = useState();

    const ArrayCards = [];
    const MoviePlot = [];

    useEffect(() => {
        const fetchData = async () => {

            const date = new Date();

            if (date.getDay() === 0 && date.getMinutes() === 0 && date.getSeconds() === 0) { // Returns data on the most popular movies.
                const MostPopularMovies = await fetch('https://imdb-api.com/en/API/MostPopularMovies/k_s8jsfrza'); //Return the Most Popular Movies from the api;
                const MostPopularMoviesJson = await MostPopularMovies.json();
                localStorage.setItem('MostPopularMoviesJson', JSON.stringify(MostPopularMoviesJson));
            };

            const LocalStorageMPM = JSON.parse(localStorage.getItem('MostPopularMoviesJson'));
            console.log(LocalStorageMPM);
            console.log(LocalStorageMPM.items.find((value) => value.title === "Don't Worry Darling"));

            LocalStorageMPM.items.map(async (value, key) => {
                if (key < 12) {
                    console.log(`Number of reruns${key}`);
                    if (date.getDay() === 0 && date.getMinutes() === 0) { // Returns the plot of the film.
                        const Title = await fetch(`https://imdb-api.com/en/API/Title/k_s8jsfrza/${value.id}`); // Return the plot and maybe the trailer.
                        const TitleJson = await Title.json();
                        MoviePlot.push(TitleJson);
                    };
                } else {
                    console.log('Max uses for Today');
                };
                return null;
            });

            if (date.getDay() === 0 && date.getMinutes() === 0) {
                const interval = setInterval(() => {
                    localStorage.setItem('TitleJson', JSON.stringify(MoviePlot)); // Save & update the plot of the film.
                }, 1000);
                setInter(interval);
            };

            const LocalStorageTitle = JSON.parse(localStorage.getItem('TitleJson')); // Need to take this and think about a way to organize the movie plot with  the image and the URL of the movie.
            console.log(LocalStorageTitle);
            setMd(LocalStorageTitle.map((value) => value.plot));
            setMn(LocalStorageTitle.map((value) => value.title));
            setMp(LocalStorageTitle.map((value) => value.image));

        };
        fetchData();
        return () => clearInterval(inter);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    for (let i = 0; i < 12; i++) {
        ArrayCards.push(< Card src={mp[i]} MovieDescription={md === 'Loading...' ? md : md[i]} MovieName={mn === 'Loading...' ? mn : mn[i]} key={i} />);
    };

    return (
        <div className='AllProduct'>
            {ArrayCards.map((value) => {
                return value;
            })}
        </div>
    )
};
