import styles from "./styles.module.scss";
import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import StyledList, { ListItem } from "../StyledList";

interface Props {
  list: ListItem[];
}

const BasicInfoCard: React.FC<Props> = ({ list }) => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Contact Info</Heading>
      </CardHeader>
      <CardBody>
        <div className={styles.list}>
          <StyledList items={list} />
        </div>
      </CardBody>
    </Card>
  );
};

export default BasicInfoCard;
