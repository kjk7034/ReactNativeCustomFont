# React Native custom font(웹폰트) 적용

앱에서 웹폰트를 적용하면 앱 자체의 용량이 어마어마하게 커지는 단점이 있다. 최대한 협의로 시스템폰트로 가고 싶지만, 꼭 적용해야 한다면 다음과 같이 적용할 수 있다.
적용해야 한다면 최대한 많은 폰트를 디바이스에서 테스트해주고 적용하면 될 것 같다. 해당 웹폰트들이 웹이 아닌 앱에서 line-height가 제대로 적용이 안되는 케이스가 발생했었다. 그래서 프로젝트를 시작하기 전에 한번 전체적으로 폰트 줄간격, 크기 등등을 먼저 테스트해보길 추천한다.

내가 테스트한 폰트들은 다음과 같다.
* NanumSquareR.ttf
* NanumSquareB.ttf
* NotoSansCJKkr-Bold.otf
* NotoSansCJKkr-DemiLight.otf
* NotoSansCJKkr-Light.otf
* NanumBarunGothicLight.ttf
* NanumBarunGothicBold.ttf
* NanumBarunGothic.ttf

## 테스트 페이지 작성
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

결과화면
<img src="http://wagunblog.com/wp/wp-content/uploads/2016/11/ReactNativeWebFont_01.png" alt="" width="40%" />

fontFamily를 NanumSquareR로 변경해보니 당연하겠지만 다음과 오류가 발생했다.
<img src="http://wagunblog.com/wp/wp-content/uploads/2016/11/ReactNativeWebFont_02.png" alt="" width="40%" />

이제 IOS와 안드로이드에서 설정하는 방법을 알아보기로 하자.

## IOS 설정하기

사용할 웹 폰트를 프로젝트에 Fonts라는 폴더에 추가했다.
<img src="http://wagunblog.com/wp/wp-content/uploads/2016/11/ReactNativeWebFont_03.png" alt="" width="40%" />

이제 Xcode에서 프로젝트 폴더에 "Add Files to 프로젝트명..."을 클릭
<img src="http://wagunblog.com/wp/wp-content/uploads/2016/11/ReactNativeWebFont_04.png" alt="" width="40%" />

상위 폴더로 이동하여 방금전 추가한 Fonts 폴더를 add한다.
<img src="http://wagunblog.com/wp/wp-content/uploads/2016/11/ReactNativeWebFont_05.png" alt="" width="40%" />

추가하는 과정에 Create folder references, Add to targets 를 체크해서 Add하자.
<img src="http://wagunblog.com/wp/wp-content/uploads/2016/11/ReactNativeWebFont_06.png" alt="" width="40%" />

그러면 다음과 같이 Fonts 폴더가 추가된 것을 확인할 수 있다.
<img src="http://wagunblog.com/wp/wp-content/uploads/2016/11/ReactNativeWebFont_07.png" alt="" width="40%" />

폰트를 추가했으니, 어플리케이션 설정에 해당 폰트들을 추가해보자.
Info.plist 클릭하고 > 마우스 우측으로 Add Row로 Fonts provided by application Array를 추가하고 폰트수 만큼의 Item을 추가했다.
<img src="http://wagunblog.com/wp/wp-content/uploads/2016/11/ReactNativeWebFont_08.png" alt="" width="40%" />

기존에 동작하던 앱을 죽이고 다시 빌드하고 실행한다. (command + shift + K => command + shift + B => command + shift + R)

이제 다음과 같이 fontFamily를 추가했다.
```
font1 : {
    fontFamily: "NanumSquareR"
},
font2 : {
    fontFamily : "NanumSquareB"
},
font3 : {
    fontFamily : "NotoSansCJKkr-Bold"
},
font4 : {
    fontFamily : "NotoSansCJKkr-DemiLight"
},
font5 : {
    fontFamily : "NotoSansCJKkr-Light"
},
font6 : {
    fontFamily : "NanumBarunGothicLight"
},
font7 : {
    fontFamily : "NanumBarunGothicBold"
},
font8 : {
    fontFamily : "NanumBarunGothic"
}
```

이제 시뮬레이터를 보니 잘 적용된 것을 확인 할 수 있다.
<img src="http://wagunblog.com/wp/wp-content/uploads/2016/11/ReactNativeWebFont_09.png" alt="" width="40%" /> <img src="http://wagunblog.com/wp/wp-content/uploads/2016/11/ReactNativeWebFont_10.png" alt="" width="40%" />

## 안드로이드 설정하기

안드로이드는 IOS보다 많이 간편하다. 폰트 적용전 화면은 다음과 같다.
<img src="http://wagunblog.com/wp/wp-content/uploads/2016/11/ReactNativeWebFont_13.png" width="40%" alt="폰트 적용전 화면" />

검색을 했을 때, package.json에 다음과 같이 추가해서 rnpm을 추가해서 사용할 수도 있었지만, 테스트를 직접 하지는 않았다.
```
...
    "rnpm": {
          "assets": ["path/to/your/font/directory"]
    },
...
```

나는 다음과 같이 android > app > src > main > assets > font에 적용할 웹폰트를 넣었다. (이 과정에서 main 폴더안에 assets를 생성.)
<img src="http://wagunblog.com/wp/wp-content/uploads/2016/11/ReactNativeWebFont_11.png" width="40%" alt="" />

추가하고 Android Studio로 프로젝트를 열었더니 다음과 같이 폰트가 추가되어 있는 것을 확인할 수 있었다.
<img src="http://wagunblog.com/wp/wp-content/uploads/2016/11/ReactNativeWebFont_12.png" width="40%" alt="" />

이제 빌드하고 에뮬레이터를 실행하니, 다음과 결과를 얻을 수 있었다.
<img src="http://wagunblog.com/wp/wp-content/uploads/2016/11/ReactNativeWebFont_14.png" alt="" width="40%" /> <img src="http://wagunblog.com/wp/wp-content/uploads/2016/11/ReactNativeWebFont_15.png" alt="" width="40%" />