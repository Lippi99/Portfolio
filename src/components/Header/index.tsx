import { css } from "../../stitches.config";
import { Box } from "../Box";
import { Flex } from "../Flex";
import i18next from "i18next";
import { Dropdown, Menu } from "antd";
import { HiTranslate } from "react-icons/hi";

export const Header = () => {
  const header = css({
    variants: {
      variant: {
        header: {
          padding: "$3 $9",
        },
        logo: {
          fontFamily: `Open Sans, sans-serif, Roboto Condensed, sans-serif`,
          color: "$purple200",
        },
        list: {
          listStyleType: "none",
        },
        item: {
          fontSize: "$5",
          marginRight: "$3",
          color: "$blue200",
          fontFamily: `Open Sans, sans-serif, Roboto Condensed, sans-serif`,
        },
      },
    },
  });

  const handleLanguage = ({ key }: any) => {
    localStorage.setItem("lang", key);
    window.location.reload();
  };
  // saves the value
  // const lang = localStorage.getItem("lang") || "en";

  const menu = (
    <Menu onClick={handleLanguage}>
      <Menu.Item key="en">English</Menu.Item>
      <Menu.Item key="pt">Portuguese</Menu.Item>
    </Menu>
  );

  return (
    <Box as="header" className={header({ variant: "header" })}>
      <nav>
        <Flex
          className={header({ variant: "list" })}
          as="ul"
          justify="between"
          align="center"
        >
          <h1 className={header({ variant: "logo" })}>Solomon.dev</h1>
          <Flex align="center">
            <li className={header({ variant: "item" })}>
              {i18next.t<string>("about")}
            </li>
            <li className={header({ variant: "item" })}>
              {i18next.t<string>("portfolio")}
            </li>

            <Dropdown overlay={menu}>
              <HiTranslate fontSize={20} color="rgb(139, 233, 253)" />
            </Dropdown>
          </Flex>
        </Flex>
      </nav>
    </Box>
  );
};
