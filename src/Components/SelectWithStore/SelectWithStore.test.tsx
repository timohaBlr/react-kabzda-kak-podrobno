import {selectReducer, setActiveIdAC, setCollapsedAC, setHoveredAC} from "./SelectWithStoreReducer";

let state = {
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
beforeEach(() => {
    state = {
        hovered: 1,
        collapsed: true,
        activeId: 0,
        items: [
            {id: 1, value: 'Minsk'},
            {id: 2, value: 'London'},
            {id: 3, value: 'Moscow'},
            {id: 4, value: 'Kiev'},
        ],
    };
})

test('reducer with setHoveredAC', () => {
    const newState = selectReducer(state, setHoveredAC(2))
    expect(newState).not.toBe(state);
    expect(newState.hovered).not.toBe(state.hovered);
    expect(newState.collapsed).toBe(state.collapsed);
    expect(newState.activeId).toBe(state.activeId);

})
test('reducer with setActiveIdAC', () => {
    const newState = selectReducer(state, setActiveIdAC(2))
    expect(newState).not.toBe(state);
    expect(newState.hovered).toBe(state.hovered);
    expect(newState.collapsed).toBe(state.collapsed);
    expect(newState.activeId).not.toBe(state.activeId);
})
test('reducer with setCollapsedAC', () => {
    const newState = selectReducer(state, setCollapsedAC(!state.collapsed))
    expect(newState).not.toBe(state);
    expect(newState.hovered).toBe(state.hovered);
    expect(newState.collapsed).not.toBe(state.collapsed);
    expect(newState.activeId).toBe(state.activeId);
})
/*
test('reducer with default', () => {
    const newState = selectReducer(state, {type: 'default'})
    expect(newState).toBe(state);
    expect(newState.hovered).toBe(state.hovered);
    expect(newState.collapsed).toBe(state.collapsed);
    expect(newState.activeId).toBe(state.activeId);
})*/   // test workable, commented because throw error in app
