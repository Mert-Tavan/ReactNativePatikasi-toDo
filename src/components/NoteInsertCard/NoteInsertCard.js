import React, {useEffect, useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import styles from './NoteInsertCard.styles';

const NoteInsertCard = props => {
  const [note, setNote] = useState('');

  const handleNote = text => {
    // console.log(text);
    setNote(text);
  };

  useEffect(() => {
    this.myTextInput = React.createRef();
  }, []);

  const handleSetList = () => {
    const noteItem = {
      content: note,
      isOpen: true,
      id: Date.now() + Math.random(),
    };

    props.setToDoList(existingItems => {
      return [...existingItems, noteItem];
    });
    setNote('');
    this.myTextInput.current.clear();
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={this.myTextInput}
        style={styles.text_input}
        placeholder={'Yapılacak...'}
        onChangeText={handleNote}
      />
      <TouchableOpacity
        style={styles.save_button}
        title={'Kaydet'}
        onPress={handleSetList}>
        <Text style={styles.button_title}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoteInsertCard;