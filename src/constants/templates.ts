export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: "",
  },
  {
    id: "software-proposal",
    label: "Software Proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; background-color: #f4f8fb; color: #333; }
            h1 { color: #2c3e50; text-align: center; }
            h2 { color: #2980b9; }
            .section { margin-bottom: 20px; }
            .image-placeholder { text-align: center; margin: 20px 0; }
            .image-placeholder img { width: 80%; max-width: 400px; border-radius: 10px; }
          </style>
        </head>
        <body>
          <h1>Software Proposal</h1>
          <div class="image-placeholder">
            <img src="/software-placeholder.png" alt="Software Proposal Illustration" />
          </div>
          <div class="section">
            <h2>Introduction</h2>
            <p>Provide an overview of the proposed software solution, its goals, and its benefits.</p>
          </div>
          <div class="section">
            <h2>Project Scope</h2>
            <p>Detail the scope of the software project, including key features and deliverables.</p>
          </div>
          <div class="section">
            <h2>Timeline</h2>
            <p>Outline the project timeline, including milestones and deadlines.</p>
          </div>
        </body>
      </html>
    `,
  },
  {
    id: "project-proposal",
    label: "Project Proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
      <html>
        <head>
          <style>
            body { font-family: Georgia, serif; padding: 20px; background-color: #fff7e6; color: #555; }
            h1 { color: #d35400; text-align: center; }
            h2 { color: #e67e22; }
            .section { margin-bottom: 20px; }
            .image-placeholder { text-align: center; margin: 20px 0; }
            .image-placeholder img { width: 70%; max-width: 350px; border: 2px solid #e67e22; border-radius: 10px; }
          </style>
        </head>
        <body>
          <h1>Project Proposal</h1>
          <div class="image-placeholder">
            <img src="/project-placeholder.png" alt="Project Proposal Illustration" />
          </div>
          <div class="section">
            <h2>Executive Summary</h2>
            <p>Summarize the project objectives, expected outcomes, and overall importance.</p>
          </div>
          <div class="section">
            <h2>Budget Estimate</h2>
            <p>Provide an overview of the budget, including estimated costs and resource allocation.</p>
          </div>
          <div class="section">
            <h2>Implementation Plan</h2>
            <p>Describe the steps and strategies for executing the project effectively.</p>
          </div>
        </body>
      </html>
    `,
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
      <html>
        <head>
          <style>
            body { font-family: 'Times New Roman', serif; padding: 20px; background-color: #f5f5f5; color: #444; }
            .header { margin-bottom: 20px; text-align: center; color: #2d3436; }
            h1 { color: #0984e3; text-align: center; }
            .image-placeholder img { width: 50%; max-width: 200px; margin: 20px auto; display: block; }
          </style>
        </head>
        <body>
          <h1>Business Letter</h1>
          <div class="image-placeholder">
            <img src="/business-placeholder.png" alt="Business Letter Illustration" />
          </div>
          <div class="header">
            <p>Your Company Name</p>
            <p>Your Company Address</p>
            <p>Date</p>
          </div>
          <div class="content">
            <p>Dear [Recipient's Name],</p>
            <p>We are writing to discuss [purpose of the letter].</p>
            <p>We look forward to your response.</p>
            <p>Sincerely,</p>
            <p>[Your Name]</p>
          </div>
        </body>
      </html>
    `,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; background-color: #eef5f9; color: #2c3e50; }
            h1 { margin-bottom: 0; text-align: center; }
            h2 { color: #2980b9; }
            .section { margin-bottom: 20px; }
            .image-placeholder img { width: 30%; max-width: 150px; margin: 20px auto; display: block; border-radius: 50%; }
          </style>
        </head>
        <body>
          <div class="image-placeholder">
            <img src="/profile-placeholder.png" alt="Profile Picture Placeholder" />
          </div>
          <h1>[Your Name]</h1>
          <p style="text-align: center;">[Your Address] | [Your Email] | [Your Phone]</p>
          <div class="section">
            <h2>Education</h2>
            <p>List your degrees and institutions.</p>
          </div>
          <div class="section">
            <h2>Experience</h2>
            <p>Detail your professional experience, starting with the most recent.</p>
          </div>
          <div class="section">
            <h2>Skills</h2>
            <p>Include your key skills relevant to the role.</p>
          </div>
        </body>
      </html>
    `,
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
      <html>
        <head>
          <style>
            body { font-family: Calibri, sans-serif; padding: 20px; background-color: #fcf4e6; color: #6c5ce7; }
            .content { margin-bottom: 20px; }
            h1 { text-align: center; color: #e17055; }
          </style>
        </head>
        <body>
          <h1>Cover Letter</h1>
          <p>Dear [Recipient's Name],</p>
          <p>I am writing to express my interest in the [Position Title] at [Company Name].</p>
          <p>[Explain why you are a strong fit for the position and what you bring to the team.]</p>
          <p>Thank you for considering my application.</p>
          <p>Sincerely,</p>
          <p>[Your Name]</p>
        </body>
      </html>
    `,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; background-color: #e8f8f5; color: #16a085; }
            .header { margin-bottom: 20px; }
            h1 { text-align: center; color: #1abc9c; }
          </style>
        </head>
        <body>
          <h1>Letter</h1>
          <div class="header">
            <p>[Sender's Name]</p>
            <p>[Sender's Address]</p>
            <p>Date</p>
          </div>
          <div class="content">
            <p>Dear [Recipient's Name],</p>
            <p>[Content of the letter.]</p>
            <p>Sincerely,</p>
            <p>[Sender's Name]</p>
          </div>
        </body>
      </html>
    `,
  },
];
