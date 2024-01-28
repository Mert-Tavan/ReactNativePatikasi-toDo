import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerOpen: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#7da453',
    marginTop: 10,
    padding: 6,
    justifyContent: 'center',
    paddingBottom: 10,
    paddingLeft: 10,
  },
  containerClose: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#263942',
    marginTop: 10,
    padding: 6,
    justifyContent: 'center',
    paddingBottom: 10,
    paddingLeft: 10,
  },
  noteOpen: {
    fontSize: 25,
    color: 'white',
  },
  noteClose: {
    fontSize: 25,
    color: 'gray',
    fontStyle: 'italic',
    textDecorationLine: 'line-through',
  },
});