import { Box } from "../components/Box";
import { Header } from "../components/Header";
import reactLogo from "../assets/react.svg";
import look from "../assets/look.svg";
import { Section } from "../components/Section";
import { css, keyframes } from "../stitches.config";
import { Flex } from "../components/Flex";
import i18next from "i18next";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import me from "../assets/me.jpg";

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
        aboutTitle: {
          fontSize: "2rem",
          color: "$purple200",
          fontFamily: `Roboto, sans-serif`,
          fontWeight: 900,
        },
        aboutDescription: {
          fontSize: "1.1rem",
          textAlign: "justify",
          color: "$white200",
          fontFamily: `Inconsolata, monospace, Open Sans, sans-serif`,
        },
      },
    },
  });

  return (
    <Box
      css={{
        padding: "0 $3",
        background: "$backgroundLightMode",
      }}
    >
      <Header />

      <Section
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          overflow: "hidden",
          position: "relative",
          marginBottom: "$9",

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
        <Box
          css={{
            textAlign: "center",
            position: "absolute",
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <BsFillArrowDownCircleFill
            cursor="pointer"
            color="white"
            fontSize={30}
          />
        </Box>
      </Section>

      <Section>
        <Flex
          css={{
            padding: "0 $6",
            "@bp3": {
              flexDirection: "column-reverse",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            },
          }}
          align="center"
          justify="between"
        >
          <Box css={{ width: "50%" }}>
            <h2
              className={text({
                variant: "aboutTitle",
              })}
            >
              {i18next.t<string>("aboutMe")}
            </h2>
            <p
              className={text({
                variant: "aboutDescription",
              })}
            >
              {i18next.t<string>("aboutMeFirst")}
            </p>

            <p
              className={text({
                variant: "aboutDescription",
              })}
            >
              {i18next.t<string>("aboutMeSecond")}
            </p>

            <p
              className={text({
                variant: "aboutDescription",
              })}
            >
              {i18next.t<string>("aboutMeThird")}
            </p>
          </Box>
          <Box
            css={{
              width: "50%",
              textAlign: "center",
              height: "400px",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                width: "400px",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
                border: "5px solid rgb(139 233 253)",
              }}
              alt="me"
              src={me}
            />
          </Box>
        </Flex>
      </Section>
    </Box>
  );
};
