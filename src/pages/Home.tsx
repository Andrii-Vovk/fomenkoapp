import { Box, Heading } from "@chakra-ui/react";
import BasicInfoCard, {
    BasicInfoCardProps,
} from "../ui/components/BasicInfoCard";
import { CiLocationOn } from "react-icons/ci";
import Masonry from "react-responsive-masonry";
import ChartCard from "../features/charts/components/chartCard";
import HistoryMap from "../features/charts/components/historyMap";
import DocumentsData from "../ui/components/DocumentsData";
import { ContactListItem } from "../ui/components/ContactInfoList";
import ContactList from "../features/userList/components/ContactList";
import { MdAlternateEmail, MdPhone } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import RequestTable, { RefugeeHelpRequest } from "../features/userList/components/RequestTable";
import IncomePieChart from "../features/charts/components/incomePieChart";
import IncomeLineChart from "../features/charts/components/incomeLineChart";

const Home = () => {
    const mockBasicInfoCardData: BasicInfoCardProps = {
        imageSrc:
            "https://res.cloudinary.com/druw4nfh6/image/upload/w_320/v1/teenslang/imvjebp3zhdyzwyixqah",
        name: "Андрій Бебрововк",
        gender: "female",
        age: 48,
        list: [
            {
                icon: <CiLocationOn fontSize={"1.5em"} />,
                text: "Радехів, Червоноградський район",
            },
        ],
    };

    const historyMapData = [
        ["Регіон", "Назва", "Кількість проведених днів"],
        ["UA-21", "Закарпатська область", 69],
        ["UA-46", "Львівська область", 420],
        ["UA-61", "Тернопільська область", 180],
    ];

    const documentData = [
        {
            type: "dmsu",
            text: "Прописаний в червоноградській раді, має статус ВПО",
        },
        { type: "diia", text: "Номер ID-картки: 0800312800" },
        {
            type: "helsi",
            text: "Має сифіліс, СНІД, герпес, гонорею та інші хвороби що передаються статевим шляхом",
        },
    ];

    const contactData: ContactListItem[] = [
        {
            icon: <MdAlternateEmail />,
            text: "vovk@bebra.com",
            title: "E-mail",
        },
        {
            icon: <MdPhone />,
            text: "+38123456789",
            title: "Телефон",
        },
        {
            icon: <FaTelegramPlane />,
            text: "bebrovovk42069",
            title: "Telegram",
        },
    ];

    const mockRequests: RefugeeHelpRequest[] = [
        {
            createdAt: new Date(),
            name: 'Pussy request',
            status: "in review",
            description: 'Хроні'
        }
    ]

    return (
        <Box pl={"2em"} pt={"2em"}>
            <Heading fontSize={"3em"} fontWeight={500} mb={"1rem"}>
                Ваша статистика
            </Heading>
            <Masonry columnsCount={3} gutter={"1em"}>
                <BasicInfoCard {...mockBasicInfoCardData} />
                <ContactList items={contactData} />
                <DocumentsData documentData={documentData} />
                <ChartCard
                    cardTitle="Історія місця проживання"
                    chartElement={<HistoryMap data={historyMapData} />}
                />
                <ChartCard cardTitle="Дохід" chartElement={<IncomePieChart aid={6000} salary={3000} />} />
                <RequestTable requests={mockRequests} />
                <ChartCard cardTitle="Графік доходів" chartElement={<IncomeLineChart />} />

            </Masonry>
        </Box>
    );
};

export default Home;
