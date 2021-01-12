import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COLLECTED_CARD } from '../../../utils/mutations';

const AddCardButton = ({ addCollectedCard, id }) => {

    // const [addCollectedCard, { error }] = useMutation(ADD_COLLECTED_CARD);

    const handleAddCollectedCard = async () => {
        try {
            await addCollectedCard({
                variables: { _id: id }
            });
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <Button
        variant="primary"
        onClick={handleAddCollectedCard}
        className='btn-border add-btn'
        >
            Add to Collection
        </Button>
    )
};

export default AddCardButton;