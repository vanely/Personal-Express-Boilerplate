// get routes
import { getAppInstance } from '../../index';
import { handleGetData } from '../../controllers/chat-controllers/gets/get-chats';
import { handlePostData } from '../../controllers/chat-controllers/posts/post-chats';

const app = getAppInstance();

app.get('/data', handleGetData);
app.post('/data', handlePostData);

