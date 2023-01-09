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
        {id: 1, value: 'Minsk', country: 'Belarus', population: 1938280},
        {id: 2, value: 'Gomel', country: 'Belarus', population: 516976},
        {id: 3, value: 'Mogilev', country: 'Belarus', population: 374655},
        {id: 4, value: 'Moscow', country: 'Russia', population: 13010012},
        {id: 5, value: 'Piter', country: 'Russia', population: 5601911},
        {id: 6, value: 'Novosibirsk', country: 'Russia', population: 1633595},
        {id: 7, value: 'Kiev', country: 'Ukraine', population: 2952301},
        {id: 8, value: 'Kharkov', country: 'Ukraine', population: 1421125},
        {id: 9, value: 'Odessa', country: 'Ukraine', population: 1010537},
           ]
    args = {...args, options: items, activeId: activeId,callBack: setActiveId}
    return         <Select { ...args} />
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





