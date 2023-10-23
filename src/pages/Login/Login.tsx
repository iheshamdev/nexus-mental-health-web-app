import { Icon, Card, Form, Input, Button, Checkbox } from '@components';
import React from 'react';
import logo from '@assets/icons/logo.svg';
import './Login.scss';

const Login: React.FC = () => {
  const [rememberMe, setRememberMe] = React.useState(false);

  return (
    <div className="login-page">
      <div className="box"></div>
      <Card className="login-form" bordered={false}>
        <Icon src={logo} className="logo" />
        <Form layout="vertical">
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="rememberMe">
            <Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}>
              Remember me
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
