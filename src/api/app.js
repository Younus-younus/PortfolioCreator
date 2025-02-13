import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";
import path from "path";
import cors from "cors";
import multer from "multer";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ["query", "info", "warn", "error"],
});

dotenv.config(); // Load environment variables
const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);
const upload = multer({ dest: path.join(__dirname, "uploads") });

app.use(express.static(path.join(__dirname, 'dist')));

app.use("/uploads", express.static(path.join(__dirname, "uploads"), {
    setHeaders: (res, filePath) => {
        if (filePath.endsWith(".js")) {
            res.setHeader("Content-Type", "application/javascript");
        }
    },
}));



// Routes
app.use("/api/auth", authRoutes); // Group auth-related routes
app.use("/api/resumes", resumeRoutes);
app.get('/api/resumes/portfolios',async (req, res) => {
    try {
        const portfolios = await prisma.portfolio.findMany({
            include: {
                images: { take: 1 },
                _count: { select: { likes: true } },
            },
        });

        const portfolioData = portfolios.map((portfolio) => ({
            ...portfolio,
            image_url: portfolio.images?.[0]?.imageUrl,
            like_count: portfolio._count.likes,
            describeYou: portfolio.describeYou,
        }));

        res.setHeader('Content-Type', 'application/json');
        res.json({ portfolios: portfolioData });
    } catch (error) {
        console.error('Error fetching portfolios:', error.message, error.stack);
        res.status(500).json({ error: 'Error fetching portfolios.' });
    }
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
