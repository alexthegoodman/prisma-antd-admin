import * as React from "react";

import { PrimaryContainerProps } from "./PrimaryContainer.d";

import { Typography } from "antd";
const { Title, Text } = Typography;

import { Layout, Menu, Breadcrumb } from "antd";
// import {
//   DesktopOutlined,
//   PieChartOutlined,
//   FileOutlined,
//   TeamOutlined,
//   UserOutlined,
//   LaptopOutlined,
//   NotificationOutlined
// } from '@ant-design/icons'; // heavy bundle
import { Link, useNavigation } from "react-navi";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const PrimaryContainer: React.FC<PrimaryContainerProps> = ({
  title = "",
  children,
}) => {
  const navigation = useNavigation();
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <Layout style={{ minHeight: "100vh", flexDirection: "row" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(clsp) => setCollapsed(clsp)}
      >
        <div className="logo">
          <Title style={{ color: "white" }}>Admin</Title>
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            <Link href={"/admin/list/"}>Object List</Link>
          </Menu.Item>
          <Menu.Item
            key="2"
            onClick={() => navigation.navigate("/admin/settings/")}
          >
            <Link href={"/admin/settings/"}>Settings</Link>
          </Menu.Item>
          {/* <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item> */}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Admin Panel</Breadcrumb.Item>
            <Breadcrumb.Item>{title}</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Title>{title}</Title>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>©2021</Footer>
      </Layout>
    </Layout>
  );
};

export default PrimaryContainer;
