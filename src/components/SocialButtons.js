import React from 'react';
import styled from 'styled-components';
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
	WhatsappShareButton,
	WhatsappIcon,
} from 'react-share-kakao';

const SocialButtons = () => {
	return (
		<>
			<SnSOuterWrapper>
				<SnSWrapper>
					<FacebookShareButton url='https://www.travelmonday.co/'>
						<FacebookIcon size={20} round={true} />
					</FacebookShareButton>
				</SnSWrapper>
				<SnSWrapper>
					<TwitterShareButton url='https://www.travelmonday.co/'>
						<TwitterIcon size={20} round={true} />
					</TwitterShareButton>
				</SnSWrapper>
				<SnSWrapper>
					<WhatsappShareButton url='https://www.travelmonday.co/'>
						<WhatsappIcon size={20} round={true} />
					</WhatsappShareButton>
				</SnSWrapper>
			</SnSOuterWrapper>
		</>
	);
};

const SnSOuterWrapper = styled.div`
	z-index: 1;
	display: flex;
	flex-direction: row;
	position: absolute;
	bottom: 50px;
	left: 25px;
	outline: none;
`;

const SnSWrapper = styled.div`
	margin-right: 8px;
	outline: none;
`;

export default SocialButtons;
