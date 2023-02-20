export interface ControlType {
    name: string
    keys: string[]
}

export const controls: ControlType[] = [
    {
        name: 'Move',
        keys: ['W', 'D']
    },
    {
        name: 'Jump',
        keys: ['Space']
    },
    {
        name: 'Shoot',
        keys: ['Right Shift']
    }
]