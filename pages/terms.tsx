import { Section } from 'components/common/container';
import { TextBanner } from 'components/text-banner';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Text from 'components/common/text';
import { rem } from 'polished';

import React from 'react';

const ContentWithSidebarWrapper = styled(motion.div)`
	display: grid;
	gird-template-columns: 1fr;
	grid-template-rows: auto;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		grid-template-columns: 35% 1fr;
		column-gap: ${rem(20)};
	}
`;
const Sidebar = styled(motion.div)`
	margin-bottom: ${({ theme }) => rem(theme.space[5])};
`;
const Content = styled(motion.div)`
	display: flex;
	flex-direction: column;
`;

const ContentWithSidebar = ({ ...rest }) => {
	return (
		<Section {...rest}>
			<ContentWithSidebarWrapper>
				<Sidebar>
					<Text variant="termsTitle">Lorem Ipsum</Text>
				</Sidebar>
				<Content>
					<Text variant="cardLocation" color="sage" fontWeight="bold" mb={4}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, veniam!
					</Text>
					<Text mb={4}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum accusamus modi
						dolore, molestiae quasi rem nostrum, adipisci cupiditate accusantium incidunt
						dolores repudiandae. Voluptatem delectus, aperiam in provident iure rem!
						Explicabo ducimus qui odio fugit impedit quas perferendis voluptatem eligendi
						incidunt rem culpa suscipit aperiam illo, sint atque enim facere quam.
					</Text>
					<Text mb={4}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. At magni odit sit
						corporis. Odit illo voluptatem ab tempore debitis et aliquid tempora mollitia
						est at aut, repellendus optio rem itaque inventore fuga quisquam harum hic
						possimus. Consequatur veniam, sed id, incidunt atque eligendi libero nemo,
						nulla non doloremque obcaecati. Tenetur.
					</Text>
					<Text mb={4}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda quod dolor
						ratione laboriosam cum minima, in quidem ipsum quasi. Similique suscipit
						delectus explicabo assumenda ad asperiores mollitia facere? Perferendis nihil
						voluptates deserunt quibusdam! Perspiciatis, asperiores quisquam quaerat
						cumque ab quod deserunt aperiam, ullam earum, officiis inventore dicta
						cupiditate dolores aspernatur.
					</Text>
					<Text>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis voluptatum
						illum officia eum consequatur ratione cum et doloribus harum numquam ducimus
						ipsum perferendis inventore fugiat nihil tempore, earum facere non ipsa veniam
						architecto libero. Architecto dolore iusto eos quaerat facilis doloribus
						officiis consequuntur, mollitia temporibus veniam, deleniti similique neque
						recusandae!
					</Text>
				</Content>
			</ContentWithSidebarWrapper>
		</Section>
	);
};
function TermsAndConditions() {
	return (
		<>
			<TextBanner pt={[7, 8]} isLight title="Terms & Conditions" />
			<ContentWithSidebar />
			<ContentWithSidebar mb={6} />
		</>
	);
}

export async function getStaticProps() {
	return {
		props: {
			theme: 'light',
		},
	};
}

export default TermsAndConditions;
