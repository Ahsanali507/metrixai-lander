import { NextRequest, NextResponse } from "next/server";

interface EarlyAccessData {
  name: string;
  email: string;
  company: string;
  role: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: EarlyAccessData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.company || !data.role) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Store the lead in a database (Supabase, Airtable, etc.)
    // 2. Send a notification email
    // 3. Add to email marketing list

    // Example: Store in Airtable (uncomment and configure)
    /*
    if (process.env.AIRTABLE_API_KEY && process.env.AIRTABLE_BASE_ID) {
      await fetch(
        `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/EarlyAccess`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: {
              Name: data.name,
              Email: data.email,
              Company: data.company,
              Role: data.role,
              SubmittedAt: new Date().toISOString(),
            },
          }),
        }
      );
    }
    */

    // Example: Send email notification (uncomment and configure)
    /*
    if (process.env.SENDGRID_API_KEY) {
      await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [{ email: "info@metrixai.io" }],
              subject: `New Early Access Request: ${data.company}`,
            },
          ],
          from: { email: "noreply@metrixai.io" },
          content: [
            {
              type: "text/html",
              value: `
                <h2>New Early Access Request</h2>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Company:</strong> ${data.company}</p>
                <p><strong>Role:</strong> ${data.role}</p>
              `,
            },
          ],
        }),
      });
    }
    */

    // Log the submission (for development)
    console.log("Early access submission:", data);

    return NextResponse.json(
      { success: true, message: "Thank you for your interest!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Early access submission error:", error);
    return NextResponse.json(
      { error: "An error occurred. Please try again." },
      { status: 500 }
    );
  }
}
