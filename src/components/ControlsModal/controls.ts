export interface ControlType {
    name: string
    keys: string[]
}

export const controls: ControlType[] = [
    {
        name: 'Move',
        keys: ['A', 'D']
    },
    {
        name: 'Jump',
        keys: ['SPACE']
    },
    {
        name: 'Drop',
        keys: ['S']
    },
    {
        name: 'Pick Weapon',
        keys: ['1', '2', '3']
    },
    {
        name: 'Attack',
        keys: ['Right Shift']
    },
    {
        name: 'Pause',
        keys: ['Escape']
    }
]