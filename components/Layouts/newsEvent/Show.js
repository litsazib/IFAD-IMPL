import React, { useState } from 'react';
import {linkBreak} from '../../../utils/common.js';

const ReadMore = ({ children }) => {
	const word = 150;
	const text = children;
	const [isReadMore, setIsReadMore] = useState(true);
	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
	};
	return (
		<p className="text">
			{isReadMore ? text.slice(0, word) : linkBreak(text)}
			<span onClick={toggleReadMore} className="read-or-hide">
				{isReadMore ? '...read more' : ' show less'}
			</span>
		</p>
	);
};

const Content = ({details}) => {
	return (
		<div className="container ps-0">
			<h2 className="display-7 font-calibri news-subtitle-size">
				<ReadMore className="news-details">
					{details}
				</ReadMore>
			</h2>
		</div>
	);
};

export default Content;
