const { connectDB } = require('./config/db.config');

// Initialize database connection
let db;
async function initDB() {
    db = await connectDB();
}

initDB();

const productRoutes = require('./routes/product.routes');
app.use('/api', productRoutes);

const cors = require('cors');
app.use(cors());
