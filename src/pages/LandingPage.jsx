import { Flex, Typography } from "antd";
import usersManagerPhoto from "../assets/users-manager-photo.webp";
import featuresUser from "../assets/features-user.svg";
import { useMediaQuery } from "usehooks-ts";
import { Colors } from "../constants/colors.js";
import { Fonts } from "../constants/fonts.js";
import { Strings } from "../constants/strings.js";

function LandingPage() {
  const matchesMd = useMediaQuery("(max-width: 750px)");

  return (
    <>
      <Flex justify="flex-start" vertical style={{ minHeight: "100vh" }}>
        <Typography.Title
          style={{
            margin: 0,
            padding: 16,
            color: Colors.primary,
            fontWeight: Fonts.weights.bold,
            textAlign: "center",
          }}
          level={2}
        >
          {Strings.landingPage.title}
        </Typography.Title>
        <Flex
          vertical={matchesMd}
          align="center"
          justify="space-around"
          style={{
            height: "fit-content",
            padding: matchesMd ? 0 : 32,
            flexGrow: 1,
          }}
        >
          <Typography.Text
            style={{
              width: matchesMd ? "80%" : "50%",
              textAlign: "justify",
              fontSize: "1.1rem",
              fontWeight: Fonts.weights.semiBold,
              color: Colors.primary,
            }}
          >
           {Strings.landingPage.paragraphs["1"]}
          </Typography.Text>
          <img
            src={usersManagerPhoto}
            width={matchesMd ? "50%" : "25%"}
            alt="User"
          />
        </Flex>
        <Flex
          vertical={matchesMd}
          align="center"
          justify="space-around"
          style={{
            height: "fit-content",
            backgroundColor: Colors.primary,
            padding: 32,
          }}
        >
          <img
            src={featuresUser}
            width={matchesMd ? "50%" : "25%"}
            style={{ paddingBottom: matchesMd && 16 }}
            alt="User"
          />
          <Typography.Text
            style={{
              width: matchesMd ? "80%" : "50%",
              textAlign: "justify",
              fontSize: "1.1rem",
              fontWeight: Fonts.weights.semiBold,
              color: Colors.white,
            }}
          >
            {Strings.landingPage.paragraphs["2"]}
          </Typography.Text>
        </Flex>
      </Flex>
    </>
  );
}

export default LandingPage;
