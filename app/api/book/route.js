import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const data = await req.json();

    const email = await resend.emails.send({
      from: "Care Cruise <booking@carecruise.care>",
      to: ["carecruisebusiness@gmail.com"],
      subject: "New Care Cruise Ride Request",
      html: `
        <h2>New Care Cruise Ride Request</h2>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Pickup:</b> ${data.pickup}</p>
        <p><b>Destination:</b> ${data.destination}</p>
        <p><b>Date:</b> ${data.date}</p>
        <p><b>Time:</b> ${data.time}</p>
        <p><b>Notes:</b> ${data.notes}</p>
      `,
    });

    return Response.json({ success: true, email });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
