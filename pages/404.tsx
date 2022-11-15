import React from 'react';
import { rem } from 'polished';
import { Section } from 'components/common/container';
import Text from 'components/common/text';
import { MenuButton } from 'components/common/menu-item';
import Pin from 'components/common/icons/pin';
import theme from 'styles/theme';
import { useTheme } from 'styled-components';
import { useRouter } from 'next/router';

function Error404() {
	const { colors } = useTheme();
	const router = useRouter();
	return (
		<>
			<Section mb={7} flexDirection="column" pt={[`${rem(theme.space[7])} !important`]}>
				<Pin />
				<Text mt={4} color={colors.white} mb={6} variant="four0fourTitle">
					404 Error
				</Text>
				<Text color={colors.white} mb={5} variant="four0fourSubtitle">
					SHANKED WHIFFED FLUBBED SLICED BLADED TOPPED
				</Text>
				<Text color={colors.white} mb={6} variant="four0fourBody">
					Something went wrong.. Let’s get you back to a page that exists.
				</Text>
				<MenuButton maxWidth="400px" color={colors.white} onClick={router.back}>
					Go Back
				</MenuButton>
			</Section>
		</>
	);
}

export const getStaticProps = () => {
	return {
		props: {
			theme: 'orange',
		},
	};
};

export default Error404;
