import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // This is a stub endpoint for availability checking
    // In a real implementation, you would check against your booking system
    
    const { searchParams } = new URL(request.url);
    const checkIn = searchParams.get('checkIn');
    const checkOut = searchParams.get('checkOut');
    const guests = searchParams.get('guests');
    
    // Mock availability response
    // In production, this would query your database or booking system
    const mockAvailability = {
      available: true,
      rooms: [
        {
          id: 1,
          name: 'Master Suite',
          available: true,
          price: 200
        },
        {
          id: 2,
          name: 'Deluxe Room',
          available: true,
          price: 150
        },
        {
          id: 3,
          name: 'Family Suite',
          available: true,
          price: 300
        }
      ]
    };
    
    return NextResponse.json(mockAvailability, { status: 200 });
    
  } catch (error) {
    console.error('Availability check error:', error);
    
    return NextResponse.json(
      { message: 'Greška pri provjeri dostupnosti' },
      { status: 500 }
    );
  }
} 