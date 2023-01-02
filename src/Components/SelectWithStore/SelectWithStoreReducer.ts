import {StateType} from "../Select/SelectContainer";

export type TsarType =  SetActiveIdACType | SetHoveredACType | SetCollapsedACType
 type SetHoveredACType = ReturnType<typeof setHoveredAC>
type SetActiveIdACType = ReturnType<typeof setActiveIdAC>
type SetCollapsedACType = ReturnType<typeof setCollapsedAC>


const SET_HOVER = 'SET_HOVER';
const SET_ACTIVEID = 'SET_ACTIVEID'
const SET_COLLAPSED = 'SET_COLLAPSED'
const initialState = {
    hovered: 1,
    collapsed: true,
    activeId: 0,
    items: [
        {id: 1, value: 'Minsk'},
        {id: 2, value: 'London'},
        {id: 3, value: 'Moscow'},
        {id: 4, value: 'Kiev'},
    ],
}

export const selectReducer = (state: StateType = initialState , action: TsarType) => {

    switch (action.type) {
        case SET_HOVER:
            return {...state, hovered: action.payload.id}
        case SET_ACTIVEID:
            return {...state, activeId: action.payload.activeId}
        case SET_COLLAPSED:
            return {...state, collapsed: action.payload.collapsed}
        default:
            console.log('troubles with action type')
            return state
    }
}
export const setHoveredAC = (id: number) => {
    return {
        type: SET_HOVER,
        payload: {
            id: id,
        },
    } as const
}
export const setActiveIdAC = (id: number) => {
    return {
        type: SET_ACTIVEID,
        payload: {
            activeId: id,
        },
    } as const
}
export const setCollapsedAC = (collapsed: boolean) => {
    return {
        type: SET_COLLAPSED,
        payload: {
            collapsed: collapsed
        },
    } as const
}
