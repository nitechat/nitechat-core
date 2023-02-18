import { NiteChat } from '../lib';

const chat = new NiteChat();

chat.server.get('/', (req, res) => {
  res.sendStatus(200);
});

chat.listen(3000, () => {
  console.log(`Server listening on *:${3000}`);
});
