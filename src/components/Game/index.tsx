import React from 'react'

import { Card } from '@chakra-ui/react';

import { useUnityContext, Unity } from 'react-unity-webgl';

const Game: React.FC = () => {

    const { unityProvider, isLoaded } = useUnityContext({
        loaderUrl: "/build/Shooter.loader.js",
        dataUrl: "/build/Shooter.data",
        frameworkUrl: "/build/Shooter.framework.js",
        codeUrl: "/build/Shooter.wasm"
    });

    console.log(isLoaded);
    
    return (
        <Card
            p={8}
            shadow='lg'
        >
            <Unity
                unityProvider={unityProvider} 
                style={{
                    width: '100%'
                }}
            />
        </Card>
    )
}

export default Game