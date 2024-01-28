import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './ToDoCard.styles';

const ToDoCard = ({noteItem, deleteTodo, changeIsDone}) => {
  return (
    <View
      style={noteItem.isOpen ? styles.containerOpen : styles.containerClose}>
      <TouchableOpacity
        onPress={() => changeIsDone(noteItem.id)}
        onLongPress={() => deleteTodo(noteItem.id)}>
        <Text style={noteItem.isOpen ? styles.noteOpen : styles.noteClose}>
          {noteItem.content}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToDoCard;