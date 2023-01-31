import React from 'react';
import { Title, Description, Primary, ArgsTable } from '@storybook/addon-docs';
import TextInput from './index';

export default {
    title: 'Atoms/ Text Input',
    component: TextInput,
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Description type="info">
                        The text input component.
                    </Description>
                    <Primary />
                    <ArgsTable />
                </>
            ),
        },
    },
};

export const PrimaryComponent = () => <TextInput />;