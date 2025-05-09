import { NextResponse } from 'next/server';
import Consultation from '../../../models/Consultation';
import connectToDatabase from '../../../utils/mongoose';
export async function POST(req) {
  try {
    await connectToDatabase()
    const body = await req.json();
    const newConsultation = new Consultation(body);
    await newConsultation.save();
    return NextResponse.json({ message: 'Form submitted successfully!' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}