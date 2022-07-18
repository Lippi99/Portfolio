import { Box } from "../Box";
import { Flex } from "../Flex";
import { slide as MenuBurguer } from "react-burger-menu";
import { css } from "../../stitches.config";
import i18next from "i18next";
import { Dropdown, Menu } from "antd";
import { HiTranslate } from "react-icons/hi";

export const Burger = () => {
  const header = css({
    variants: {
      variant: {
        logo: {
          fontFamily: `Open Sans, sans-serif, Roboto Condensed, sans-serif`,
          color: "$purple200",
          marginBottom: "$4",
        },
        list: {
          width: "100%",
          flexDirection: "column",
          justifyContent: "flex-start",
          listStyleType: "none",
          "@bp2": { display: "none" },
        },

        item: {
          fontSize: "$5",
          marginRight: "$3",
          color: "$blue200",
          fontFamily: `Open Sans, sans-serif, Roboto Condensed, sans-serif`,
          marginBottom: "$4",
        },
      },
    },
  });

  const burgerStyle = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      left: "36px",
      top: "36px",
    },
    bmBurgerBars: {
      background: "white",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      left: "0",
      top: "0",
      height: "100%",
    },
    bmMenu: {
      background: "#383a59",
      paddingLeft: "1rem",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.7)",
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  };

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
    <Box css={{ display: "none", "@bp2": { display: "flex" } }}>
      <nav>
        <MenuBurguer styles={burgerStyle as any}>
          <Flex direction="column">
            <h1 className={header({ variant: "logo" })}> {logo}</h1>
          </Flex>

          <Flex className={header({ variant: "list" })} as="ul">
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
              <span className={header({ variant: "item" })}>
                {i18next.t<string>("translation")}
              </span>
            </Dropdown>
          </Flex>
        </MenuBurguer>
      </nav>
    </Box>
  );
};
