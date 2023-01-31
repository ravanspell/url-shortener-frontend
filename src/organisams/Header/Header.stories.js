import React from 'react';
import { Title, Description, Primary, ArgsTable } from '@storybook/addon-docs';
import Header from './index';

export default {
  title: 'Organism/ Header',
  component: Header,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description type="info">
            The label txt component provides more common text labels.
          </Description>
          <Primary />
          <ArgsTable />
        </>
      ),
    },
  },
};

export const PrimaryComponent = () => <Header />;