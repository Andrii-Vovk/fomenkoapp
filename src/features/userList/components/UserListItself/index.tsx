import { Avatar, Center, Table, TableContainer, Tag, TagCloseButton, TagLabel, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { UserListItem } from "../../types";

interface UserListItselfProps {
    users: UserListItem[];
}

const UserListItself: FunctionComponent<UserListItselfProps> = (props) => {
    return (<TableContainer>
        <Table>
            <Thead>
                <Tr>
                    <Th></Th>
                    <Th>Прізвище, ім'я, по батькові</Th>
                    <Th>Поточне місце проживання</Th>
                    <Th>Номер телефону</Th>
                    <Th>Статус</Th>
                </Tr>
            </Thead>
            <Tbody>
                {props.users.map(e => {
                    return <Tr _hover={{ bg: 'rgba(0, 0, 20, 0.02)' }} transition={'all 0.3s'} cursor={'pointer'}>
                        <Td><Avatar src={e.pfpUrl} /></Td>
                        <Td>{e.name}</Td>
                        <Td>{e.currentLocation}</Td>
                        <Td>{e.phoneNumber}</Td>
                        <Td>
                            <Tag
                                size='md'
                                borderRadius='full'
                                variant='solid'
                                colorScheme={e.status === 'active' ? 'green' : 'gray'}
                            >
                                <TagLabel>{e.status === 'active' ? 'Активний' : 'Архівований'}</TagLabel>
                            </Tag></Td>
                    </Tr>
                })}
            </Tbody>
        </Table>
        {props.users.length===0 && <Center height={'9rem'} fontSize={'1.5em'} opacity={0.5}> Користувачів не знайдено</Center>}
    </TableContainer>);
}

export default UserListItself;