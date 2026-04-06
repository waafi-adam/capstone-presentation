from PIL import Image
import os

img_dir = 'public/images'
for f in os.listdir(img_dir):
    path = os.path.join(img_dir, f)
    size = os.path.getsize(path)
    if size > 500000 and f.endswith('.png'):
        img = Image.open(path)
        # Resize if very large
        if img.width > 1600:
            ratio = 1600 / img.width
            img = img.resize((1600, int(img.height * ratio)), Image.LANCZOS)
        # Save as optimized PNG
        img.save(path, optimize=True)
        new_size = os.path.getsize(path)
        print(f'{f}: {size//1024}KB -> {new_size//1024}KB')
