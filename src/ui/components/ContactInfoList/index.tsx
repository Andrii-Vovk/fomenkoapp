import styles from "./styles.module.scss";
import { Text } from "@chakra-ui/react";

export interface ContactListItem {
  title: React.ReactNode;
  text: React.ReactNode;
  icon: React.ReactNode;
}

interface ContactInfoListProps {
  items: ContactListItem[];
}

const ContactInfoList: React.FC<ContactInfoListProps> = ({ items }) => {
  return (
    <ul className={styles.wrapper}>
      {items.map((item) => (
        <li className={styles.listItem} key={'' + item.title}>
          <div className={styles.flex}>
            {item.icon}
            <Text fontSize="2xl">{item.title}</Text>
          </div>
          <Text fontSize="xl" color="gray.600">
            {item.text}
          </Text>
        </li>
      ))}
    </ul>
  );
};

export default ContactInfoList;
