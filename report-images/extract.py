import re, base64, os

with open('report.html', 'r', encoding='utf-8') as f:
    html = f.read()

imgs = re.findall(r'<img[^>]*src="data:image/(png|jpeg|gif|webp);base64,([^"]+)"', html)
print(f'Found {len(imgs)} images')

for i, (ext, data) in enumerate(imgs):
    ext_map = {'jpeg': 'jpg', 'png': 'png', 'gif': 'gif', 'webp': 'webp'}
    filename = f'image_{i+1:02d}.{ext_map.get(ext, ext)}'
    with open(filename, 'wb') as f:
        f.write(base64.b64decode(data))
    size = os.path.getsize(filename)
    print(f'  {filename} ({size} bytes)')
