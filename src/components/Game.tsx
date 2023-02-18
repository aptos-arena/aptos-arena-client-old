import React from 'react'

import { useUnityContext, Unity } from 'react-unity-webgl';

const Game = () => {

    const { unityProvider } = useUnityContext({
        loaderUrl: "/build/Web.loader.js",
        dataUrl: "/build/Web.data",
        frameworkUrl: "/build/Web.framework.js",
        codeUrl: "/build/Web.wasm"
    });
    
    return (
        <Unity 
            unityProvider={unityProvider} 
            style={{
                height: 600,
                width: 800
            }}
        />
    )
}

export default Game