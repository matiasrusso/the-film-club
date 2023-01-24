import {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';
import {FilterNavbar} from '../components';
import {Films} from '../pages';
import {useMoviesStore, useInfiniteScroll} from '../hooks';

export const Home = () => {

	const {pathname} = useLocation()
	const media_type = pathname.split('/').filter(i => i)[0]

	const {data} = useSelector(store => store.movie)

	const {handleLoadMovies} = useMoviesStore()

	useInfiniteScroll(handleLoadMovies)

	const filteredData = useMemo(() => {
		if (!!media_type) {
			return data.filter((item) => (
				item.media_type === media_type
			))
		}
		return data
	}, [media_type, data])

	return (
		<div className="fadeIn">
			<FilterNavbar />

			<Films data={filteredData} />
		</div>
	)
}