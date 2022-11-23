import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  VStack,
  Text,
  Divider,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";

import dmsu from "./images/dmsu.png";
import diia from "./images/diia.png";
import helsi from "./images/helsi.png";

export type DocumentItemProp = {
  type: string;
  text: string;
};

interface DocumentsDataProps {
  documentData: DocumentItemProp[];
}

const DocumentsData: FunctionComponent<DocumentsDataProps> = (props) => {
  const imageMapper: any = {
    dmsu: dmsu,
    diia: diia,
    helsi: helsi,
  };

  return (
    <Card>
      <CardHeader pb={"1em"}>
        <Heading fontWeight={500} fontSize={"1.5rem"}>
          Ваші документи
        </Heading>
      </CardHeader>
      <CardBody pt={0}>
        <VStack gap={"0.3em"}>
          {props.documentData.map((e) => {
            return (
              <>
                <Flex alignItems={"center"} width={"100%"}>
                  <Image src={imageMapper[e.type]} width={"1.5em"} mr={"1em"} />
                  <Text flex={1} color={"gray.600"} fontSize={"14px"}>
                    {e.text}
                  </Text>
                </Flex>
                <Divider />
              </>
            );
          })}
        </VStack>
      </CardBody>
    </Card>
  );
};

export default DocumentsData;
