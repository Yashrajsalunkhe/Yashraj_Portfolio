import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long" })
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      
      // Here you would typically save this to a database or send an email
      // For now, we'll just respond with success
      
      // Log the contact form submission (in a real app, you might save this to a database)
      console.log('Contact form submission:', validatedData);
      
      return res.status(200).json({ 
        success: true, 
        message: 'Message received successfully!' 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: 'Validation failed', 
          errors: error.errors 
        });
      }
      
      return res.status(500).json({ 
        success: false, 
        message: 'Something went wrong. Please try again later.'
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
