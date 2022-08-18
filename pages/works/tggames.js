import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Image from 'next/image'
import { ExtrenalLinkIcon } from '@chakra-ui/icons'

import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'



const Work = () => {
    return (

        <Layout title="tggames">

            <Container>

                <br />
                <Title>Thunder Gun Games
                    <Badge> 2022</Badge>
                </Title>
                <P>
                    A MERN stack app that allows users to upload and play HTML games. Built With Express, MongoDB, Node, React, and React Hooks.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://thundergungames.herokuapp.com/">
                            https://thundergungames.herokuapp.com/
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Github</Meta>
                        <Link href="https://github.com/sdragone01/SEIR-Project-3">https://github.com/sdragone01/SEIR-Project-3
                        </Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Work;