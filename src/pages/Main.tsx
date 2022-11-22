import { Box, Button, Card, CardBody, CardHeader, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import Masonry from "react-responsive-masonry";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store";

const Main = () => {
    const store = useUserStore();
    const navigate = useNavigate();
    return (
        <div>
            <Heading fontSize={"2.5em"} fontWeight={500} m={"1rem"} textAlign="center">
                Інформаційно-комунікаційний хаб соціальної адаптації
            </Heading>
            <Box p={"2em"}>
                <Heading fontSize={"2em"} fontWeight={500} mb={"2rem"}>
                    Вітаємо, {store.user.username}
                    <Text fontSize="md" mt="0.5rem" color="gray.600">
                        Оберіть потрібний пункт
                    </Text>
                </Heading>
                <Masonry columnsCount={3} gutter={"1em"}>
                    <ModuleCard title="Модуль обліку" description="Облік фінансів" />
                    <ModuleCard title="Інформаційний модуль" description="Отримати загальну інформацію" />
                    <ModuleCard title="Комунікаційний модуль" description="Зв'яжіться з нашими спеціалістами" />
                    <ModuleCard title="Модуль формування допомоги" description="Отримайте допомогу" />
                    <ModuleCard
                        title="Модуль аналізу і статистики"
                        description="Дізнайтеся статистику"
                        buttonText="Відкрити"
                        onButtonClick={() => navigate('/home')}
                    />
                </Masonry>
            </Box>
        </div>
    );
}

function ModuleCard({
    title,
    description,
    icon,
    buttonText,
    onButtonClick,
}: { title: string, description: string, icon?: JSX.Element, buttonText?: string, onButtonClick?: () => void }) {
    return (
        <Card minH="10rem">
            <CardHeader p="0.5em 1em">
                <Heading size="lg">{title}</Heading>
            </CardHeader>
            <CardBody>
                <Flex direction="column">
                    {icon}
                    <Text fontSize="md" color="gray.600">
                        {description}
                    </Text>
                    <Spacer flexGrow="1" />
                    {buttonText && (
                        <Button alignSelf="end" colorScheme="facebook" fontSize={"1.2rem"} onClick={onButtonClick}>
                            {buttonText}
                        </Button>
                    )}
                </Flex>
            </CardBody>
        </Card>
    );
}

export default Main;
