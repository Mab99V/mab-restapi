require('dotenv').config();

const server = require('./server');
const PORT = process.env.PORT || 8130;

server.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));
