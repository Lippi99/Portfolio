import { Box } from "../components/Box";
import { Header } from "../components/Header";
import reactLogo from "../assets/react.svg";
import look from "../assets/look.svg";
import { Section } from "../components/Section";
import { css, keyframes, styled } from "../stitches.config";
import { Flex } from "../components/Flex";
import i18next from "i18next";
import { RiErrorWarningFill } from "react-icons/ri";
import me from "../assets/me.jpg";
import { Grid } from "../components/Grid";
import { Card } from "../components/Card";

import cryptoimg from "../assets/crypto.jpg";
import spaceimg from "../assets/space.jpg";
import ecommerceimg from "../assets/ecommerce.jpg";
import memorygameimg from "../assets/memorygame.jpg";
import tictactoeimg from "../assets/tictactoe.jpg";
import fullStackimg from "../assets/fullStack.jpg";

import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

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
          "@bp2": {
            fontSize: "1.4rem",
          },
        },
        span: {
          fontSize: "2rem",
          color: "$blue200",
          whiteSpace: "nowrap",
          overflow: "hidden",
          fontFamily: `Open Sans, sans-serif, Roboto Condensed, sans-serif`,
          animation: `${typeWrite} 1000ms steps(30,end) 1700ms 1 normal both`,
          fontWeight: "bolder",
          "@bp2": {
            fontSize: "1.4rem",
          },
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
        footer: {
          fontSize: "1.1rem",
          textAlign: "center",
          padding: "$5 0",
          color: "$purple200",
          fontFamily: `Inconsolata, monospace, Open Sans, sans-serif`,
        },
      },
    },
  });

  const Download = styled("button", {
    fontSize: "17px",
    padding: "$1",
    marginLeft: "$2",
    borderRadius: "10px",
    border: "0",
    background: "$white200",
    color: "$blue200",
  });

  const Projects = styled("h2", {
    fontSize: "30px",
    color: "$blue200",
    marginBottom: "$7",
  });

  const currentYear = new Date().getFullYear();

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

          <Flex
            justify="between"
            css={{
              width: "50%",
              marginTop: "$5",
              "@bp3": {
                margin: "$7 auto",
              },
            }}
          >
            <a
              target="_blank"
              href="https://github.com/SolomonDeveloper"
              rel="noreferrer"
            >
              <FaGithub fontSize={50} color="rgb(139, 233, 253)" />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/felipe.lippi.9/"
              rel="noreferrer"
            >
              <FaFacebook fontSize={50} color="rgb(139, 233, 253)" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/felipe-lippi-61b159199/"
              rel="noreferrer"
            >
              <FaLinkedin fontSize={50} color="rgb(139, 233, 253)" />
            </a>
          </Flex>
        </Box>
        <Flex align="center">
          <Box
            css={{
              position: "relative",
              width: "700px",
              height: "600px",
              "@bp2": {
                width: "90%",
                margin: "0 auto",
              },
            }}
          >
            <img
              style={{ objectFit: "contain" }}
              width="100%"
              height="100%"
              src={look}
              alt="look"
            />
            <Box
              css={{
                position: "absolute",
                left: "50%",
                top: "55.3%",
                transform: "translateX(-50%, -50%)",
                width: "120px",
                height: "120px",
                "@bp2": {
                  width: "80px",
                  height: "80px",
                  left: "54%",
                  top: "58%",
                  transform: "translateX(-50%, -50%)",
                },
                "@bp3": {
                  display: "none",
                },
              }}
            >
              <img
                className={reactRotate()}
                style={{
                  width: "100%",
                  height: "100%",
                  animation: `${reactRotate} 10000ms infinite linear`,
                }}
                src={reactLogo}
                alt="pc"
              />
            </Box>
          </Box>
        </Flex>
      </Section>

      <Section id="about">
        <Flex
          css={{
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
          <Box
            css={{
              width: "50%",
              margin: "0 auto",
              "@bp3": {
                width: "100%",
              },
            }}
          >
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
            <p
              className={text({
                variant: "aboutDescription",
              })}
            >
              {i18next.t<string>("downloadResume")}
              <Download>
                <a href={require("../curriculum.pdf")} download="resume">
                  Download
                </a>
              </Download>
            </p>
          </Box>
          <Box
            css={{
              textAlign: "center",
              overflow: "hidden",
              position: "relative",
              "@bp2": {
                width: "100%",
              },
            }}
          >
            <img
              style={{
                width: "60%",
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

      <Section id="projects">
        <Box css={{ textAlign: "center" }}>
          <Projects>{i18next.t<string>("projects")}</Projects>
        </Box>
        <Grid
          columns={3}
          gap={8}
          css={{
            padding: "0 $6",
            "@bp3": {
              gridTemplateColumns: "repeat(2, 1fr)",
            },
            "@bp2": {
              gridTemplateColumns: "1fr",
            },
          }}
        >
          <a
            target="_blank"
            href="https://github.com/SolomonDeveloper/crypto"
            rel="noreferrer"
          >
            <Card background={cryptoimg} />
          </a>
          <a
            target="_blank"
            href="https://github.com/SolomonDeveloper/Space"
            rel="noreferrer"
          >
            <Card background={spaceimg} />
          </a>
          <a
            href="/"
            style={{
              background: "rgba(0, 0, 0, 0.5)",
              position: "relative",
              pointerEvents: "none",
            }}
          >
            <Box css={{ opacity: 0.2 }}>
              <Card background={ecommerceimg} />
            </Box>
            <Box
              css={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Flex direction="column" align="center">
                <h2
                  style={{
                    fontSize: "40px",
                    color: "white",
                    fontFamily: `Inconsolata, monospace, Open Sans, sans-serif`,
                    margin: 0,
                  }}
                >
                  {i18next.t<string>("soon")}
                </h2>
                <RiErrorWarningFill color="#ffcc00" fontSize={40} />
              </Flex>
            </Box>
          </a>
          <a
            target="_blank"
            href="https://github.com/SolomonDeveloper/Jogo-da-Memoria-ReactJS"
            rel="noreferrer"
          >
            <Card background={memorygameimg} />
          </a>
          <a
            target="_blank"
            href="https://github.com/SolomonDeveloper/JogoDaVelha"
            rel="noreferrer"
          >
            <Card background={tictactoeimg} />
          </a>
          <a
            href="/"
            style={{
              height: "70%",
              background: "rgba(0, 0, 0, 0.5)",
              position: "relative",
              pointerEvents: "none",
            }}
          >
            <Box css={{ opacity: 0.2, height: "100%" }}>
              <Card background={fullStackimg} />
            </Box>
            <Box
              css={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Flex direction="column" align="center">
                <h2
                  style={{
                    fontSize: "40px",
                    color: "white",
                    fontFamily: `Inconsolata, monospace, Open Sans, sans-serif`,
                    margin: 0,
                  }}
                >
                  {i18next.t<string>("soon")}
                </h2>
                <RiErrorWarningFill color="#ffcc00" fontSize={40} />
              </Flex>
            </Box>
          </a>
        </Grid>
      </Section>
      <footer>
        <Box>
          <h2 className={text({ variant: "footer" })}>
            {i18next.t<string>("fullName")} © {currentYear}
          </h2>
        </Box>
      </footer>
    </Box>
  );
};
