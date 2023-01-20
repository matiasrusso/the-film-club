import {useLocation} from 'react-router-dom';
import {FilterNavbar} from '../components';
import {Films} from '../pages';
import {helper} from '../helpers'

export const Home = () => {

	const {pathname} = useLocation()
	const mediaType = pathname.split('/').filter(i => i)[0]

	const filmData = {
		media_type: mediaType,
		title: helper.getSectionName(mediaType)
	}

	return (
		<div className="fadeIn">
			<FilterNavbar />

			<Films {...filmData} />
		</div>
	)
}