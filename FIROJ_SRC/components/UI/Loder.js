import { StyleSheet, ActivityIndicator, ViewComponent } from 'react-native';
import React, { memo } from 'react';
import colors from '../../constants/Colors';
import ViewContainer from '../HOC/ViewContainer';

const Loader = ({ loading = false }) => {
    return (
        <ViewContainer
            style={[styles.loader]}>
            {loading && <ActivityIndicator size={'large'} color={colors.black} />}
        </ViewContainer>
    );
};

export default memo(Loader);

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        ...StyleSheet.absoluteFillObject,
        // backgroundColor: colors.black + '90',
    },
});
