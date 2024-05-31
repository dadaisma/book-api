import express from 'express';

import bookRouter from './routes/bookRoutes';

const app = express();
const PORT =  3000;

app.use(express.json());
app.use('/api', bookRouter);

app.listen(PORT, () => {
    console.log(`Server is running on Port:${PORT}`);
})