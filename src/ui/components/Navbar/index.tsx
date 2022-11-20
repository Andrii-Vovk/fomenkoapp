import { VStack, Link, Box, Icon, Center } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { NavItem } from "./types";
import { BsHouseDoor, BsCreditCard, BsChatRightText } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = () => {
    const navItems: NavItem[] = [
        {
            icon: BsHouseDoor,
            tooltip: 'Go home',
            link: '/',
        },
        {
            icon: BiSearch,
            tooltip: 'Find a user',
            link: '/user-search',
        },
        {
            icon: BsCreditCard,
            tooltip: 'Aid info',
            link: '/aid',
        },
        {
            icon: BsChatRightText,
            tooltip: 'Chat with support',
            link: '/chat'
        }
    ]

    const navigate = useNavigate();

    return (<VStack
        boxShadow={'0px 0px 15px -3px rgba(0, 0, 0, 0.1), 10px 0px 6px -3px rgba(0, 0, 0, 0.05)'}
        height={'100vh'}
        width={'72px'}
        p={'1.25em 1em 1em 1em'}
    >
        {navItems.map(e => {
            return <Center 
                h={'40px'} 
                w={'40px'} 
                bg={'#E2E8F0'} 
                borderRadius={'6px'} 
                cursor={'pointer'} 
                onClick={() => navigate(e.link)}
            >
                <Icon as={e.icon} fontSize={'24px'} />
            </Center>
        })}
    </VStack>);
}

export default Navbar;