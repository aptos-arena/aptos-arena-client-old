export interface ControlType {
    name: string
    keys: string[]
}

export const controls: ControlType[] = [
    {
        name: 'Move',
        keys: ['←', '→']
    },
    {
        name: 'Jump',
        keys: ['SPACE']
    },
    {
        name: 'Drop',
        keys: ['↓']
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