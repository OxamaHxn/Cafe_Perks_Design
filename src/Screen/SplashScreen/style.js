import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffff',
      },
    imageWrapper: {
        height: 180,
        width: 180,
        overflow: 'hidden',
      },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
    splashtext: {
        width: 140,
        height: 100,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 24,
      },
    lasttext: {
        color: '#D60000',
        fontSize: 20,
        fontWeight: '600',
        margin: 20,
      },
})