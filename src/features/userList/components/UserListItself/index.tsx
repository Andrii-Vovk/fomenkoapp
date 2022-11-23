import {
  Avatar,
  Center,
  Table,
  TableContainer,
  Tag,
  TagLabel,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

interface UserListItselfProps {
  users: UserFromUserList[];
}

const DEFAULT_PFP =
  "https://m.media-amazon.com/images/M/MV5BZGRjZTczNWItMDk3NS00YmI0LTlmOTktYTQ4ZWQ1MzI1NmRhXkEyXkFqcGdeQXVyMzI5NDcxNzI@._V1_.jpg";

const UserListItself: FunctionComponent<UserListItselfProps> = (props) => {
  const navigate = useNavigate();

  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Прізвище, ім'я, по батькові</Th>
            <Th>Поточне місце проживання</Th>
            <Th>Статус</Th>
          </Tr>
        </Thead>
        <Tbody>
          {props.users.map((e) => {
            return (
              <Tr
                _hover={{ bg: "rgba(0, 0, 20, 0.02)" }}
                transition={"all 0.3s"}
                cursor={"pointer"}
                data-testId={`user-${e.id}`}
                onClick={() => navigate(`/user/${e.id}`)}
              >
                <Td>
                  <Avatar src={e.profileUrl || DEFAULT_PFP} />
                </Td>
                <Td>{e.fullName}</Td>
                <Td>{e.currentLocation}</Td>
                <Td>
                  <Tag
                    size="md"
                    borderRadius="full"
                    variant="solid"
                    colorScheme={e.isActive ? "green" : "gray"}
                  >
                    <TagLabel>
                      {e.isActive ? "Активний" : "Архівований"}
                    </TagLabel>
                  </Tag>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      {props.users.length === 0 && (
        <Center height={"9rem"} fontSize={"1.5em"} opacity={0.5}>
          Користувачів не знайдено
        </Center>
      )}
    </TableContainer>
  );
};

export default UserListItself;
