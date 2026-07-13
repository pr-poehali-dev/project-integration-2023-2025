import json
import os
import urllib.request


def handler(event: dict, context) -> dict:
    """Принимает заявки с сайта GoChat и отправляет их в Telegram-чат менеджеров."""
    method = event.get('httpMethod', 'GET')

    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',
    }

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': headers, 'body': ''}

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': headers,
            'body': json.dumps({'error': 'Метод не поддерживается'}),
        }

    body_str = event.get('body') or '{}'
    try:
        data = json.loads(body_str)
    except json.JSONDecodeError:
        data = {}

    name = str(data.get('name') or '').strip()
    phone = str(data.get('phone') or '').strip()
    messenger = str(data.get('messenger') or '').strip()
    service = str(data.get('service') or '').strip()
    task = str(data.get('task') or '').strip()
    source = str(data.get('source') or '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': headers,
            'body': json.dumps({'error': 'Укажите имя и телефон'}),
        }

    lines = [
        '🔥 Новая заявка с сайта GO CHAT',
        f'Имя: {name}',
        f'Телефон: {phone}',
    ]
    if messenger:
        lines.append(f'Мессенджер: {messenger}')
    if service:
        lines.append(f'Услуга: {service}')
    if task:
        lines.append(f'Задача: {task}')
    if source:
        lines.append(f'Источник: {source}')
    text = '\n'.join(lines)

    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID')

    sent = False
    if bot_token and chat_id:
        try:
            url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
            payload = json.dumps({'chat_id': chat_id, 'text': text}).encode('utf-8')
            req = urllib.request.Request(
                url, data=payload, headers={'Content-Type': 'application/json'}
            )
            with urllib.request.urlopen(req, timeout=10) as resp:
                resp.read()
            sent = True
        except Exception:
            sent = False

    return {
        'statusCode': 200,
        'headers': headers,
        'body': json.dumps({'success': True, 'sent': sent}),
    }
