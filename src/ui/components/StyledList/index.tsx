import { Text } from "@chakra-ui/react";
import styles from "./styles.module.scss";

export interface ListItem {
  text: string;
  icon: React.ReactNode;
}

interface Props {
  items: ListItem[];
}

const StyledList: React.FC<Props> = ({ items }) => {
  return (
    <ul className={styles.wrapper}>
      {items.map((item) => (
        <li className={styles.listItem}>
          <Text fontSize="2xl">{item.text}</Text>
          {item.icon}
        </li>
      ))}
    </ul>
  );
};

export default StyledList;
