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
import { BsCheckLg, BsXLg } from "react-icons/bs";
import RequestTable, {
  RefugeeHelpRequest,
} from "../features/userList/components/RequestTable";
import IncomePieChart from "../features/charts/components/incomePieChart";
import IncomeLineChart from "../features/charts/components/incomeLineChart";
import { useQuery } from "react-query";
import {
  getDocuments,
  getLocationHistory,
  getRequests,
  getSalaryHistory,
  getUser,
} from "../api";
import useUserStore from "../store";
import FullPageLoader from "../ui/components/Loader/FullPageLoader";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import districts from "../config/districts";
import ListInfoCard from "../ui/components/ListInfoCard";
dayjs.extend(relativeTime);

const Home = () => {
  const store = useUserStore();
  const userId = store.user.userId;

  const { data: userData, isLoading: isUserLoading } = useQuery(
    ["get-user", userId],
    () => getUser({ id: userId ?? 0 })
  );
  const { data: locationData, isLoading: isLocationHistoryLoading } = useQuery(
    ["get-location", store.user.userId],
    () => getLocationHistory({ id: userId ?? 0 })
  );
  const { data: documentsData, isLoading: documentsLoading } = useQuery(
    ["get-documents", store.user.userId],
    () => getDocuments({ id: userId ?? 0 })
  );
  const { data: requestsData, isLoading: requestsLoading } = useQuery(
    ["get-requests", store.user.userId],
    () => getRequests({ id: userId ?? 0 })
  );
  const { data: salaryData, isLoading: salaryLoading } = useQuery(
    ["get-salary", store.user.userId],
    () => getSalaryHistory({ id: userId ?? 0 })
  );

  const getIcon = (bool: boolean | undefined) =>
    bool ? <BsCheckLg color="green" /> : <BsXLg color="red" />;

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

  const documentData =
    documentsData?.data.map((doc) => ({
      type: doc.type,
      text: doc.description,
    })) ?? [];

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

  const needsList = [
    {
      icon: getIcon(userData?.data.isEmployed),
      text: "Працевлаштований",
    },
    {
      icon: getIcon(userData?.data.hasHouse),
      text: "Має житло",
    },
  ];

  const totalSalary = {
    aid: salaryData?.data.reduce((acc, curr) => acc + curr.aidIncome, 0) ?? 0,
    salary:
      salaryData?.data.reduce((acc, curr) => acc + curr.salaryIncome, 0) ?? 0,
  };

  const requestsItems: RefugeeHelpRequest[] =
    requestsData?.data.map(({ createdAt, description, name, status }) => {
      return {
        createdAt: new Date(createdAt),
        name,
        status,
        description,
      } as RefugeeHelpRequest;
    }) ?? [];

  if (
    isUserLoading ||
    isLocationHistoryLoading ||
    documentsLoading ||
    requestsLoading
  ) {
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
        <ListInfoCard list={needsList} title="Базові Потреби" />
        <ChartCard
          cardTitle="Історія місця проживання"
          chartElement={<HistoryMap data={historyMapData} />}
        />
        <ChartCard
          cardTitle="Дохід"
          chartElement={<IncomePieChart {...totalSalary} />}
        />
        <RequestTable requests={requestsItems} />
        <ChartCard
          cardTitle="Графік доходів"
          chartElement={
            <IncomeLineChart
              userData={salaryData?.data.map((d) => d.salaryIncome) ?? []}
              aidData={salaryData?.data.map((d) => d.aidIncome) ?? []}
              averageData={Array.from({ length: 12 }).fill(4000) as number[]}
            />
          }
        />
      </Masonry>
    </Box>
  );
};

export default Home;
