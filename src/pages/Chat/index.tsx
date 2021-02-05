import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Input from '../../components/Input';

const SentMessage = ({
  value
}: {
  value: string;
}) => (
  <View style={{marginRight: 10}}>
    <Text style={styles.item}>{value}</Text>
  </View>
);

const Chat = () => {
  const [items, setItems] = useState<string[]>([]);
  return (
    <View style={styles.root}>
        <FlatList
          inverted
          testID="list"
          keyExtractor={(item, index) => index.toString()}
          data={items}
          renderItem={({item}) => <SentMessage value={item} />}
        />
      <Input
        onAddItem={(item) => {
          if (item.trim().length > 0) {
            setItems([item, ...items]);
          }
        }}
        testID="adder"
      />
     
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    flex: 1,
  },
  item: {
    fontSize: 18,
    color: '#fff',
    backgroundColor: "#f8f",
    padding: 5,
    maxWidth: '50%',
    borderRadius: 5,
    marginBottom: 8,
    alignSelf: 'flex-end',

  },
});

export default Chat;
