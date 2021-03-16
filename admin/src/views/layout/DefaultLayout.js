import React from "react";
import { Layout, Menu } from "antd";
import {
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import routers from "../routers";
import { connect } from "react-redux";

import { removeToken } from "../../utils/localStorageHandler";


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

// window.onload = () => {
//   let logout_btn= document.getElementById("logout")
//   logout_btn.addEventListener("click", () => {
//     removeToken()
//     return <Redirect to="/" />
//   })
  
// }
class HomePage extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    const { collapsed } = this.state;
    return ( 
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            {routers.map((menu) => {
              return !menu.children ? (
                <Menu.Item key={menu.path} id={menu.id} icon={<PieChartOutlined />}>
                  <Link to={menu.path}>{menu.name}</Link>
                </Menu.Item>
              ) : (
                <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                  {menu.children.map((subMenu) => {
                    return (
                      <Menu.Item key={subMenu.path}>
                        <Link to={subMenu.path}>{subMenu.name}</Link>
                      </Menu.Item>
                    );
                  })}
                </SubMenu>
              );
            })}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Switch>
                {routers.map((menu) => {
                  return menu.children ? (
                    menu.children.map((subMenu) => {
                      return (
                        <Route path={subMenu.path} key={subMenu.path}>{subMenu.component}</Route>
                      );
                    })
                  ) : (
                    <Route path={menu.path} key={menu.path}>{menu.component}</Route>
                  );
                })}
                {/* <Route path="/option">Option</Route>
                  <Route path="/user/tom">Tom</Route>
                  <Route path="/user">User</Route> */}
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Mr.Lxc
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.token,
  };
}

export default connect(mapStateToProps)(HomePage);
// export default HomePage;