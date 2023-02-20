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
        keys: ['↑']
    },
    {
        name: 'Drop',
        keys: ['↓']
    },
    {
        name: 'Shoot',
        keys: ['Right Shift']
    }
]