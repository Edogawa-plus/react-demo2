import "./index.scss";
import { Card, Form, Input, Button } from "antd";
import logo from "@/assets/logo.png";

const Login = () => {
  // Get form data
  const onFinish = (values) => {
    console.log("🚀 ~ onFinish ~ values:", values)    
  }
  const onFinishFailed = ({ values, errorFields, outOfDate }) => {
    console.log(values, errorFields, outOfDate);
  }

  return (
    <div className="login">
      <Card className="login-card">
        <img className="login-logo" src={logo} alt="" />
        <Form validateTrigger="onBlur" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item
            name="mobile"
            rules={[
              { required: true, message: "请输入手机号" },
              { message: "请输入正确的手机格式", pattern: /^1[3-9]\d{9}$/ },
            ]}
          >
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "请输入验证码" }]}
          >
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
