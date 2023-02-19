import React from 'react'

import { useUnityContext, Unity } from 'react-unity-webgl';

const Game: React.FC = () => {

    const { unityProvider } = useUnityContext({
        loaderUrl: "/build/Shooter.loader.js",
        dataUrl: "/build/Shooter.data",
        frameworkUrl: "/build/Shooter.framework.js",
        codeUrl: "/build/Shooter.wasm"
    });
    
    return (
        <Unity 
            unityProvider={unityProvider} 
            style={{
                width: '100%'
            }}
        />
    )
}

export default Game