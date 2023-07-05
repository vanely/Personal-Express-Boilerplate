// get routes
// import { getAppInstance } from '../../index';
import { chatRoutes } from '../base-routes';
import { handleGetData } from '../../controllers/chat-controllers/gets/get-chats';
import { handlePostData } from '../../controllers/chat-controllers/posts/post-chats';

// const app = getAppInstance();

chatRoutes.get('/', handleGetData);
chatRoutes.post('/', handlePostData);

