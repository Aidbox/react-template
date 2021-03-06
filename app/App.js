import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

const { Content, Footer } = Layout;

import Header from './components/Header';

import PrivateRoute from './components/PrivateRoute';
import { User, Login, Logout } from './components/User';
import Home from './components/Home';
import NotFound from './components/NotFound';

const App = () => (
  <Layout>
    <Header />
    <Content style={{ padding: '0 50px' }}>
      <div
        style={{
          background: '#fff',
          padding: 24,
          minHeight: 380,
          marginTop: '16px'
        }}
      >
        <Switch>
          <Route path="/" exact component={Home} />
          <PrivateRoute path="/user" component={User} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer style={{ textAlign: 'center' }} />
    </Content>
  </Layout>
);

export default App;
