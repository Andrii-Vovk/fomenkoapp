import { Box, Heading } from "@chakra-ui/react";
import BasicInfoCard, {
  BasicInfoCardProps,
} from "../ui/components/BasicInfoCard";
import { CiLocationOn } from "react-icons/ci";
import { MdFamilyRestroom } from "react-icons/md";
import Masonry from "react-responsive-masonry";
import ChartCard from "../features/charts/components/chartCard";
import HistoryMap from "../features/charts/components/historyMap";
import DocumentsData from "../ui/components/DocumentsData";
import { ContactListItem } from "../ui/components/ContactInfoList";
import ContactList from "../features/userList/components/ContactList";
import { MdAlternateEmail, MdPhone } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import RequestTable, {
  RefugeeHelpRequest,
} from "../features/userList/components/RequestTable";
import IncomePieChart from "../features/charts/components/incomePieChart";
import IncomeLineChart from "../features/charts/components/incomeLineChart";
import { useQuery } from "react-query";
import { getLocationHistory, getUser } from "../api";
import useUserStore from "../store";
import FullPageLoader from "../ui/components/Loader/FullPageLoader";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import districts from "../config/districts";
dayjs.extend(relativeTime);

const Home = () => {
  const store = useUserStore();
  const userId = store.user.userId;
  const { data: userData, isLoading: isUserLoading } = useQuery(
    ["get-user", userId],
    () => getUser({ id: userId ?? 0 })
  );
  const { data: locationData, isLoading } = useQuery(
    ["get-location", store.user.userId],
    () => getLocationHistory({ id: userId ?? 0 })
  );

  const basicInfoCardData: BasicInfoCardProps = {
    imageSrc: userData?.data.profileUrl ?? "",
    age: dayjs().diff(userData?.data.birthdate, "year"),
    gender: userData?.data.sex === "male" ? "male" : "female",
    name: `${userData?.data.firstName} ${userData?.data.lastName}`,
    list: [
      {
        icon: <CiLocationOn fontSize={"1.5em"} />,
        text: userData?.data.currentLocation,
      },
      {
        icon: <MdFamilyRestroom fontSize={"1.5em"} />,
        text: userData?.data.familyStatus,
      },
    ],
  };

  const historyMapData = [
    ["Регіон", "Назва", "Переїхав днів тому"],
    ...(locationData?.data?.map((loc) => [
      loc.regionAbbreviation,
      districts[loc.regionAbbreviation] ?? districts.default,
      dayjs().diff(dayjs(loc.arrivedAt), "day"),
    ]) ?? []),
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
      text: userData?.data.email ?? "-",
      title: "E-mail",
    },
    {
      icon: <MdPhone />,
      text: userData?.data.phoneNumber ?? "-",
      title: "Телефон",
    },
    {
      icon: <FaTelegramPlane />,
      text: userData?.data.telegram ?? "-",
      title: "Telegram",
    },
  ];

  const mockRequests: RefugeeHelpRequest[] = [
    {
      createdAt: new Date(),
      name: "Pussy request",
      status: "in review",
      description: "Хроні",
    },
  ];

  if (isUserLoading) {
    return <FullPageLoader />;
  }

  return (
    <Box pl={"2em"} pt={"2em"}>
      <Heading fontSize={"3em"} fontWeight={500} mb={"1rem"}>
        Ваша статистика
      </Heading>
      <Masonry columnsCount={3} gutter={"1em"}>
        <BasicInfoCard {...basicInfoCardData} />
        <ContactList items={contactData} />
        <DocumentsData documentData={documentData} />
        <ChartCard
          cardTitle="Історія місця проживання"
          chartElement={<HistoryMap data={historyMapData} />}
        />
        <ChartCard
          cardTitle="Дохід"
          chartElement={<IncomePieChart aid={6000} salary={3000} />}
        />
        <RequestTable requests={mockRequests} />
        <ChartCard
          cardTitle="Графік доходів"
          chartElement={<IncomeLineChart />}
        />
      </Masonry>
    </Box>
  );
};

export default Home;
