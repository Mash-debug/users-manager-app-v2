import { Flex, Typography } from "antd";
import usersManagerPhoto from "../assets/users-manager-photo.webp";
import featuresUser from "../assets/features-user.svg";
import { useMediaQuery } from "usehooks-ts";

function LandingPage() {
  const matchesMd = useMediaQuery("(max-width: 750px)");

  return (
    <>
      <Flex justify="flex-start" vertical style={{ minHeight: "100vh" }}>
        <Typography.Title
          style={{
            margin: 0,
            padding: 16,
            color: "#f857a6",
            fontWeight: 1000,
            textAlign: "center",
          }}
          level={2}
        >
          Gérez vos utilisateurs rapidement et efficacement.
        </Typography.Title>
        {/* <CustomForm name="login" onFinish={(values) => console.log(values)} /> */}
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
              fontWeight: 600,
              color: "#f857a6",
            }}
          >
            Que vous soyez une petite entreprise ou une grande organisation,
            notre solution vous offre les outils nécessaires pour simplifier la
            gestion de vos utilisateurs, garantir leur sécurité et optimiser
            leur expérience.
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
            backgroundColor: "#f857a6",
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
              fontWeight: 600,
              color: "white",
            }}
          >
            Notre plateforme de gestion d{"'"}utilisateurs a été conçue pour
            simplifier vos processus administratifs, vous permettant ainsi de
            vous concentrer sur ce qui compte vraiment : faire croître votre
            entreprise.
          </Typography.Text>
        </Flex>
      </Flex>
    </>
  );
}

export default LandingPage;
