/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, View, TouchableOpacity, Text, StatusBar } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS } from '../../constants/Theme';

export default function CustomDiscoverTopTabBar({
    state,
    descriptors,
    navigation,
    position,
}) {
    return (
        <View style={{ paddingTop: 10, backgroundColor: '#F3F3F3', }}>

            <ScrollView contentContainerStyle={{ paddingHorizontal: 10, height: 40, flexDirection: 'row' }} style={{ flexDirection: 'row' }} horizontal showsHorizontalScrollIndicator={false}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label = options.tabBarLabel;
                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            // The `merge: true` option makes sure that the params inside the tab screen are preserved
                            navigation.navigate({ name: route.name, merge: true });
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    const inputRange = state.routes.map((_, i) => i);
                    const opacity = position.interpolate({
                        inputRange,
                        outputRange: inputRange.map(i => (i === index ? 1 : 0)),
                    });

                    return (
                        <View>
                            <StatusBar hidden={false} backgroundColor={COLORS.background} barStyle={'dark-content'} />
                            <TouchableOpacity
                                accessibilityRole="button"
                                accessibilityState={isFocused ? { selected: true } : {}}
                                accessibilityLabel={options.tabBarAccessibilityLabel}
                                testID={options.tabBarTestID}
                                onPress={onPress}
                                onLongPress={onLongPress}
                                style={{ paddingHorizontal: 8 }}>
                                <LinearGradient
                                    start={{ x: 0, y: 0 }}
                                    colors={
                                        isFocused ? ['#F47325', '#F47325'] : ['transparent', 'transparent']
                                    }
                                    style={styles.linearGradient}>
                                    <Text
                                        style={{
                                            color: isFocused ? COLORS.white : COLORS.muddyText,
                                            fontSize: 14,
                                        }}>
                                        {label}
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    linearGradient: {
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 15,
        justifyContent: 'center',
        borderRadius: 30,
        marginHorizontal: 5
    },
});
