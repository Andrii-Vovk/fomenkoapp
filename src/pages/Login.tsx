import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Heading,
  Input,
  ScaleFade,
  VStack,
} from "@chakra-ui/react";
import { FunctionComponent, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { signIn } from "../api";
import useUserStore from "../store";

interface LoginState {
  username: string;
  password: string;
}

const Login: FunctionComponent = () => {
  const store = useUserStore();

  const navigate = useNavigate();

  const { mutateAsync } = useMutation(signIn, {
    onSuccess: (user) => {
      store.addUser(user.data);
      ["organization", "admin"].includes(user.data.role)
        ? navigate("/user-search")
        : navigate("/");
    },
  });

  const [loginState, setLoginState] = useState<LoginState>({
    username: "",
    password: "",
  });

  const onLogin = async () => {
    await mutateAsync(loginState);
  };

  return (
    <Center height={"100vh"}>
      <ScaleFade in initialScale={0.5}>
        <Card size={"lg"} width={"20vw"}>
          <CardHeader pb={"0px"}>
            <Heading size="lg" fontWeight={"400"}>
              <b>І</b>нформаційно-<br/>
              <b>К</b>омунікаційний<br/>
              <b>Х</b>аб
            </Heading>
          </CardHeader>
          <CardBody pb={"1rem"}>
            <VStack spacing={"1rem"}>
              <Input
                variant="flushed"
                value={loginState.username}
                placeholder="Логін"
                onChange={(e) =>
                  setLoginState({
                    ...loginState,
                    username: e.target.value,
                  })
                }
              />
              <Input
                variant="flushed"
                placeholder="Пароль"
                value={loginState.password}
                type="password"
                onChange={(e) =>
                  setLoginState({
                    ...loginState,
                    password: e.target.value,
                  })
                }
              />
            </VStack>
          </CardBody>
          <CardFooter justifyContent={"flex-end"} pt={0} pb={"1em"}>
            <Button colorScheme="facebook" fontSize={"1.2rem"} onClick={onLogin}>
              Увійти
            </Button>
          </CardFooter>
        </Card>
      </ScaleFade>
    </Center>
  );
};

export default Login;
