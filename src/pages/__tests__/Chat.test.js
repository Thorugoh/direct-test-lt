import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Chat from '../Chat';
//import { sendMessage } from 'src/services/ChatService';
//import { sendMessage } from '../../services/ChatService';

jest.mock('../../services/ChatService', () => ({
  sendMessage: () => true,
}));

describe('Chat component', () => {
  it('Chat should send message', () => {

    const {getByText, getByTestId, getAllByTestId, queryByText} = render(
      <Chat />,
    );
    const input = getByTestId('input-message');
    const button = getByText('Enviar');
   // const sendMessage = jest.fn();
  
    fireEvent.changeText(input, 'Oi');
    fireEvent.press(button);
    //fireEvent.changeText(input, 'item1');
    //fireEvent.press(button);
    const item0 = getByText('Oi');
    expect(chat.sendMessage).toHaveBeenCalledTimes(1);
    //const item1 = getByText('item1');
  });

} )


// test('Chat should not send blank message', async () => {
//   const {getByText, getByTestId, getAllByTestId, queryByText} = render(
//     <Chat />,
//   );
//   const input = getByTestId('input-message');
//   const button = getByText('Enviar');
  
//   fireEvent.changeText(input, 'Oi');
//   fireEvent.press(button);
//   //fireEvent.changeText(input, 'item1');
//   //fireEvent.press(button);
//   const item0 = getByText('Oi');
//   //const item1 = getByText('item1');
// });

