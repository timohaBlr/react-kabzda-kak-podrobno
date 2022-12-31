import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Accordion} from "./Accordion";


import {ItemType} from "../../App";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Accordion',
    component: Accordion,

    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Accordion> = (args) => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const items: Array<ItemType> = [
        {id: 1, value: 'Item 1'},
        {id: 1, value: 'Item 2'},
        {id: 3, value: 'Item 3'},
        {id: 4, value: 'Item 4'},
    ]
    args = {...args, collapsed: collapsed, setCollapsed: setCollapsed, items: items, title: 'What to learn',}
    return <Accordion {...args} />
};


export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    ...Primary.args
    };


/**
 * Тестирование(имитация) действий юзера
 * See https://storybook.js.org/docs/react/writing-stories/play-function#working-with-the-canvas
 *     to learn more about using the canvasElement to query the DOM
 */



