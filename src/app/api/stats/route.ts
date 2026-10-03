import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    prizePool: '₹12,50,000+',
    totalRegistrations: '4,850+',
    collegesRepresented: '180+',
    vcInvestorsCount: '25+',
    startupsPitched: '60+',
  });
}
