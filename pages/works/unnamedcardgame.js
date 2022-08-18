import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Image from 'next/image'
import { ExtrenalLinkIcon } from '@chakra-ui/icons'

import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'



const Work = () => {
    return (

        <Layout title="UnnamedCG">

            <Container>

                <br />
                <Title>Unnamed Card Game
                    <Badge> 2022</Badge>
                </Title>
                <P>
                    An Express app that allows users to create and sort custom playing cards and decks. Built With Express, MongoDB, Node, Liquid, Javascript.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://unnamedcardgame.herokuapp.com">
                            https://unnamedcardgame.herokuapp.com/
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Github</Meta>
                        <Link href="https://github.com/sdragone01/PROJECT-2-UNNAMED-CARDGAME">https://github.com/sdragone01/PROJECT-2-UNNAMED-CARDGAME
                        </Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Work;