import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from '../components/Header';

export default {
	title: 'Components/Header',
	component: Header,
	argTypes: {
		iconColor: { control: 'color' },
		socialIcon: { control: 'select', options: ['email', 'twitch'] }
	},
	args: {
		socialIcon: 'email'
	},
	parameters: {
		layout: 'fullscreen',
		backgrounds: {
			values: [
				{ name: 'Dark Mode', value: '#333333' },
				{ name: 'Aquamarine', value: 'aquamarine' }
			]
		}
	}
	// decorators: [
	// 	Story => (
	// 		<div className='border border-gray-900 m-3'>
	// 			<Story />
	// 		</div>
	// 	)
	// ]
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

// Template.bind({}) is a standard JavaScript technique for making a copy of a function
export const Primary = Template.bind({});
Primary.args = {
	navTitle: 'Get In Touch',
	iconColor: 'blue'
};

export const Secondary = Template.bind({});
Secondary.args = {
	navTitle: 'Game On!',
	iconColor: 'orange'
};
Secondary.decorators = [
	Story => (
		<div className='border border-gray-900 m-3'>
			<Story />
		</div>
	)
];
