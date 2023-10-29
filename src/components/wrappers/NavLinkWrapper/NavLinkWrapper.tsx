import { FC } from 'react';
import { NavLink } from 'react-router-dom';

type NavLinkWrapperProps = {
  to: string;
  text: string;
};

const NavLinkWrapper: FC<NavLinkWrapperProps> = ({ to, text }) => {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? 'active' : '')}>
      {text}
    </NavLink>
  );
};

export default NavLinkWrapper;
