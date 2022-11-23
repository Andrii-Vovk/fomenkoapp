import { VStack, Icon, Center } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { NavItem } from "./types";
import { BsHouseDoor, BsCreditCard, BsChatRightText } from "react-icons/bs";
import { BiSearch, BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../../store";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  const store = useUserStore();

  const navItems: NavItem[] = [
    store.user.role === "user" && {
      icon: BsHouseDoor,
      tooltip: "Go home",
      link: "/",
    },
    store.user.role !== "user" && {
      icon: BiSearch,
      tooltip: "Find a user",
      link: "/user-search",
    },
    {
      icon: BsCreditCard,
      tooltip: "Aid info",
      link: "/aid",
    },
    {
      icon: BsChatRightText,
      tooltip: "Chat with support",
      link: "/chat",
    },
    {
      icon: BiLogOut,
      tooltip: "Log out",
      onClick: () => {
        store.removeUser();
      },
    },
  ].filter(Boolean) as NavItem[];

  const navigate = useNavigate();

  const onClick = (e: NavItem) => {
    if (e.onClick) {
      e.onClick();
      return;
    }
    if (e.link) {
      navigate(e.link);
      return;
    }
  };

  return (
    <VStack
      boxShadow={
        "0px 0px 15px -3px rgba(0, 0, 0, 0.1), 10px 0px 6px -3px rgba(0, 0, 0, 0.05)"
      }
      height={"100vh"}
      width={"80px"}
      p={"1.25em 1em 1em 1em"}
      position={"sticky"}
      top={0}
    >
      {navItems.map((e, index) => {
        return (
          <Center
            h={"50px"}
            w={"50px"}
            bg={"#E2E8F0"}
            borderRadius={"6px"}
            cursor={"pointer"}
            onClick={() => onClick(e)}
            data-testid={`nav-item-${index}`}
            transition="all 0.3s"
            _hover={{ transform: "scale(1.1)" }}
            marginTop={
              index === navItems.length - 1 ? "auto !important" : undefined
            }
          >
            <Icon as={e.icon} fontSize={"30px"} />
          </Center>
        );
      })}
    </VStack>
  );
};

export default Navbar;
