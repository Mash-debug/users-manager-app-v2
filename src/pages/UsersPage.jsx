import { Flex, Typography, Divider, Card, Row, Col } from "antd";

export default function UsersPage() {
  const gutter = { xs: 8, sm: 16, md: 24, lg: 32 };

  return (
    <div style={{ padding: 16, width: "100%" }}>
      <Flex justify="center" vertical align="center">
        <Divider orientation="left">
          <Typography.Title
            level={2}
            style={{ fontWeight: 1000, color: "#f857a6" }}
          >
            Utilisateurs
          </Typography.Title>
        </Divider>
      </Flex>
      <Row gutter={[gutter, gutter]} style={{paddingBottom: 16}}>
        <Col xs={24} sm={24} md={24} lg={8}>
          <Card title="ID : 12456789">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8}>
          <Card title="ID : 12456789">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
