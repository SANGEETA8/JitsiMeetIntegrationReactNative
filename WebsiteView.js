// import AsyncStorage from '@react-native-async-storage/async-storage';
// import React from 'react'
// import WebView from 'react-native-webview';


// const WebsiteView=()=>{

// const webViewRef = useRef(null);
//   useEffect(() => {
//     const getAuthtoken = async () =>{
//     const authToken = await AsyncStorage.getItem('authToken')
//     if(authToken){
//         const injectJS = localStorage.setItem('authToken', '${authToken}');
//         webViewRef.current.injectJavaScript(injectJS);
//      }
//     }
//     getAuthtoken();
    
//   }, []);
//     return(
//         <WebView 
//         ref={webViewRef}
//         source={{uri:'http://10.71.20.74:3000'}}
//         style={{ flex: 1 }} 
//         injectedJavaScript={`
//             (function() {
//               window.ReactNativeWebView.postMessage('Hello from WebView');
//             })();
//           `}/>
//     );
// }

// export default WebsiteView;