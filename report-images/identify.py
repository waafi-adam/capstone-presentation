import re

with open('report.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Remove all base64 data to make it manageable, but keep context
clean = re.sub(r'data:image/[^;]+;base64,[^"]+', 'IMG_PLACEHOLDER', html)

# Find text near each image
parts = clean.split('IMG_PLACEHOLDER')
for i in range(len(parts) - 1):
    before = re.sub(r'<[^>]+>', ' ', parts[i])
    before = re.sub(r'\s+', ' ', before).strip()
    after = re.sub(r'<[^>]+>', ' ', parts[i+1][:500])
    after = re.sub(r'\s+', ' ', after).strip()

    context_before = before[-200:] if len(before) > 200 else before
    context_after = after[:200] if len(after) > 200 else after

    print(f'\n--- Image {i+1:02d} ---')
    print(f'BEFORE: ...{context_before}')
    print(f'AFTER:  {context_after}...')
