import React, { FC, ReactElement, ReactNode } from 'react';
import cn from 'clsx';
import s from './FormContainer.module.scss';

type FormContainerProps = {
  children: ReactElement[] | ReactNode;
} & React.FormHTMLAttributes<HTMLFormElement>;

const FormContainer: FC<FormContainerProps> = ({ className, title, children, ...props }) => {
  return (
    <form {...props} className={cn(s.root, className)} noValidate={true}>
      <fieldset>
        <legend>{title}</legend>
        {children}
      </fieldset>
    </form>
  );
};

export default FormContainer;
