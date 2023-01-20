import React, { memo, useEffect, useState } from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from '../../constants/Colors';

const ModalContainer = ({
    show = false,
    onClose = () => { },
    style = {},
    children,
    animationType = 'fade',
    transparent = true,
    ...props
}) => {
    const [ShowModal, setShowModal] = useState(show);
    useEffect(() => {
        setShowModal(show);
    }, [show]);

    const onCloseHandler = () => {
        setShowModal(false);
        onClose();
    };

    return (
        <Modal
            transparent={transparent}
            animationType={animationType}
            visible={ShowModal}
            onRequestClose={onCloseHandler}
            {...props}>
            <View style={[styles.view, style]}>
                <TouchableOpacity style={styles.dismiss} onPress={onCloseHandler} />
                {children}
                
            </View>
        </Modal>
    );
};

export default memo(ModalContainer);

const styles = StyleSheet.create({
    view: {
        backgroundColor: colors.white ,
        height:270,
        elevation:10,
        marginHorizontal:20,
        marginVertical:250,
    },
    dismiss: {
        ...StyleSheet.absoluteFillObject,
    },
});
