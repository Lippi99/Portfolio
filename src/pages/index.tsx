import { Box } from "../components/Box";
import { Header } from "../components/Header";
import reactLogo from "../assets/react.svg";
import look from "../assets/look.svg";
import { Section } from "../components/Section";
import { css, keyframes } from "../stitches.config";
import { Flex } from "../components/Flex";
import i18next from "i18next";

export const Home = () => {
  const reactRotate = keyframes({
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  });

  const typeWrite = keyframes({
    from: {
      width: 0,
    },
    to: {
      width: "100%",
    },
  });

  const text = css({
    variants: {
      variant: {
        title: {
          fontSize: "2rem",
          color: "$light",
          fontFamily: `Roboto, sans-serif`,
          fontWeight: 900,
          animation: `${typeWrite} 1000ms steps(30,end) 500ms 1 normal both`,
          whiteSpace: "nowrap",
          overflow: "hidden",
        },
        span: {
          fontSize: "2rem",
          color: "$blue200",
          whiteSpace: "nowrap",
          overflow: "hidden",
          fontFamily: `Open Sans, sans-serif, Roboto Condensed, sans-serif`,
          animation: `${typeWrite} 1000ms steps(30,end) 1700ms 1 normal both`,
          fontWeight: "bolder",
        },
      },
    },
  });

  return (
    <Box
      css={{
        background: "$backgroundLightMode",
        width: "100vw",
        minHeight: "100vh",
      }}
    >
      <Header />

      <Section
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "$4 $4",
          overflow: "hidden",

          "@bp3": {
            flexDirection: "column-reverse",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          },
        }}
      >
        <Box css={{ maxWidth: "632px", width: "100%", lineHeight: 1.5 }}>
          <h2
            className={text({
              variant: "title",
            })}
          >
            {i18next.t<string>("name")}
          </h2>
          <h2 className={text({ variant: "span" })}>Front-End developer.</h2>
        </Box>
        <Flex align="center">
          <Box css={{ position: "relative" }}>
            <img
              style={{ objectFit: "contain" }}
              width="700px"
              height="600px"
              src={look}
              alt="look"
            />
            <Box
              css={{
                position: "absolute",
                left: "50%",
                top: "54%",
                transform: "translateX(-50%, -50%)",
              }}
            >
              <img
                className={reactRotate()}
                style={{ animation: `${reactRotate} 10000ms infinite linear` }}
                src={reactLogo}
                width="120px"
                height="120px"
                alt="pc"
              />
            </Box>
          </Box>
        </Flex>
      </Section>
    </Box>
  );
};
