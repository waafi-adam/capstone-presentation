from PIL import Image
import os
for f in sorted(os.listdir('public/images')):
    path = os.path.join('public/images', f)
    img = Image.open(path)
    print(f'{f}: {img.width}x{img.height} ({os.path.getsize(path)//1024}KB)')
