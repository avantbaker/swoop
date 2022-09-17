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
					<Text variant="termsTitle" maxWidth="80%">
						Last updated August 26, 2022
					</Text>
				</Sidebar>
				<Content>
					<Text>
						This privacy notice for Swoop Golf LLC (&apos;Company,&apos; &apos;we,&apos;
						&apos;us,&apos; or &apos;our&apos;), describes how and why we might collect,
						store, use, and/or share (&apos;process&apos;) your information when you use
						our services (&apos;Services&apos;), such as when you: Visit our website at
						https://www.swoopgolf.com, or any website of ours that links to this privacy
						notice Engage with us in other related ways, including any sales, marketing,
						or events Questions or concerns? Reading this privacy notice will help you
						understand your privacy rights and choices. If you do not agree with our
						policies and practices, please do not use our Services. If you still have any
						questions or concerns, please contact us at info@swoopgolf.com.
					</Text>

					<Text>SUMMARY OF KEY POINTS</Text>
					<Text>
						This summary provides key points from our privacy notice, but you can find out
						more details about any of these topics by clicking the link following each key
						point or by using our table of contents below to find the section you are
						looking for. You can also click here to go directly to our table of contents.
					</Text>
					<Text>
						<Text>
							What personal information do we process? When you visit, use, or navigate
							our Services, we may process personal information depending on how you
							interact with Swoop Golf LLC and the Services, the choices you make, and the
							products and features you use. Click here to learn more.
						</Text>{' '}
						<Text>
							Do we process any sensitive personal information? We do not process
							sensitive personal information.
						</Text>
						<Text>
							Do we receive any information from third parties? We do not receive any
							information from third parties.
						</Text>
						<Text>
							How do we process your information? We process your information to provide,
							improve, and administer our Services, communicate with you, for security and
							fraud prevention, and to comply with law. We may also process your
							information for other purposes with your consent. We process your
							information only when we have a valid legal reason to do so. Click here to
							learn more.
						</Text>
						<Text>
							In what situations and with which parties do we share personal information?
							We may share information in specific situations and with specific third
							parties. Click here to learn more.
						</Text>
						<Text>
							How do we keep your information safe? We have organizational and technical
							processes and procedures in place to protect your personal information.
							However, no electronic transmission over the internet or information storage
							technology can be guaranteed to be 100% secure, so we cannot promise or
							guarantee that hackers, cybercriminals, or other unauthorized third parties
							will not be able to defeat our security and improperly collect, access,
							steal, or modify your information. Click here to learn more.
						</Text>
						<Text>
							What are your rights? Depending on where you are located geographically, the
							applicable privacy law may mean you have certain rights regarding your
							personal information. Click here to learn more.
						</Text>
						<Text>
							How do you exercise your rights? The easiest way to exercise your rights is
							by filling out our data subject request form available here, or by
							contacting us. We will consider and act upon any request in accordance with
							applicable data protection laws.
						</Text>
						<Text>
							Want to learn more about what Swoop Golf LLC does with any information we
							collect? Click here to review the notice in full.
						</Text>
						<Text>TABLE OF CONTENTS</Text>
						<Text>
							1. WHAT INFORMATION DO WE COLLECT? 2. HOW DO WE PROCESS YOUR INFORMATION? 3.
							WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION? 4. DO WE USE
							COOKIES AND OTHER TRACKING TECHNOLOGIES? 5. HOW LONG DO WE KEEP YOUR
							INFORMATION? 6. HOW DO WE KEEP YOUR INFORMATION SAFE? 7. WHAT ARE YOUR
							PRIVACY RIGHTS? 8. CONTROLS FOR DO-NOT-TRACK FEATURES 9. DO CALIFORNIA
							RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS? 10. DO WE MAKE UPDATES TO THIS
							NOTICE? 11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE? 12. HOW CAN YOU
							REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
						</Text>
						<Text>1. WHAT INFORMATION DO WE COLLECT?</Text>
						<Text>Personal information you disclose to us</Text>
						<Text>In Short: We collect personal information that you provide to us.</Text>
						<Text>
							We collect personal information that you voluntarily provide to us when you
							express an interest in obtaining information about us or our products and
							Services, when you participate in activities on the Services, or otherwise
							when you contact us.
						</Text>
						<Text>
							Personal Information Provided by You. The personal information that we
							collect depends on the context of your interactions with us and the
							Services, the choices you make, and the products and features you use. The
							personal information we collect may include the following:
						</Text>
						<Text>email addresses</Text>
						<Text>names</Text>
						<Text>phone numbers</Text>
						<Text>job titles</Text>
						<Text>Sensitive Information. We do not process sensitive information.</Text>
						<Text>
							All personal information that you provide to us must be true, complete, and
							accurate, and you must notify us of any changes to such personal
							information.
						</Text>
						<Text>Information automatically collected</Text>
						<Text>
							In Short: Some information — such as your Internet Protocol (IP) address
							and/or browser and device characteristics — is collected automatically when
							you visit our Services.
						</Text>
						<Text>
							We automatically collect certain information when you visit, use, or
							navigate the Services. This information does not reveal your specific
							identity (like your name or contact information) but may include device and
							usage information, such as your IP address, browser and device
							characteristics, operating system, language preferences, referring URLs,
							device name, country, location, information about how and when you use our
							Services, and other technical information. This information is primarily
							needed to maintain the security and operation of our Services, and for our
							internal analytics and reporting purposes.
						</Text>
						<Text>
							Like many businesses, we also collect information through cookies and
							similar technologies.
						</Text>
						<Text>
							The information we collect includes: Log and Usage Data. Log and usage data
							is service-related, diagnostic, usage, and performance information our
							servers automatically collect when you access or use our Services and which
							we record in log files. Depending on how you interact with us, this log data
							may include your IP address, device information, browser type, and settings
							and information about your activity in the Services (such as the date/time
							stamps associated with your usage, pages and files viewed, searches, and
							other actions you take such as which features you use), device event
							information (such as system activity, error reports (sometimes called
							&apos;crash dumps&apos;), and hardware settings). Device Data. We collect
							device data such as information about your computer, phone, tablet, or other
							device you use to access the Services. Depending on the device used, this
							device data may include information such as your IP address (or proxy
							server), device and application identification numbers, location, browser
							type, hardware model, Internet service provider and/or mobile carrier,
							operating system, and system configuration information. Location Data. We
							collect location data such as information about your device&apos;s location,
							which can be either precise or imprecise. How much information we collect
							depends on the type and settings of the device you use to access the
							Services. For example, we may use GPS and other technologies to collect
							geolocation data that tells us your current location (based on your IP
							address). You can opt out of allowing us to collect this information either
							by refusing access to the information or by disabling your Location setting
							on your device. However, if you choose to opt out, you may not be able to
							use certain aspects of the Services.
						</Text>
						<Text>2. HOW DO WE PROCESS YOUR INFORMATION?</Text>
						<Text>
							In Short: We process your information to provide, improve, and administer
							our Services, communicate with you, for security and fraud prevention, and
							to comply with law. We may also process your information for other purposes
							with your consent.
						</Text>
						<Text>
							We process your personal information for a variety of reasons, depending on
							how you interact with our Services, including: To deliver and facilitate
							delivery of services to the user. We may process your information to provide
							you with the requested service.
						</Text>
						<Text>
							To send you marketing and promotional communications. We may process the
							personal information you send to us for our marketing purposes, if this is
							in accordance with your marketing preferences. You can opt out of our
							marketing emails at any time. For more information, see &apos;WHAT ARE YOUR
							PRIVACY RIGHTS?&apos; below).
						</Text>
						<Text>
							To deliver targeted advertising to you. We may process your information to
							develop and display personalized content and advertising tailored to your
							interests, location, and more.
						</Text>
						<Text>
							To evaluate and improve our Services, products, marketing, and your
							experience. We may process your information when we believe it is necessary
							to identify usage trends, determine the effectiveness of our promotional
							campaigns, and to evaluate and improve our Services, products, marketing,
							and your experience.
						</Text>
						<Text>
							To identify usage trends. We may process information about how you use our
							Services to better understand how they are being used so we can improve
							them.
						</Text>
						<Text>
							To determine the effectiveness of our marketing and promotional campaigns.
							We may process your information to better understand how to provide
							marketing and promotional campaigns that are most relevant to you.
						</Text>
						<Text>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</Text>
						<Text>
							In Short: We may share information in specific situations described in this
							section and/or with the following third parties.
						</Text>
						<Text>
							We may need to share your personal information in the following situations:
							Business Transfers. We may share or transfer your information in connection
							with, or during negotiations of, any merger, sale of company assets,
							financing, or acquisition of all or a portion of our business to another
							company.
						</Text>
						<Text>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</Text>
						<Text>
							In Short: We may use cookies and other tracking technologies to collect and
							store your information.
						</Text>
						<Text>
							We may use cookies and similar tracking technologies (like web beacons and
							pixels) to access or store information. Specific information about how we
							use such technologies and how you can refuse certain cookies is set out in
							our Cookie Notice.
						</Text>
						<Text>5. HOW LONG DO WE KEEP YOUR INFORMATION?</Text>
						<Text>
							In Short: We keep your information for as long as necessary to fulfill the
							purposes outlined in this privacy notice unless otherwise required by law.
						</Text>
						<Text>
							We will only keep your personal information for as long as it is necessary
							for the purposes set out in this privacy notice, unless a longer retention
							period is required or permitted by law (such as tax, accounting, or other
							legal requirements). No purpose in this notice will require us keeping your
							personal information for longer than 1 year.
						</Text>
						<Text>
							When we have no ongoing legitimate business need to process your personal
							information, we will either delete or anonymize such information, or, if
							this is not possible (for example, because your personal information has
							been stored in backup archives), then we will securely store your personal
							information and isolate it from any further processing until deletion is
							possible.
						</Text>
						<Text>6. HOW DO WE KEEP YOUR INFORMATION SAFE?</Text>
						<Text>
							In Short: We aim to protect your personal information through a system of
							organizational and technical security measures.
						</Text>
						<Text>
							We have implemented appropriate and reasonable technical and organizational
							security measures designed to protect the security of any personal
							information we process. However, despite our safeguards and efforts to
							secure your information, no electronic transmission over the Internet or
							information storage technology can be guaranteed to be 100% secure, so we
							cannot promise or guarantee that hackers, cybercriminals, or other
							unauthorized third parties will not be able to defeat our security and
							improperly collect, access, steal, or modify your information. Although we
							will do our best to protect your personal information, transmission of
							personal information to and from our Services is at your own risk. You
							should only access the Services within a secure environment.
						</Text>
						<Text>7. WHAT ARE YOUR PRIVACY RIGHTS?</Text>
						<Text>
							In Short: You may review, change, or terminate your account at any time.
						</Text>
						<Text>
							If you are located in the EEA or UK and you believe we are unlawfully
							processing your personal information, you also have the right to complain to
							your local data protection supervisory authority. You can find their contact
							details here:
							https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
						</Text>{' '}
						<Text>
							If you are located in Switzerland, the contact details for the data
							protection authorities are available here:
							https://www.edoeb.admin.ch/edoeb/en/home.html.
						</Text>
						<Text>
							Withdrawing your consent: If we are relying on your consent to process your
							personal information, which may be express and/or implied consent depending
							on the applicable law, you have the right to withdraw your consent at any
							time. You can withdraw your consent at any time by contacting us by using
							the contact details provided in the section &apos;HOW CAN YOU CONTACT US
							ABOUT THIS NOTICE?&apos; below.
						</Text>
						<Text>
							However, please note that this will not affect the lawfulness of the
							processing before its withdrawal nor, when applicable law allows, will it
							affect the processing of your personal information conducted in reliance on
							lawful processing grounds other than consent.
						</Text>
						<Text>
							Opting out of marketing and promotional communications: You can unsubscribe
							from our marketing and promotional communications at any time by clicking on
							the unsubscribe link in the emails that we send, or by contacting us using
							the details provided in the section &apos;HOW CAN YOU CONTACT US ABOUT THIS
							NOTICE?&apos; below. You will then be removed from the marketing lists.
							However, we may still communicate with you — for example, to send you
							service-related messages that are necessary for the administration and use
							of your account, to respond to service requests, or for other non-marketing
							purposes.
						</Text>
						<Text>
							Cookies and similar technologies: Most Web browsers are set to accept
							cookies by default. If you prefer, you can usually choose to set your
							browser to remove cookies and to reject cookies. If you choose to remove
							cookies or reject cookies, this could affect certain features or services of
							our Services. To opt out of interest-based advertising by advertisers on our
							Services visit http://www.aboutads.info/choices/.
						</Text>
						<Text>
							If you have questions or comments about your privacy rights, you may email
							us at info@swoopgolf.com.
						</Text>
						<Text>8. CONTROLS FOR DO-NOT-TRACK FEATURES</Text>
						<Text>
							Most web browsers and some mobile operating systems and mobile applications
							include a Do-Not-Track (&apos;DNT&apos;) feature or setting you can activate
							to signal your privacy preference not to have data about your online
							browsing activities monitored and collected. At this stage no uniform
							technology standard for recognizing and implementing DNT signals has been
							finalized. As such, we do not currently respond to DNT browser signals or
							any other mechanism that automatically communicates your choice not to be
							tracked online. If a standard for online tracking is adopted that we must
							follow in the future, we will inform you about that practice in a revised
							version of this privacy notice.
						</Text>
						<Text>9. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</Text>
						<Text>
							In Short: Yes, if you are a resident of California, you are granted specific
							rights regarding access to your personal information.
						</Text>
						<Text>
							California Civil Code Section 1798.83, also known as the &apos;Shine The
							Light&apos; law, permits our users who are California residents to request
							and obtain from us, once a year and free of charge, information about
							categories of personal information (if any) we disclosed to third parties
							for direct marketing purposes and the names and addresses of all third
							parties with which we shared personal information in the immediately
							preceding calendar year. If you are a California resident and would like to
							make such a request, please submit your request in writing to us using the
							contact information provided below.
						</Text>
						<Text>
							If you are under 18 years of age, reside in California, and have a
							registered account with Services, you have the right to request removal of
							unwanted data that you publicly post on the Services. To request removal of
							such data, please contact us using the contact information provided below
							and include the email address associated with your account and a statement
							that you reside in California. We will make sure the data is not publicly
							displayed on the Services, but please be aware that the data may not be
							completely or comprehensively removed from all our systems (e.g., backups,
							etc.).
						</Text>
						<Text>CCPA Privacy Notice</Text>
						<Text>
							The California Code of Regulations defines a &apos;resident&apos; as:
						</Text>
						<Text>
							(1) every individual who is in the State of California for other than a
							temporary or transitory purpose and (2) every individual who is domiciled in
							the State of California who is outside the State of California for a
							temporary or transitory purpose
						</Text>
						<Text>All other individuals are defined as &apos;non-residents.&apos;</Text>
						<Text>
							If this definition of &apos;resident&apos; applies to you, we must adhere to
							certain rights and obligations regarding your personal information.
						</Text>
						<Text>What categories of personal information do we collect?</Text>
						<Text>
							We have collected the following categories of personal information in the
							past twelve (12) months:
						</Text>
						<Text>Category Examples Collected</Text>
						<Text>
							A. Identifiers Contact details, such as real name, alias, postal address,
							telephone or mobile contact number, unique personal identifier, online
							identifier, Internet Protocol address, email address, and account name
						</Text>
						<Text>NO</Text>
						<Text>
							B. Personal information categories listed in the California Customer Records
							statute Name, contact information, education, employment, employment
							history, and financial information
						</Text>
						<Text>NO</Text>
						<Text>
							C. Protected classification characteristics under California or federal law
							Gender and date of birth
						</Text>
						<Text>NO</Text>
						<Text>
							D. Commercial information Transaction information, purchase history,
							financial details, and payment information
						</Text>
						<Text>NO</Text>
						<Text>E. Biometric information Fingerprints and voiceprints</Text>
						<Text>NO</Text>
						<Text>
							F. Internet or other similar network activity Browsing history, search
							history, online behavior, interest data, and interactions with our and other
							websites, applications, systems, and advertisements
						</Text>
						<Text>NO</Text>
						<Text>G. Geolocation data Device location</Text>
						<Text>NO</Text>
						<Text>
							H. Audio, electronic, visual, thermal, olfactory, or similar information
							Images and audio, video or call recordings created in connection with our
							business activities
						</Text>
						<Text>NO</Text>
						<Text>
							I. Professional or employment-related information Business contact details
							in order to provide you our Services at a business level or job title, work
							history, and professional qualifications if you apply for a job with us
						</Text>
						<Text>NO</Text>
						<Text>
							J. Education Information Student records and directory information
						</Text>
						<Text>NO</Text>
						<Text>
							K. Inferences drawn from other personal information Inferences drawn from
							any of the collected personal information listed above to create a profile
							or summary about, for example, an individual’s preferences and
							characteristics
						</Text>
						<Text>NO</Text>
						<Text>
							We may also collect other personal information outside of these categories
							through instances where you interact with us in person, online, or by phone
							or mail in the context of:
						</Text>
						<Text>Receiving help through our customer support channels;</Text>
						<Text>Participation in customer surveys or contests; and</Text>
						<Text>
							Facilitation in the delivery of our Services and to respond to your
							inquiries.
						</Text>
						<Text>How do we use and share your personal information?</Text>
						<Text>
							More information about our data collection and sharing practices can be
							found in this privacy notice.
						</Text>
						<Text>
							You may contact us by email at info@swoopgolf.com, or by referring to the
							contact details at the bottom of this document.
						</Text>
						<Text>
							If you are using an authorized agent to exercise your right to opt out we
							may deny a request if the authorized agent does not submit proof that they
							have been validly authorized to act on your behalf.
						</Text>
						<Text>Will your information be shared with anyone else?</Text>
						<Text>
							We may disclose your personal information with our service providers
							pursuant to a written contract between us and each service provider. Each
							service provider is a for-profit entity that processes the information on
							our behalf.
						</Text>
						<Text>
							We may use your personal information for our own business purposes, such as
							for undertaking internal research for technological development and
							demonstration. This is not considered to be &apos;selling&apos; of your
							personal information.
						</Text>
						<Text>
							Swoop Golf LLC has not disclosed or sold any personal information to third
							parties for a business or commercial purpose in the preceding twelve (12)
							months. Swoop Golf LLC will not sell personal information in the future
							belonging to website visitors, users, and other consumers.
						</Text>
						<Text>Your rights with respect to your personal data</Text>
						<Text>Right to request deletion of the data — Request to delete</Text>
						<Text>
							You can ask for the deletion of your personal information. If you ask us to
							delete your personal information, we will respect your request and delete
							your personal information, subject to certain exceptions provided by law,
							such as (but not limited to) the exercise by another consumer of his or her
							right to free speech, our compliance requirements resulting from a legal
							obligation, or any processing that may be required to protect against
							illegal activities.
						</Text>
						<Text>Right to be informed — Request to know</Text>
						<Text>Depending on the circumstances, you have a right to know:</Text>
						<Text>whether we collect and use your personal information;</Text>
						<Text>the categories of personal information that we collect;</Text>
						<Text>
							the purposes for which the collected personal information is used;
						</Text>
						<Text>whether we sell your personal information to third parties;</Text>
						<Text>
							the categories of personal information that we sold or disclosed for a
							business purpose;
						</Text>
						<Text>
							the categories of third parties to whom the personal information was sold or
							disclosed for a business purpose; and
						</Text>
						<Text>
							the business or commercial purpose for collecting or selling personal
							information.
						</Text>
						<Text>
							In accordance with applicable law, we are not obligated to provide or delete
							consumer information that is de-identified in response to a consumer request
							or to re-identify individual data to verify a consumer request.
						</Text>
						<Text>
							Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights
						</Text>
						<Text>
							We will not discriminate against you if you exercise your privacy rights.
						</Text>
						<Text>Verification process</Text>
						<Text>
							Upon receiving your request, we will need to verify your identity to
							determine you are the same person about whom we have the information in our
							system. These verification efforts require us to ask you to provide
							information so that we can match it with information you have previously
							provided us. For instance, depending on the type of request you submit, we
							may ask you to provide certain information so that we can match the
							information you provide with the information we already have on file, or we
							may contact you through a communication method (e.g., phone or email) that
							you have previously provided to us. We may also use other verification
							methods as the circumstances dictate.
						</Text>
						<Text>
							We will only use personal information provided in your request to verify
							your identity or authority to make the request. To the extent possible, we
							will avoid requesting additional information from you for the purposes of
							verification. However, if we cannot verify your identity from the
							information already maintained by us, we may request that you provide
							additional information for the purposes of verifying your identity and for
							security or fraud-prevention purposes. We will delete such additionally
							provided information as soon as we finish verifying you.
						</Text>
						<Text>Other privacy rights</Text>
						<Text>You may object to the processing of your personal information.</Text>
						<Text>
							You may request correction of your personal data if it is incorrect or no
							longer relevant, or ask to restrict the processing of the information.
						</Text>
						<Text>
							You can designate an authorized agent to make a request under the CCPA on
							your behalf. We may deny a request from an authorized agent that does not
							submit proof that they have been validly authorized to act on your behalf in
							accordance with the CCPA.
						</Text>
						<Text>
							You may request to opt out from future selling of your personal information
							to third parties. Upon receiving an opt-out request, we will act upon the
							request as soon as feasibly possible, but no later than fifteen (15) days
							from the date of the request submission.
						</Text>
						<Text>
							To exercise these rights, you can contact us by email at info@swoopgolf.com,
							or by referring to the contact details at the bottom of this document. If
							you have a complaint about how we handle your data, we would like to hear
							from you.
						</Text>
						<Text>10. DO WE MAKE UPDATES TO THIS NOTICE?</Text>
						<Text>
							In Short: Yes, we will update this notice as necessary to stay compliant
							with relevant laws.
						</Text>
						<Text>
							We may update this privacy notice from time to time. The updated version
							will be indicated by an updated &apos;Revised&apos; date and the updated
							version will be effective as soon as it is accessible. If we make material
							changes to this privacy notice, we may notify you either by prominently
							posting a notice of such changes or by directly sending you a notification.
							We encourage you to review this privacy notice frequently to be informed of
							how we are protecting your information.
						</Text>
						<Text>11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</Text>
						<Text>
							If you have questions or comments about this notice, you may email us at
							info@swoopgolf.com or by post to:
						</Text>
						<Text>
							Swoop Golf LLC 3185 Fox Sedge Ln Highlands Ranch, CO 80126 United States
						</Text>
						<Text>
							12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
						</Text>
						<Text>
							You have the right to request access to the personal information we collect
							from you, change that information, or delete it. To request to review,
							update, or delete your personal information, please submit a request form by
							clicking here.
						</Text>
					</Text>
					{/* <Text variant="cardLocation" color="sage" fontWeight="bold" mb={4}>
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
					</Text> */}
				</Content>
			</ContentWithSidebarWrapper>
		</Section>
	);
};
function TermsAndConditions() {
	return (
		<>
			<TextBanner pt={[7, 8]} isLight title="Privacy Notice" />
			<ContentWithSidebar />
			{/* <ContentWithSidebar mb={6} /> */}
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
