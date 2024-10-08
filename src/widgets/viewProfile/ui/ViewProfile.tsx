import React, { FC } from 'react';
import { ProfileForm } from 'src/features/forms/ProfileForm';
import s from './ViewProfile.module.scss';
import { LogoutButton } from 'src/shared/ui/button/logoutButton';
import { OrdersForm } from 'src/features/forms/OrdersForm';

const ViewProfile: FC = () => {
  return (
    <div>
      <div className={s.logout}>
        <LogoutButton />
      </div>
      <ProfileForm className={s.content} />
      <OrdersForm className={s.content} />
    </div>
  );
};

export default ViewProfile;
