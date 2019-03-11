import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import Colors from '../../utils/colors'
import { IconeMaterialComunity } from '../../components/Icons/index'

export default ActionBar = ({ color, options, iconL, iconR, title, onPressButtonL, onPressButtonR }) => (
    <View style={styles.barAction}>
        <TouchableOpacity style={styles.barActionIcon} onPress={onPressButtonL}>
            <IconeMaterialComunity
                name={iconL}
                size={34}
                style={{ color: 'white' }}
            />
        </TouchableOpacity>
        <Text style={styles.barActionTitle}>
            {title}
        </Text>
        {options &&
            <TouchableOpacity style={styles.barActionIconOptions} onPress={onPressButtonR}>
                <MaterialIcons
                    name={iconR}
                    size={35}
                    style={{ color: 'white' }}
                />
            </TouchableOpacity>
        }
    </View>
)

const styles = StyleSheet.create({
    barAction: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 56,
        zIndex: 9,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 50,
        backgroundColor: Colors.blue,
        marginBottom: 1,
    },
    barActionTitle: {
        fontSize: 20,
        color: Colors.white
    },
    barActionIcon: {
        top: 10,
        left: 10,
        position: 'absolute',
    },
    barActionIconOptions: {
        top: 16,
        right: 10,
        position: 'absolute',
    }
});