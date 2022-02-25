import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  CustomFont: {
    fontFamily: 'Inter-Bold',
  },
  ButtonTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#ffffff',
  },
  ButtonBG: {
    backgroundColor: '#336092',
    borderRadius: 8,
    height: 48,
    alignSelf: 'stretch',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: 'center',
  },
  DisableButton: {
    backgroundColor: '#dddddd',
    borderRadius: 8,
    height: 48,
    alignSelf: 'stretch',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: 'center',
  },
  TextFieldBG: {},
  TextFiledTitle: {
    fontSize: 16,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    borderRadius: 8,
    fontFamily: 'Inter-Regular',
  },
  TextFieldDisabled: {
    fontSize: 16,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    color: 'gray',
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    borderRadius: 8,
    fontFamily: 'Inter-Regular',
  },
});
