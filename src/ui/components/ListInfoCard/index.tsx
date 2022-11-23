import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import StyledList, { ListItem } from "../StyledList";

interface Props {
  title: React.ReactNode;
  list: ListItem[];
}

const ListInfoCard: React.FC<Props> = ({ list, title }) => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>
      <CardBody>
        <StyledList items={list} />
      </CardBody>
    </Card>
  );
};

export default ListInfoCard;
