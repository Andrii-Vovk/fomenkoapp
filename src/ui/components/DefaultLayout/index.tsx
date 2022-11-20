import { Box, Flex } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import Navbar from "../Navbar";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DefaultLayoutProps {
    children: React.ReactNode;
}
 
const DefaultLayout: FunctionComponent<DefaultLayoutProps> = (props) => {
    return (<Flex>
        <Navbar />
        <Box flex={1} height={'100vh'}>{props.children}</Box>
    </Flex>);
}
 
export default DefaultLayout;