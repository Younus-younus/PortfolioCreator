import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});

export const show = async (req, res) => {
    const { id } = req.params;
    const parsedId = id;

    if (!parsedId) {
        return res.status(400).json({ error: 'Invalid portfolio ID' });
    }

    try {
        const portfolio = await prisma.portfolio.findUnique({
            where: { id: parsedId },
            include: {
                contact: true,
                education: true,
                skills: true,
                interest: true,
                languages: true,
                images: true,
            },
        });

        if (!portfolio) {
            return res.status(404).json({ error: 'Portfolio not found' });
        }

        const userId = req.user?.id || null;
        const hasLiked = userId
            ? await prisma.like.findFirst({
                where: { userId, portfolioId: parsedId },
            })
            : null;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            portfolio,
            contact: portfolio.contact,
            education: portfolio.education,
            skills: portfolio.skills,
            interests: portfolio.interest,
            languages: portfolio.languages,
            images: portfolio.images,
            hasLiked: !!hasLiked,
        });
        
    } catch (error) {
        console.error('Error fetching portfolio:', {
            error: error.message,
            stack: error.stack,
            portfolioId: parsedId,
        });
        res.status(500).json({ error: `Error fetching portfolio: ${error.message}` });
    }
};
