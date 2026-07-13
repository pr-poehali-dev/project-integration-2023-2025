const LEAD_NOTIFY_URL = "https://functions.poehali.dev/5407b594-7e28-4441-9c96-5784f1bf575b"

export interface LeadPayload {
  name: string
  phone: string
  messenger?: string
  service?: string
  task?: string
  source?: string
}

export async function sendLead(payload: LeadPayload): Promise<boolean> {
  try {
    const res = await fetch(LEAD_NOTIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
    return res.ok
  } catch {
    return false
  }
}
