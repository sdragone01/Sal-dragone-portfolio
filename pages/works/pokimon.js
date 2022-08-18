import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Image from 'next/image'
import { ExtrenalLinkIcon } from '@chakra-ui/icons'

import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import pokimon from '../../public/images/pokimon.png';


const Work = () => {
    return (

        <Layout title="Pokimon">

            <Container>

                <br />
                <Title>Pokimon: Menthol Juul Edition
                    <Badge> 2022</Badge>
                </Title>
                <P>
                    A HTML Canvas game modeled after the Pokimon game. Built With Vanilla Javascript, HTML5 Canvas, and CSS.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://sdragone01.github.io/pokimon-menthol-juul-edition/">
                            https://sdragone01.github.io/pokimon-menthol-juul-edition/
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Github</Meta>
                        <Link href="https://github.com/sdragone01/pokimon-menthol-juul-edition">https://github.com/sdragone01/pokimon-menthol-juul-edition
                        </Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Work;