import { useNavigate } from "react-router-dom";
import useLoginPage from "../hooks/useLogin";
import { UnlockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

const Login = () => {
  const navigate = useNavigate();
  const { form, isLoading, onFinish } = useLoginPage();
  return (
    <div
      id="century-gothic"
      style={{
        height: "100vh",
        backgroundColor: "#0f2851",
        marginRight: "auto",
        marginLeft: "auto",
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="login-desktop-content"
          style={{
            backgroundColor: "#dfd2cf",
            width: "35%",
            height: "80%",
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
          }}
        >
          <img
            style={{ marginTop: "auto" }}
            src="login-content/login-page-illustration.svg"
            alt="cloud illustration"
          />
          <span style={{ color: "#a89d9d" }}>
            Copyright © 2022, All Rights Reserved
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            width: "35%",
            height: "80%",
          }}
        >
          <div
            className="login-desktop-content space-y-6"
            style={{
              width: "100%",
              height: "95%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{ height: "80px", width: "80px", cursor: "pointer" }}
              onClick={() => {
                navigate("/");
              }}
              src="login-content/landing-page-logo.svg"
              alt="neesum login page logo"
            />
            <div
              style={{
                color: "#726d6d",
                fontSize: "1.1rem",
              }}
            >
              Welcome to ErpNeesum
            </div>
            <Form
              form={form}
              onFinish={onFinish}
              className="space-y-3"
              style={{ width: "100%" }}
            >
              <Form.Item
                style={{
                  width: "60%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Invalid e-mail",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="email or phone number"
                />
              </Form.Item>
              <Form.Item
                style={{
                  width: "60%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                name="password"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input.Password
                  prefix={<UnlockOutlined />}
                  type="password"
                  placeholder="password"
                  onPressEnter={() => {
                    form.submit();
                  }}
                />
              </Form.Item>

              <div
                className="space-y-3"
                style={{
                  width: "100%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  textAlign: "center",
                }}
              >
                <div
                  className="space-y-6"
                  style={{
                    width: "30%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    textAlign: "center",
                  }}
                >
                  <Button
                    className="login-button"
                    loading={isLoading}
                    onClick={form.submit}
                    style={{ width: "100%" }}
                  >
                    Login
                  </Button>
                  <img src="login-content/or-design.svg" alt="or icon" />
                </div>
              </div>
            </Form>
          </div>
          <span
            style={{
              marginLeft: "auto",
              fontSize: "0.7rem",
              paddingRight: "15px",
            }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
