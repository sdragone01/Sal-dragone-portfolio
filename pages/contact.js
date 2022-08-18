import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/section';
import { PhoneIcon } from '@chakra-ui/icons';
import { EmailIcon } from '@chakra-ui/icons';

import Layout from '../components/layouts/article';

const Contact = () => {

    return (
        <Layout title="Contact">
            <Container>
                <Heading as='h3' fontSize={20} mb={4}>
                    Contact
                </Heading>
                <p> <PhoneIcon />  {`(856) 906-9884`}</p>
                <p> <EmailIcon />  {`SalRDragone@gmail.com`}</p>


            </Container>
        </Layout>

    )
}

export default Contact;
