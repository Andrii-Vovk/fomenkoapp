import styles from "./styles.module.scss";
import { Avatar, Card, CardBody, Text } from "@chakra-ui/react";
import StyledList, { ListItem } from "../StyledList";

export interface BasicInfoCardProps {
  imageSrc: string;
  name: string;
  gender: "male" | "female";
  age: number;
  list: ListItem[];
}

const BasicInfoCard: React.FC<BasicInfoCardProps> = ({
  imageSrc,
  name,
  gender,
  age,
  list,
}) => {
  return (
    <Card>
      <CardBody>
        <div className={styles.headerWrapper}>
          <Avatar size="2xl" name={name} src={imageSrc} />
          <div className={styles.titleWrapper}>
            <Text fontSize="5xl" as="h3">
              {name}
            </Text>
            <Text fontSize="3xl" color="gray.400">
              {gender === "male" ? "Чоловік" : "Жінка"}, {age}
            </Text>
          </div>
        </div>
        <div className={styles.list}>
          <StyledList items={list} />
        </div>
      </CardBody>
    </Card>
  );
};

export default BasicInfoCard;
