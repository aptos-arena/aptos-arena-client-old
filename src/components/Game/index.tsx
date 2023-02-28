import React from 'react'

import { Card, CircularProgress, IconButton } from '@chakra-ui/react';

import { AiOutlineFullscreen } from 'react-icons/ai';

import { useUnityContext, Unity } from 'react-unity-webgl';

const Game: React.FC = () => {

    const { unityProvider, isLoaded, requestFullscreen } = useUnityContext({
        loaderUrl: "/build/AptosArena.loader.js",
        dataUrl: "/build/AptosArena.data",
        frameworkUrl: "/build/AptosArena.framework.js",
        codeUrl: "/build/AptosArena.wasm"
    });    
    
    return (
        <Card
            shadow='lg'
            position='relative'
            borderColor='blue.200'
            borderWidth='8px'
            bg='transparent'
        >
            {
                !isLoaded && (
                    <CircularProgress 
                        isIndeterminate
                        size='80px'
                        trackColor='transparent'
                        color='blue.200'
                        position='absolute'
                        left='50%'
                        top='50%'
                        transform='translate(-50%, -50%)'
                    />
                )
            }
            {
                isLoaded && (
                    <IconButton 
                        aria-label='Fullscreen'
                        icon={<AiOutlineFullscreen />}
                        onClick={() => requestFullscreen(true)}
                        top={1}
                        right={1}
                        position='absolute'
                        color='#1A202C'
                        bg='blue.200'
                    />
                )
            }
            <Unity
                unityProvider={unityProvider} 
                style={{
                    width: '100%',
                    aspectRatio: '16/9'
                }}
            />
        </Card>
    )
}

export default Game