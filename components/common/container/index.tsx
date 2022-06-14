import styled from 'styled-components';
import { Flex } from 'rebass/styled-components';

export const Section = styled(Flex)`
	width: 100%;
	padding-right: 20px;
	padding-left: 20px;
	padding-top: 50px;
	padding-bottom: 50px;
	margin-right: auto !important;
	margin-left: auto !important;
	overflow: visible;
	position: relative;

	@media (min-width: 1024px) {
		max-width: 980px;
	}
	@media (min-width: 1200px) {
		max-width: 1140px;
	}
`;

export const Block = styled('div')`
	width: 100%;
	padding-right: 20px;
	padding-left: 20px;
	padding-top: 50px;
	padding-bottom: 50px;
	margin-right: auto !important;
	margin-left: auto !important;
	@media (min-width: 1024px) {
		max-width: 980px;
	}
	@media (min-width: 1200px) {
		max-width: 1140px;
	}
`;
