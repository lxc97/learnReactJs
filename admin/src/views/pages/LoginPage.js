import React, { Component } from "react";
import { Card, Form, Input, Button } from "antd";

import { login } from "../../actions/auth";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const tailLayout = {
  wrapperCol: { span: 24 },
};

class LoginPage extends Component {
  onFinish = (values) => {
    // console.log("Success:", values);
    //Call action login--------------->.>>>>>>>>>>
    this.props.login(values);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  render() {
    let { isLogin } = this.props;
    return isLogin ? (
      <Redirect to="/" />
    ) : (
      <Card
        title="Login"
        style={{ width: 600, textAlign: "center", margin: "30px auto" }}
      >
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              { required: true, message: "Please input your username!" },
              {
                validator: (_, value) => {
                  if (value && value.length < 3) {
                    return Promise.reject("Name length must bigger than 3");
                  } else if (value && value.length > 24) {
                    return Promise.reject("Name length must smaller than 24");
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              {
                validator: (_, value) => {
                  if (value && value.length < 4) {
                    return Promise.reject("Name length must bigger than 4");
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item> */}
          <p>{this.props.message}</p>
          <Form.Item {...tailLayout}>
            <Button
              loading={this.props.loading}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}
function mapStateToProps({auth}) {
  return {
    isLogin: auth.isLogin,
    message: auth.message,
    loading: auth.loading,
  };
}

export default connect(mapStateToProps, { login })(LoginPage);
