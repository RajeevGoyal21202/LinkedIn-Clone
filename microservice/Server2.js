import connectDB from './config2/dbConn.js';
import { server } from './socket.js';
connectDB();
server.listen(8000, () => {
    console.log('Server running on 8000')
})