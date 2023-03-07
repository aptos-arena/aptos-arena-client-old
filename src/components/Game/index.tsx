import React from 'react'

import {Button, Card, CircularProgress, IconButton, useDisclosure, VStack} from '@chakra-ui/react';

import { AiOutlineFullscreen } from 'react-icons/ai';
import { GiRetroController } from 'react-icons/gi';

import { useUnityContext, Unity } from 'react-unity-webgl';
import ControlsModal from "../ControlsModal";

const Game: React.FC = () => {

    const { unityProvider, isLoaded, requestFullscreen } = useUnityContext({
        loaderUrl: "/build/AptosArena.loader.js",
        dataUrl: "/build/AptosArena.data",
        frameworkUrl: "/build/AptosArena.framework.js",
        codeUrl: "/build/AptosArena.wasm"
    });

    const { isOpen, onClose, onOpen } = useDisclosure();
    
    return (
        <>
            <ControlsModal isOpen={isOpen} onClose={onClose} />
            <VStack
                spacing={8}
            >
                <Button
                    onClick={onOpen}
                    leftIcon={<GiRetroController />}
                    color='#1A202C'
                    bg='blue.200'
                >
                    Controls
                </Button>
                <Card
                    shadow='lg'
                    position='relative'
                    borderColor='blue.200'
                    borderWidth={2}
                    bg='transparent'
                    overflow='hidden'
                    w='100%'
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
                            <VStack
                                top={2}
                                right={2}
                                position='absolute'
                                align='flex-end'
                            >
                                <IconButton
                                    aria-label='Fullscreen'
                                    icon={<AiOutlineFullscreen />}
                                    onClick={() => requestFullscreen(true)}
                                    color='#1A202C'
                                    bg='blue.200'
                                />
                            </VStack>
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
            </VStack>
        </>
    )
}

export default Game