import "./index.scss";
import { Card, Form, Input, Button } from "antd";
import logo from '@/assets/login_bg.png'

const Login = () => {
  return (
    <div className="login">
      <Card
        className="login-card"
      >
        <img className="login-logo" src={logo} alt="" />
        <Form>
          <Form.Item>
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item>
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>登录</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
