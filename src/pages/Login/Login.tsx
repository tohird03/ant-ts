import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import "./Login.scss";
import { FormSubmit } from "../../types/auth";
import { instance } from "../../api/Instance";
import { capitalize } from "../../utils/lowerCase";
export const Login = () => {
  const onFinish = async ({ login, password }: FormSubmit) => {
    await instance
      .post("/api/login", {
        email: login,
        password: password,
      })
      .then((res) => {
        
      })
      .catch((err) => {
        message.error(capitalize(err?.response?.data?.error))
      });
  };

  return (
    <div className="login__form-wrapper">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="login"
          rules={[{ required: true, message: "Please enter your Login!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Login"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your Password!" }]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
