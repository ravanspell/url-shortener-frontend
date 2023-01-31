/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React from 'react';
import { Title, Description, Primary, ArgsTable } from '@storybook/addon-docs';
import DateRangePicker from './index';

export default {
  title: 'Date Range Picker',
  component: DateRangePicker,
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

export const PrimaryComponent = () => <DateRangePicker label="label x" />;

// story with the state changes.

const Wrapper = ({ children }) => {
  const [state, setState] = useState([]);
  return <div>{children(state, setState)}</div>;
};

export const SelectStory = () => (
  <Wrapper>
    {(state, setState) => (
      <Select
        name="Status"
        value={state}
        itemList={['Proposed', 'Booked', 'Completed']}
        onItemSelect={({ target }) => setState(target.value.map(item => item))}
        placeholder="Status"
        isMulti
        controlShouldRenderValue={false}
        closeMenuOnSelect={false}
      />
    )}
  </Wrapper>
);
