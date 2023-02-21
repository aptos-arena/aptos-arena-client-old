import React from 'react'

import { Kbd } from '@chakra-ui/react'

interface Props {
    keyDisplay: string
}

const Key: React.FC<Props> = ({ keyDisplay }) => {

    return (
        <Kbd
            fontSize='16px'
            fontFamily={`'Press Start 2P', sans-serif`}
            color='blue.200'
            bg='trasparent'
            p={2}
            tabIndex={-1}
        >
            {keyDisplay}
        </Kbd>
    )
}

export default Key