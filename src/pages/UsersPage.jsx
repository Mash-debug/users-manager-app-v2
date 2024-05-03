import { Flex, Typography, Divider, Card, Row, Col } from "antd";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";

export default function UsersPage() {
  const gutter = { xs: 8, sm: 16, md: 24, lg: 32 };
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    async function getAccount() {
      try {
        const res = await axios.get("http://localhost:5000/account", {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        if (res.status === 200) {
          setUser({ ...res.data.user });
        }
      } catch {
        setUser(null);
        navigate("/login");
      }
    }
    getAccount();
  }, [navigate, setUser]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await axios.get("http://localhost:5000/users", {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        if (res.status === 200) {
          setUsers(res.data.users);
        }
      } catch {
        setUsers([]);
      }
    }

    fetchUsers();
  }, []);

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
      <Row gutter={[gutter, gutter]} style={{ paddingBottom: 16 }}>
        {users.map((u) => {
          return (
            <Col key={u.id} xs={24} sm={24} md={24} lg={8}>
              <Card title={u._id} styles={{header: {backgroundColor: "#f857a6", color: "white"}}}>
                <p style={{fontWeight: 1000}}>{u.name}</p>
                <p>{u.firstname}</p>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
