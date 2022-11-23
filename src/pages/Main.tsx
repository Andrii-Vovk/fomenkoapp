import { Box, Button, Card, CardBody, CardHeader, Fade, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useNavigate } from "react-router-dom";
import { BsInfoSquare, BsCreditCard, BsChatRightText, BsBasket, BsFileBarGraph } from "react-icons/bs";
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
                    <Text as="span" color="red.600" fontSize="md" ml="0.5rem" cursor="pointer" onClick={() => store.removeUser()}>Вихід</Text>
                    <Text fontSize="md" mt="0.5rem" color="gray.600">
                        Оберіть потрібний модуль
                    </Text>
                </Heading>
                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                    <Masonry columnsCount={3} gutter={"1em"}>
                        <ModuleCard title="Модуль обліку" description="Облік фінансів" icon={<BsCreditCard size="3rem" />} />
                        <ModuleCard title="Інформаційний модуль" description="Отримати загальну інформацію" icon={<BsInfoSquare size="3rem" />} />
                        <ModuleCard title="Комунікаційний модуль" description="Зв'яжіться з нашими спеціалістами" icon={<BsChatRightText size="3rem" />} />
                        <ModuleCard title="Модуль формування допомоги" description="Отримайте допомогу" icon={<BsBasket size="3rem" />} />
                        <ModuleCard
                            title="Модуль аналізу і статистики"
                            description="Дізнайтесь статистику"
                            icon={<BsFileBarGraph size="3rem" />}
                            buttonText="Відкрити"
                            onButtonClick={() => navigate('/home')}
                        />
                    </Masonry>
                </ResponsiveMasonry>
            </Box>
        </div>
    );
}

export function ModuleCard({
    title,
    description,
    icon,
    buttonText,
    onButtonClick,
}: { title: string, description: string, icon?: JSX.Element, buttonText?: string, onButtonClick?: () => void }) {
    return (
        <Fade in>
            <Card minH="12rem" _hover={{ backgroundColor: 'gray.100' }} transition="background-color 150ms ease-in">
                <CardHeader p="0.5em 1em" display="flex" alignItems="center" gap="1rem">
                    {icon}
                    <Heading size="lg">{title}</Heading>
                </CardHeader>
                <CardBody>
                    <Flex direction="column">
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
        </Fade>
    );
}

export default Main;
