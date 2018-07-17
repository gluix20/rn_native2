import { StyleSheet, Dimensions } from 'react-native';


let { height, width } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        padding: 30,
        flex: 1,
        flexDirection: 'column'
      },
      display2: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#000'
      },
      title: {
        fontSize: 20,
        textAlign: 'left',
        color: '#000'
      },
      buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'
      },
      body1: {
        fontSize: 16,
        textAlign: 'center',
        color: '#000'
      },
      body2: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#000'
      },
      notColor: {
        color: '#309BF8'
      },
      button: {
        padding: 20,
      },
      filledButton: {
        backgroundColor: '#309BF8',
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#309BF8'
      },
      outlinedButton: {
        backgroundColor: '#fff',
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#309BF8'
      },
      centering: {
        alignItems: 'center',
        justifyContent: 'center'
      },
      separator: {
        borderBottomColor: '#309BF8',
        borderBottomWidth: 1,
      }


      
});