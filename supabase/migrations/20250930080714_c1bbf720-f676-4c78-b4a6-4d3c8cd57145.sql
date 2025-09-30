-- Create waitlist submissions table
CREATE TABLE public.waitlist_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  source TEXT,
  metadata JSONB
);

-- Enable Row Level Security (allowing public access for waitlist submissions)
ALTER TABLE public.waitlist_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy for public access to insert waitlist submissions
CREATE POLICY "Anyone can submit to waitlist" 
ON public.waitlist_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy for admins to view all submissions (you can add admin roles later)
CREATE POLICY "Public can view waitlist submissions" 
ON public.waitlist_submissions 
FOR SELECT 
USING (true);