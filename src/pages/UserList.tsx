import { Box, Button, Heading, IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FunctionComponent, useState } from "react";
import { BsSearch } from "react-icons/bs";
import UserListItself from "../features/userList/components/UserListItself";
import { UserListItem } from "../features/userList/types";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface UserListProps {

}

const UserList: FunctionComponent<UserListProps> = () => {

    const [searchQuery, setSearchQuery] = useState<string>('');

    const mockUserData: UserListItem[] = [
        {
            pfpUrl: 'https://m.media-amazon.com/images/M/MV5BZGRjZTczNWItMDk3NS00YmI0LTlmOTktYTQ4ZWQ1MzI1NmRhXkEyXkFqcGdeQXVyMzI5NDcxNzI@._V1_.jpg',
            name: 'Андрій Бебронюх',
            currentLocation: 'Радехів, Львівська область',
            phoneNumber: '+3808428872217',
            status: 'passive'
        }
    ]

    return (<Box p={'20vh 4rem 0 4rem'}>
        <Heading fontWeight={'400'} mb={'3rem'}>Знайти тимчасово переміщену особу за іменем</Heading>
        <InputGroup size='md' mb={'2em'}>
            <Input
                pr='4.5rem'
                placeholder="Введіть ім'я ТПО"
                fontSize={'1.3em'}
                height={'3em'}
                onChange={(e)=>setSearchQuery(e.target.value)}
            />
            <InputRightElement p={0} height={'100%'} width={'5em'}>
                <IconButton icon={<BsSearch fontSize={'23px'} />} aria-label={""} bg={'transparent'} height={'100%'} width={'100%'} />
            </InputRightElement>
        </InputGroup>

        <UserListItself users={mockUserData.filter(e=>e.name.includes(searchQuery))} />

    </Box>);
}

export default UserList;