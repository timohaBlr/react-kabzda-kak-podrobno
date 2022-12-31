import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Select} from "./Select";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Select',
    component: Select,

    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => {
    const [activeId, setActiveId] = useState<number>(0);
    const items = [
        {id: 1, value: 'Minsk'},
        {id: 2, value: 'London'},
        {id: 3, value: 'Moscow'},
        {id: 4, value: 'Kiev'},
    ]
    args = {...args, options: items, activeId: activeId,callBack: setActiveId}

    return <Select {...args} />
};


export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    ...Primary.args,

};


/**
 * Тестирование(имитация) действий юзера
 * See https://storybook.js.org/docs/react/writing-stories/play-function#working-with-the-canvas
 *     to learn more about using the canvasElement to query the DOM
 */





