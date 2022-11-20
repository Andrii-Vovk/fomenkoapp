import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import ContactInfoList, {
  ContactListItem,
} from "../../../../ui/components/ContactInfoList";

interface ContactListProps {
  items: ContactListItem[];
}

const ContactList: React.FC<ContactListProps> = ({ items }) => {
  return (
    <Card>
      <CardHeader>
      <Heading fontWeight={500} fontSize={'1.5rem'}>Контактна інформація</Heading>
      </CardHeader>
      <CardBody>
        <ContactInfoList items={items} />
      </CardBody>
    </Card>
  );
};

export default ContactList;
