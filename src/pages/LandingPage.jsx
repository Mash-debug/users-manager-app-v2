import { Flex, Typography } from "antd";
import usersManagerPhoto from "../assets/users-manager-photo.webp";
import featuresUser from "../assets/features-user.svg";
import { useMediaQuery } from "usehooks-ts";

function LandingPage() {
  const matchesMd = useMediaQuery("(max-width: 750px)");
   

  return (
    <>
      <Flex justify="flex-start" vertical>
        <div id="form"></div>
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
          style={{ height: "fit-content", padding: matchesMd ? 0 : 32 }}
        >
          <Typography.Text
            style={{
              width: "50%",
              textAlign: "justify",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#f857a6",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, rem
            in magni eaque pariatur quam accusantium totam mollitia dolore.
            Saepe eius eos quia sunt possimus est, nihil dignissimos rem
            repellendus!
          </Typography.Text>
          <img src={usersManagerPhoto} width={matchesMd ? "50%" : "25%" } style={{}} alt="User" />
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
          <img src={featuresUser} width={matchesMd ? "50%" : "25%" } style={{paddingBottom: matchesMd && 16}} alt="User" />
          <Typography.Text
            style={{
              width: "50%",
              textAlign: "justify",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "white",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, rem
            in magni eaque pariatur quam accusantium totam mollitia dolore.
            Saepe eius eos quia sunt possimus est, nihil dignissimos rem
            repellendus!
          </Typography.Text>
        </Flex>
      </Flex>
    </>
  );
}

export default LandingPage;
