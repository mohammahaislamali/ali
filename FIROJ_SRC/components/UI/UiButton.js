import { StyleSheet, ActivityIndicator, View } from 'react-native';
import React, { memo } from 'react';
import Paragraph from './Paragraph';
import colors from '../../constants/Colors';
import Clickable from '../HOC/Clizkable';
import { FULL_WIDTH } from '../../constants/layout';
import RADIUS from '../../constants/layout'


const UiButton = ({
    text = 'Press Me',
    onPress = () => { },
    loading = false,
    disable = false,
    backgroundColor = colors.green,
    style = {},
    textColor = colors.white,
    txtSize = 20,
}) => {
    const buttonDisable = disable || loading;
    const buttonStyle = [
        styles.button,
        { backgroundColor },
        style,
    ];
    return (
        <View style={{ opacity: disable ? 0.7 : 1 }}>
            <Clickable onPress={onPress} disable={buttonDisable} style={buttonStyle}>
                {
                    loading ?
                        <ActivityIndicator color={textColor} size="small" />
                        :
                        <Paragraph size={txtSize} type="medium" color={textColor}>
                            {text}
                        </Paragraph>
                }
            </Clickable>
        </View>

    );
};

export default memo(UiButton);

const styles = StyleSheet.create({
    button: {
        padding: 5,
        justifyContent: 'center',
        backgroundColor:colors.green,
        alignItems:"center",
        width:FULL_WIDTH/3,
        marginVertical:25,
        elevation:10,
        alignSelf:"center"
    }
});

