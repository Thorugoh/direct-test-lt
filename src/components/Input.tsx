import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import { sendMessage } from '../services/ChatService';

interface Props {
  testID: string;
  onAddItem: (item: string) => void;
}
export default (props: Props) => {
  const [input, setInput] = useState('');
  const {testID, onAddItem} = props;

  const handleSendMessage = () => {
    if(!sendMessage()) return;

    onAddItem(input);
    setInput('');
  }

  return (
    <View style={styles.root}>
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Digite uma mensagem..."
        style={styles.input}
        testID="input-message"
      />
      <Button
        title="Enviar"
        onPress={() => handleSendMessage()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    margin: 10,
  },
  input: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#333',
    marginRight: 2,
    padding: 2,
    borderRadius: 5,
  },
});
