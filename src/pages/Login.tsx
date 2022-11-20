import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Heading, Input, VStack } from "@chakra-ui/react";
import { FunctionComponent } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LoginProps {

}

const Login: FunctionComponent<LoginProps> = () => {
    return (<Center height={'100vh'}>
        <Card size={'lg'} width={'20vw'}>
            <CardHeader pb={'0px'}>
                <Heading size='lg' fontWeight={'400'}>Login</Heading>
            </CardHeader>
            <CardBody pb={'1rem'}>
                <VStack spacing={'1rem'}>
                    <Input variant='flushed' placeholder='Login' />
                    <Input variant='flushed' placeholder='Password' type='password' />
                </VStack>
            </CardBody>
            <CardFooter justifyContent={'flex-end'} pt={0} pb={'1em'}>
                <Button colorScheme='facebook' fontSize={'1.2rem'}>Log in</Button>
            </CardFooter>
        </Card>
    </Center>);
}

export default Login;