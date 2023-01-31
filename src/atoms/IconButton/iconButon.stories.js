import React from 'react';
import { Title, Description, Primary, ArgsTable } from '@storybook/addon-docs';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import IconButton from './index';

export default {
  title: 'Atoms/ Icon Button',
  component: IconButton,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description type="info">
            The button wrapper for font awesome icons.
          </Description>
          <Primary />
          <ArgsTable />
        </>
      ),
    },
  },
};

export const PrimaryComponent = () => <IconButton icon={faUpRightFromSquare} color="#ff621f" />;