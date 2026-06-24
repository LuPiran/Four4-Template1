import { sanitizeText } from './orderValidation'
import type { ContactFormData } from './contactValidation'

type SubmitContactResult = {
  success: boolean
  message?: string
}

function getContactAccessKey(): string | undefined {
  const contactKey = import.meta.env.VITE_CONTACT_FORM_ACCESS_KEY as string | undefined
  const orderKey = import.meta.env.VITE_ORDER_FORM_ACCESS_KEY as string | undefined
  return contactKey?.trim() || orderKey?.trim()
}

export async function submitContactMessage(
  data: ContactFormData & { subject?: string },
): Promise<SubmitContactResult> {
  const accessKey = getContactAccessKey()

  if (!accessKey) {
    return {
      success: false,
      message: 'Contact form is not configured. Please set VITE_CONTACT_FORM_ACCESS_KEY.',
    }
  }

  const subjectLine = data.subject?.trim()
    ? sanitizeText(data.subject, 120)
    : 'General inquiry'

  const payload = {
    access_key: accessKey,
    subject: `Polisupport contact — ${subjectLine} (${sanitizeText(data.name, 80)})`,
    from_name: 'Polisupport Website',
    name: sanitizeText(data.name, 120),
    email: sanitizeText(data.email, 120),
    phone: sanitizeText(data.phone, 30),
    replyto: sanitizeText(data.email, 120),
    message: [
      `Subject: ${subjectLine}`,
      '',
      sanitizeText(data.message, 4000),
      '',
      `Phone: ${data.phone.trim() || 'Not provided'}`,
      `Submitted at: ${new Date().toISOString()}`,
    ].join('\n'),
    botcheck: '',
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const result = (await response.json()) as { success?: boolean; message?: string }

    if (!response.ok || !result.success) {
      return {
        success: false,
        message: result.message ?? 'Unable to send your message. Please try again.',
      }
    }

    return { success: true }
  } catch {
    return {
      success: false,
      message: 'Network error. Check your connection and try again.',
    }
  }
}
