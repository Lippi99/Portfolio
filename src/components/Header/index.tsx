import { css } from "../../stitches.config";
import { Box } from "../Box";
import { Flex } from "../Flex";
import i18next from "i18next";
import { Dropdown, Menu } from "antd";
import { HiTranslate } from "react-icons/hi";
import { Burger } from "../Burguer";

export const Header = () => {
  const header = css({
    variants: {
      variant: {
        header: {
          padding: "$3 $9",
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          zIndex: 100,
        },
        logo: {
          fontFamily: `Open Sans, sans-serif, Roboto Condensed, sans-serif`,
          color: "$purple200",
          marginBottom: 0,
        },
        list: {
          listStyleType: "none",
          "@bp2": { display: "none" },
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

  const menu = (
    <Menu onClick={handleLanguage}>
      <Menu.Item key="en">English</Menu.Item>
      <Menu.Item key="pt">Portuguese</Menu.Item>
    </Menu>
  );

  const logo = "<Solomon.dev  />";

  return (
    <Box as="header" className={header({ variant: "header" })}>
      <Burger />
      <nav>
        <Flex
          className={header({ variant: "list" })}
          as="ul"
          justify="between"
          align="center"
        >
          <h1 className={header({ variant: "logo" })}> {logo}</h1>
          <Flex align="center">
            <a href="#about">
              <li className={header({ variant: "item" })}>
                {i18next.t<string>("about")}
              </li>
            </a>
            <a href="#projects">
              <li className={header({ variant: "item" })}>
                {i18next.t<string>("portfolio")}
              </li>
            </a>

            <Dropdown overlay={menu}>
              <HiTranslate fontSize={20} color="rgb(139, 233, 253)" />
            </Dropdown>
          </Flex>
        </Flex>
      </nav>
    </Box>
  );
};
