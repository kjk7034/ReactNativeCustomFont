
작업 전 코드
```
import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    StatusBar,
    Platform
} from 'react-native';

let $StatusBarHeight = 0;
if(Platform.OS == "ios") {
    $StatusBarHeight = 20
}
export default class extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.StatusBar}>
                    <StatusBar
                        backgroundColor="#000"
                        barStyle="dark-content"
                    />
                </View>
                <View style={styles.header}>
                    <Text style={styles.heading1}>웹 폰트 설정</Text>
                </View>
                <ScrollView style={styles.ScrollView}>
                    <View style={styles.examItem}>
                        <Text style={styles.heading2}>기본 폰트</Text>
                        <Text style={styles.desc}>가나다라마바사...abcdef....</Text>
                    </View>
                    <View style={styles.examItem}>
                        <Text style={[styles.heading2, styles.font1]}>1. 폰트 ()</Text>
                        <Text style={[styles.desc, styles.font1]}>가나다라마바사...abcdef....</Text>
                    </View>
                    <View style={styles.examItem}>
                        <Text style={[styles.heading2, styles.font2]}>2. 폰트 ()</Text>
                        <Text style={[styles.desc, styles.font2]}>가나다라마바사...abcdef....</Text>
                    </View>
                    <View style={styles.examItem}>
                        <Text style={[styles.heading2, styles.font3]}>3. 폰트 ()</Text>
                        <Text style={[styles.desc, styles.font3]}>가나다라마바사...abcdef....</Text>
                    </View>
                    <View style={styles.examItem}>
                        <Text style={[styles.heading2, styles.font4]}>4. 폰트 ()</Text>
                        <Text style={[styles.desc, styles.font4]}>가나다라마바사...abcdef....</Text>
                    </View>
                    <View style={styles.examItem}>
                        <Text style={[styles.heading2, styles.font5]}>5. 폰트 ()</Text>
                        <Text style={[styles.desc, styles.font5]}>가나다라마바사...abcdef....</Text>
                    </View>
                    <View style={styles.examItem}>
                        <Text style={[styles.heading2, styles.font6]}>6. 폰트 ()</Text>
                        <Text style={[styles.desc, styles.font6]}>가나다라마바사...abcdef....</Text>
                    </View>
                    <View style={styles.examItem}>
                        <Text style={[styles.heading2, styles.font7]}>7. 폰트 ()</Text>
                        <Text style={[styles.desc, styles.font7]}>가나다라마바사...abcdef....</Text>
                    </View>
                    <View style={styles.examItem}>
                        <Text style={[styles.heading2, styles.font8]}>8. 폰트 ()</Text>
                        <Text style={[styles.desc, styles.font8]}>가나다라마바사...abcdef....</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    StatusBar: {
        marginTop: $StatusBarHeight
    },
    header: {
        alignItems : "center",
        justifyContent : "center",
        height: 40,
        backgroundColor: "#000"
    },
    ScrollView : {
        flex:1,
        padding:10
    },
    examItem: {
        borderWidth: 1,
        padding: 10,
        margin: 10
    },
    heading1 : {
        fontSize: 24,
        color: '#fff'
    },
    heading2 : {
        fontSize: 16
    },
    desc : {
        fontSize: 14
    },
    font1 : {
        
    },
    font2 : {
        
    },
    font3 : {
        
    },
    font4 : {
        
    },
    font5 : {
        
    },
    font6 : {
        
    },
    font7 : {
        
    },
    font8 : {
        
    }
})
```