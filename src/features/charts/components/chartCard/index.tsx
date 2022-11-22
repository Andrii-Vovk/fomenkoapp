import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import Loader from "../../../../ui/components/Loader";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ChartCardProps {
  cardTitle: string;
  chartElement: React.ReactNode;
  isLoading?: boolean;
}

const ChartCard: FunctionComponent<ChartCardProps> = (props) => {
  if (props.isLoading) {
    return (
      <Card>
        <Loader />
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader pb={0}>
        <Heading fontWeight={500} fontSize={"1.5rem"}>
          {props.cardTitle}
        </Heading>
      </CardHeader>
      <CardBody pt={0}>{props.chartElement}</CardBody>
    </Card>
  );
};

export default ChartCard;
