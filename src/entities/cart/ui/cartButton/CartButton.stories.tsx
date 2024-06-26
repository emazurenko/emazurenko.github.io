import React from 'react';
import CartButton, { CartButtonProps } from './CartButton';

export default {
  title: 'Cart/Cart button',
  component: CartButton,
  argTypes: {
    size: {
      type: 'string',
      description: 'Размер кнопки корзины',
      defaultValue: 'medium',
      options: ['medium', 'large'],
      control: {
        type: 'radio',
      },
    },
    isFromCart: {
      type: 'boolean',
      description: 'Режим кнопки при нахождении товара в корзине',
      defaultValue: false,
    },
    initCountItems: {
      type: 'number',
      description: 'Начальное значение товара в корзине',
      defaultValue: 0,
    },
  },
};

const Template = (args: CartButtonProps) => <CartButton {...args} />;

export const Medium = Template.bind({});
const mediumArgs: CartButtonProps = {
  size: 'medium',
  isFromCart: false,
  initCountItems: 0,
};
Medium.args = mediumArgs;

export const Large = Template.bind({});
const largeArgs: CartButtonProps = {
  size: 'large',
  isFromCart: false,
  initCountItems: 0,
};
Large.args = largeArgs;

export const FromCart = Template.bind({});
const fromCartArgs: CartButtonProps = {
  size: 'medium',
  isFromCart: true,
  initCountItems: 1,
};
FromCart.args = fromCartArgs;
