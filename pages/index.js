import NextLink from 'next/link';
import {

    Container,
    Box,
    Button,
    Heading,
    SimpleGrid,
    List,
    ListItem,
    Image,
    Link,
    useColorModeValue,
    chakra
} from '@chakra-ui/react';

import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Layout from '../components/layouts/article';
import { BioSection, BioYear } from '../components/bio';
const Home = () => (


    <Layout>
        <Container className='main' >

            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, Im a Full Stack Developer.
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Sal Dragone
                    </Heading>
                    <p> Software Engineer ( Artist / Developer / Designer )</p>
                </Box>
                <Box flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    align="center"
                >
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" maxHeight="100px" display="inline-block" borderRadius="full" src="https://i.ibb.co/VLZTgCz/profile.png" alt="Profile Img" />
                </Box>
            </Box>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    About
                </Heading>
                <Paragraph> Sal Dragone is a freelance full-stack developer based in Philadelphia, PA. Sal has a passion for graphic design and using those skills in his web development. When not coding, Sal loves spending time with his friends, playing music, golfing, bowling, or playing video games.  </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />}
                            colorScheme="teal"
                        >
                            My Portfolio
                        </Button>
                    </NextLink>

                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>

                <BioSection>
                    <BioYear>1994</BioYear>
                    Born in New Jersey
                </BioSection>
                <BioSection>
                    <BioYear>2013</BioYear>
                    Graduated from Clearview Regional High School
                </BioSection>
                <BioSection>
                    <BioYear>2017</BioYear>
                    Graduated from University of the Arts in Philadelphia,
                    with a B.S. in Music Technology.
                </BioSection>
                <BioSection>
                    <BioYear>2018</BioYear>
                    Started {''}<Link href="https://www.instagram.com/arwayapparel">Arway Apparel</Link>, a full service screenprint and embroidery shop.
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Listed as a {''}<Link href="https://www.uarts.edu/sal-dragone">featured alumni</Link> on the University of the Arts in Philadelphia website.
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    Graduated from General Assembly, with a certificate in Full Stack Web Development.
                </BioSection>

            </Section>

        </Container >
    </Layout >


);


export default Home;
