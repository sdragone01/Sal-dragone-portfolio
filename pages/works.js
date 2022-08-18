import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';
import Layout from '../components/layouts/article';

import pokimon from '../public/images/pokimon.png';
import unnamedcard from '../public/images/unnamedcardgame.png';
import tggames from '../public/images/tggames.png';
import storeage from '../public/images/storeage.png';

const Works = () => {

    return (
        <Layout title="Works">
            <Container>
                <Heading as='h3' fontSize={20} mb={4}>
                    Works
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>

                    <Section>
                        <WorkGridItem id="pokimon" title='Pokimon Menthol Juul Edition' thumbnail={pokimon}>
                            A HTML Canvas game modeled after the Pokimon game.
                            <br />
                            <b>Tech: HTML, CSS, Javascript, Canvas</b>
                        </WorkGridItem>
                    </Section>

                    <Section>
                        <WorkGridItem id="unnamedcardgame" title='Unnamed Card Game' thumbnail={unnamedcard}>
                            An Express app that allows users to create and sort custom playing cards and decks.
                            <br />
                            <b>Tech: Express, MongoDB, Node, Liquid, Javascript</b>
                        </WorkGridItem>
                    </Section>

                    <Section>
                        <Divider my={6} />
                        <WorkGridItem id="tggames" title='Thunder Gun Games' thumbnail={tggames}>
                            A MERN stack app that allows users to upload and play HTML games.
                            <br />
                            <b>Tech: MongoDB, Express, Node, React, HTML, CSS, Javascript, Heroku</b>
                        </WorkGridItem>
                    </Section>

                    <Section>
                        <Divider my={6} />
                        <WorkGridItem id="storeage" title='STOREage' thumbnail={storeage}>
                            A MERN stack app that allows users to organize, buy, and sell storage boxes.
                            <br />
                            <b>Tech: MongoDB, Express, Node, React, HTML, CSS, Javascript, Heroku, MUI</b>
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>

    )
}

export default Works;



