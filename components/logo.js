import Link from 'next/link';
import Image from 'next/image';
import dragoneLogolight from '../assets/dragoneLogolight.png';
import dragoneLogodark from '../assets/dragoneLogodark.png';
import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';

const LogoBox = styled.span`
    font-weight: bold;
    font-size:18px;
    display: inline-flex;
    align-items: center;
    height:30px;
    line-height:20px;
    padding: 10px;

    &:hover img{
        transform: rotate(20deg);
    }

`


const Logo = () => {

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={useColorModeValue(dragoneLogolight, dragoneLogodark)} alt="Dragone Logo" width={20} height={20} />

                    {/* <Image src={`dragoneLogo${useColorModeValue}`} alt="Sal Dragone" width={20} height={20} /> */}
                    <Text
                        fontWeight="bold"
                        ml={3}>

                        Sal Dragone
                    </Text>
                </LogoBox>

            </a>
        </Link>

    )
}

export default Logo;