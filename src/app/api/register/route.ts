import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, college, yearOfStudy, selectedEvent, teamName } = body;

    // Server-side Validation
    if (!fullName || !email || !phone || !college || !selectedEvent) {
      return NextResponse.json(
        { success: false, message: 'Missing required registration fields.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address format.' },
        { status: 400 }
      );
    }

    // Generate unique Ticket ID
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const ticketId = `NSUT-ES-2026-${randomNum}`;

    // Return structured Node.js JSON response
    return NextResponse.json({
      success: true,
      message: 'Registration successful! Confirmation pass generated.',
      data: {
        ticketId,
        fullName,
        email,
        college,
        selectedEvent,
        teamName: teamName || 'N/A',
        timestamp: new Date().toISOString(),
        paymentStatus: 'CONFIRMED',
      }
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Internal Server Error during registration processing.' },
      { status: 500 }
    );
  }
}
