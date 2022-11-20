import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Table,
  Tag,
  TagLabel,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { AiOutlineInfoCircle } from "react-icons/ai";

export interface RefugeeHelpRequest {
  name: React.ReactNode;
  createdAt: Date;
  status: "fulfilled" | "approved" | "in review" | "declined";
  description?: React.ReactNode;
}

interface RequestTableProps {
  requests: RefugeeHelpRequest[];
}

const RequestTable: React.FC<RequestTableProps> = ({ requests }) => {
  const colors = {
    fulfilled: "blue",
    approved: "green",
    "in review": "yellow",
    declined: "red",
    default: "gray",
  } as const;

  const statuses = {
    fulfilled: { table: "Виконано", popover: "Результат" },
    approved: { table: "Погоджено", popover: "Деталі" },
    "in review": { table: "В обробці", popover: "" },
    declined: { table: "Відхилено", popover: "Причина" },
  } as const;

  return (
    <Card>
      <CardHeader>
        <Heading size="md">Запити</Heading>
      </CardHeader>
      <CardBody>
        <Table>
          <Thead>
            <Tr>
              <Th>Назва</Th>
              <Th>Дата створення</Th>
              <Th>Статус</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr
              _hover={{ bg: "rgba(0, 0, 20, 0.02)" }}
              transition={"all 0.3s"}
              cursor={"pointer"}
            >
              {requests.map((request) => (
                <>
                  <Td>{request.name}</Td>
                  <Td>{dayjs(request.createdAt).format("DD MMMM YYYY")}</Td>
                  <Td>
                    <Tag
                      size="md"
                      borderRadius="full"
                      variant="solid"
                      colorScheme={colors[request.status] ?? colors.default}
                    >
                      <TagLabel>
                        {statuses[request.status]?.table ?? request.status}
                      </TagLabel>
                    </Tag>
                  </Td>
                  {request.description && (
                    <Td>
                      <Popover trigger="hover">
                        <PopoverTrigger>
                          <IconButton
                            aria-label="info button"
                            icon={<AiOutlineInfoCircle />}
                            size="xs"
                          >
                            Info
                          </IconButton>
                        </PopoverTrigger>
                        <PopoverContent>
                          <PopoverArrow />
                          <PopoverCloseButton />
                          <PopoverBody>{request.description}</PopoverBody>
                        </PopoverContent>
                      </Popover>
                    </Td>
                  )}
                </>
              ))}
            </Tr>
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default RequestTable;
