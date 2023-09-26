import axios from 'axios';
import endent from 'endent';
import {chatData} from '../assets/Data/Data';

export const handleChatBotPrompt = async prompt => {
  const system = endent`
  You are a helpful assistant who is a chat bot of the app called Shelter Communities. So Answer relevant to the data points I have presented below.
  If user asks what is this or who are you, answer to these queries as I am Shelter Communities's AI bot.
  Take inspiration from the following data: ${chatData}`;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: system,
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer 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`,
        },
      },
    );
    return response?.data?.choices?.[0]?.message?.content;
  } catch (error) {
  }
};
