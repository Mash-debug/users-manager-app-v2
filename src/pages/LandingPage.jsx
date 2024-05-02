import { Flex, Typography } from "antd";
import usersManagerPhoto from "../assets/users-manager-photo.webp";
import featuresUser from "../assets/features-user.svg";
import NavBar from "../components/NavBar";

function LandingPage() {
  return (
    <>
      <NavBar />
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
          align="center"
          justify="space-around"
          style={{ height: "fit-content", padding: 32 }}
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
            repellendus! Recusandae, vitae suscipit accusantium praesentium,
            voluptas, id cum ab incidunt blanditiis iusto dolorem sequi eligendi
            quo unde veritatis ipsa culpa similique aut perspiciatis. Iste ea
            beatae saepe! Obcaecati, nobis quam. Fuga optio assumenda aperiam,
            placeat cumque ut, consequuntur, natus quaerat vel accusantium
            voluptate aspernatur aliquid. Corporis, natus magni. Autem quo qui
            vitae error reiciendis id quas voluptatem accusantium et excepturi.
          </Typography.Text>
          <img src={usersManagerPhoto} width="25%" style={{}} alt="User" />
        </Flex>
        <Flex
          align="center"
          justify="space-around"
          style={{
            height: "fit-content",
            backgroundColor: "#f857a6",
            padding: 32,
          }}
        >
          <img src={featuresUser} width="25%" style={{}} alt="User" />
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
            repellendus! Recusandae, vitae suscipit accusantium praesentium,
            voluptas, id cum ab incidunt blanditiis iusto dolorem sequi eligendi
            quo unde veritatis ipsa culpa similique aut perspiciatis. Iste ea
            beatae saepe! Obcaecati, nobis quam. Fuga optio assumenda aperiam,
            placeat cumque ut, consequuntur, natus quaerat vel accusantium
            voluptate aspernatur aliquid. Corporis, natus magni. Autem quo qui
            vitae error reiciendis id quas voluptatem accusantium et excepturi.
          </Typography.Text>
        </Flex>
      </Flex>
    </>
  );
}

export default LandingPage;
