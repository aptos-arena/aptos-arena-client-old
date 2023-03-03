import React from 'react';

import {
    Button,
    Heading,
    Image,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";

import FighterStats from "./FighterStats";

import { Fighter } from "../../types/Fighter";

interface Props {
    fighter: Fighter,
    isOpen: boolean,
    onClose: () => void
    onSelect: () => void
}

const FighterModal: React.FC<Props> = ({ fighter, isOpen, onClose, onSelect }) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
        >
            <ModalOverlay />
            <ModalContent
                bg='#1A202C'
                overflow='hidden'
            >
                <Image
                    src={fighter.collectionImage}
                />
                <ModalHeader>
                    <Heading
                        color='blue.200'
                        fontSize='2xl'
                    >
                        {fighter.collectionName}
                    </Heading>
                </ModalHeader>
                <ModalBody>
                    <FighterStats
                        stats={fighter.stats}
                    />
                </ModalBody>
                <ModalFooter />
            </ModalContent>
        </Modal>
    );
};

export default FighterModal;
