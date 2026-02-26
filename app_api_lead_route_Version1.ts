import { NextRequest, NextResponse } from 'next/server';
import { leadFormSchema } from '@/lib/validators';
import { sendLeadEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate data
    const validatedData = leadFormSchema.parse(body);

    // Send email
    const emailSent = await sendLeadEmail(validatedData);

    if (!emailSent) {
      return NextResponse.json(
        {
          success: false,
          error: 'Не вдалося відправити заявку. Спробуйте пізніше.',
          fallbackEmail: process.env.FALLBACK_EMAIL,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Заявка успішно відправлена!',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Lead form error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Помилка при обробці форми. Спробуйте ще раз.',
      },
      { status: 400 }
    );
  }
}