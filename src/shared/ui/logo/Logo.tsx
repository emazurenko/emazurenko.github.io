import React, { FC } from 'react';
import cn from 'clsx';
import logo from './e-market.svg';
import s from './Logo.module.scss';
import { Link } from 'react-router-dom';

export type LogoProps = {
  size?: 'small' | 'medium';
};

export const Logo: FC<LogoProps> = ({ size = 'small' }) => {
  return (
    <Link to="/products">
      <img src={logo} className={cn(s.logo, s[size])} alt="Логотип интернет-магазина E-Market" />
    </Link>
  );
};
