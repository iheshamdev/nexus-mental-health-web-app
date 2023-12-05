import { Icon, Card, Form, Input, Button, Checkbox, message } from '@components';
import React from 'react';
import logo from '@assets/icons/logo.svg';
import './Login.scss';
import { API_BASE_URL } from '../../configs/AppConfig';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import bgimd from '../../assets/img/login-bg.jpg';
import axios from 'axios';
// import { setUserData } from '../../store/slices/user';
import { Trans } from 'react-i18next';
import { useDispatch } from 'react-redux';
import NavLanguage from '../../sharedComponents/NavLanguage';

const Login = () => {
  const [rememberMe, setRememberMe] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useQuery({
  //   queryKey: ['repoData'],
  //   queryFn: () =>
  //     axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => res.data),
  // });

  const onFinish = (values) => {
    setLoading(true);
    axios
      .post(`${API_BASE_URL}client-site-auth/login`, values, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setLoading(false);
        console.log(res);
        navigate('/');
      })
      .catch((err) => {
        setLoading(false);
        message.error(err?.response?.data.message);
        console.log();
      });
  };

  return (
    <div className="login-page">
      {/* <div className="box"></div> */}
      {/* <img src={bgimd} /> */}
      <Card className="login-form" bordered={false}>
        <Icon src={logo} className="logo" />
        <Trans>Add_new_organization</Trans>
        {/* <NavLanguage /> */}
        <h2>Welcome Back.</h2>
        <p>Please enter your details to login.</p>
        <Form onFinish={onFinish} layout="vertical">
          <Form.Item label="Username" name="login" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Password" name="password" rules={[{ required: true }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}>
              Remember me
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              className="login-btn"
              // onClick={() => navigate('/')}
              type="primary"
              loading={loading}
              htmlType="submit"
              block
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
