import { Text } from "@chakra-ui/react";
import styles from "./styles.module.scss";

export interface ListItem {
  text: React.ReactNode;
  icon: React.ReactNode;
}

interface Props {
  items: ListItem[];
}

const StyledList: React.FC<Props> = ({ items }) => {
  return (
    <ul className={styles.wrapper}>
      {items.map((item) => (
        <li className={styles.listItem} key={item.text?.toString()}>
          <Text fontSize="xl">{item.text}</Text>
          {item.icon}
        </li>
      ))}
    </ul>
  );
};

export default StyledList;
