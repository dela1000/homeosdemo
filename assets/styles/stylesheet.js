import { StyleSheet } from 'react-native'


export const style = StyleSheet.create({
       container: {
           flex: 1,
           backgroundColor: 'white',
        },
        logoContainer: {
            alignItems: 'center',
        },
        logo: {
            resizeMode: "contain",
            paddingRight: 40,
            paddingLeft: 40,
        },
        formContainer: {
            paddingTop: 10,
            paddingRight: 40,
            paddingBottom: 40,
            paddingLeft: 40
        },
        input: {
            height: 40,
            backgroundColor: "rgba(250,255,189,1)",
            marginBottom: 10,
            color: "black",
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: '#eaeaea',
            borderRadius: 3,
        },
        buttonContainer: {
            backgroundColor: "#989898",
            paddingVertical: 15,
            marginBottom: 10,
        },
        buttonText: {
            textAlign: "center",
            color: "#FFFFFF",
            fontSize: 20,
            fontWeight: "500"
        },
        lessonHeader:{
            margin: 20
        },
        lessonHeaderText: {
            fontFamily: 'gotham',
            fontSize: 18
        },
        headerSubtext: {
            fontFamily: 'gotham',
            fontSize: 12
        },
        videoContainer: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            marginTop: 20
        },
        controlBar: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 45,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        logoutContainer: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
          },
          logoutButton: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 45,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "#990000",
          }
})


