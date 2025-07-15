# Run and deploy your AI Studio app

This contains everything you need to run your app locally or deploy it live (e.g., on Vercel).

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy on Vercel

1. **Connect your GitHub/GitLab repo to Vercel** (or use Vercel CLI to deploy).
2. **Set Environment Variable:**
   - Go to your project in the Vercel dashboard.
   - Navigate to **Settings > Environment Variables**.
   - Add a new variable:
     - Name: `GEMINI_API_KEY`
     - Value: (your Gemini API key)
   - Save and redeploy.
3. **Build Output Directory:**
   - Ensure the output directory is set to `dist` in Vercel settings.
4. **Deploy:**
   - Vercel will automatically build and deploy your app.
   - After deployment, your site will be live at the provided Vercel URL.

**Troubleshooting:**
- If you see a black screen, check that the `GEMINI_API_KEY` is set correctly in Vercel.
- Open browser DevTools (F12) and check for errors in the Console.
- Make sure the build output directory is `dist`.

