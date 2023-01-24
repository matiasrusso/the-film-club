import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

export const useInfiniteScroll = (fn) => {
	const {isLoading} = useSelector(store => store.movie)
	const [scrollScrollBottom, setScrollScrollBottom] = useState(false);
	const [page, setPage] = useState(2)

	useEffect(() => {
		const handleScroll = () => {
			if (!isLoading) {
				if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
					setScrollScrollBottom(true);
				}
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		if (scrollScrollBottom === true) {
			setPage(page+1)
			fn(page)
		}
	}, [scrollScrollBottom])

	useEffect(() => {
		if (!isLoading) {
			setScrollScrollBottom(false)
		}
	}, [isLoading])
}