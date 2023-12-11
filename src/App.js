import React from 'react'
import Banner from './Components/Banner';
import requests from './requests';
import Row from './Components/Row';
import Header from './Components/Header';
import "./App.css"
import Footer from './Components/Footer';

function App() {
	return (
		<div className="App">
			<Header />
			<Banner />
			<h1 className='keye'>NETFLIX</h1>
			<div className="res">
				<Row
					title="Netflix Originals"
					fetchUrl={requests.fetchNetflixOriginals}
					isLargeRow
				/>

				<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
				<Row title="Top Rated Movies" fetchUrl={requests.fetchToprated} />
				<Row title="Action Movies" fetchUrl={requests.fetchActionMovie} />
				<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
				<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
				<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
				<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
				<Footer />
			</div>
		</div>
	);
}

export default App;






