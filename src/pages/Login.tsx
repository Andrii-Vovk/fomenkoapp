import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { AxiosError } from "axios";
import { FunctionComponent, useState } from "react";
import { useMutation } from "react-query";
import { signIn } from "../api";
import useUserStore from "../store";

interface LoginState {
  login: string;
  password: string;
}

const Login: FunctionComponent = () => {
  const store = useUserStore();

  //   const { data, mutateAsync } = useMutation("sign-in", signIn);

  const [loginState, setLoginState] = useState<LoginState>({
    login: "",
    password: "",
  });

  //   const onLogin () => {
  //      mutateAsync({ ...loginState });
  //   };

  return (
    <Center height={"100vh"}>
      <Card size={"lg"} width={"20vw"}>
        <CardHeader pb={"0px"}>
          <Heading size="lg" fontWeight={"400"}>
            Login
          </Heading>
        </CardHeader>
        <CardBody pb={"1rem"}>
          <VStack spacing={"1rem"}>
            <Input
              variant="flushed"
              value={loginState.login}
              placeholder="Login"
            />
            <Input
              variant="flushed"
              placeholder="Password"
              value={loginState.password}
              type="password"
            />
          </VStack>
        </CardBody>
        <CardFooter justifyContent={"flex-end"} pt={0} pb={"1em"}>
          <Button colorScheme="facebook" fontSize={"1.2rem"}>
            Log in
          </Button>
        </CardFooter>
      </Card>
    </Center>
  );
};

export default Login;
