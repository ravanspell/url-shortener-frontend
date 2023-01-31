import React from 'react';
import { Title, Description, Primary, ArgsTable } from '@storybook/addon-docs';
import Button from './index';

export default {
  title: 'Atoms/ Button',
  component: Button,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description type="info">
            The button component.
          </Description>
          <Primary />
          <ArgsTable />
        </>
      ),
    },
  },
};

export const PrimaryComponent = () => <Button title='Click me' onClick={() => {}}/>;