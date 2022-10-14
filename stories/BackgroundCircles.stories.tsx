import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BackgroundCircles } from '../components/BackgroundCircles';

export default {
	title: 'Components/BackgroundCircles',
	component: BackgroundCircles
} as ComponentMeta<typeof BackgroundCircles>;

const Template: ComponentStory<typeof BackgroundCircles> = args => (
	<BackgroundCircles {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	backgroundColor: '#50d71e'
};
