import React from 'react'

import { Kbd } from '@chakra-ui/react'

interface Props {
    key: string
}

const Key: React.FC<Props> = ({ key }) => {

    return (
        <Kbd
            fontSize='16px'
            fontFamily={`'Press Start 2P', sans-serif`}
            color='blue.200'
            bg='trasparent'
            p={2}
            tabIndex={-1}
        >
            {key}
        </Kbd>
    )
}

export default Key