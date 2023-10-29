import { FC } from 'react';
import { Button, Flex, Icon, NavLinkWrapper } from '@components';
import './Header.scss';

const Header: FC = () => {
  return (
    <header className="app-header">
      <div className="container">
        <Icon name="logo" className="logo" />
        <nav>
          <Flex component="ul" gap="middle" align="center">
            <li>
              <NavLinkWrapper text="Home" to="/" />
            </li>
            <li>
              <NavLinkWrapper text="Services" to="/services" />
            </li>
            <li>
              <NavLinkWrapper text="Announcements" to="/announcements" />
            </li>
            <li>
              <NavLinkWrapper text="Waiting list" to="/waiting-list" />
            </li>
            <li>
              <NavLinkWrapper text="Documents" to="/documents" />
            </li>
            <li>
              <NavLinkWrapper text="About us" to="/about" />
            </li>
            <li>
              <Button
                type="primary"
                danger
                icon={<Icon name="emergency-call" size={20} strokeColor="white" />}
              >
                Emergency call
              </Button>
            </li>
          </Flex>
        </nav>
        <div className="header-icons">
          <div className="icon chat">
            <Icon name="chat" size={24} strokeColor={import.meta.env.VITE_PRIMARY_COLOR} />
          </div>
          <div className="icon avatar">
            <Icon name="avatar" size={24} strokeColor="white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
