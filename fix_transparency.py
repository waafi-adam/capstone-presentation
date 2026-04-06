from PIL import Image
import os

img_dir = 'public/images'
for f in sorted(os.listdir(img_dir)):
    path = os.path.join(img_dir, f)
    img = Image.open(path)
    if img.mode == 'RGBA':
        # Has alpha channel - composite onto white background
        bg = Image.new('RGBA', img.size, (255, 255, 255, 255))
        bg.paste(img, mask=img.split()[3])
        bg = bg.convert('RGB')
        bg.save(path)
        print(f'Fixed transparency: {f}')
    elif img.mode == 'P':
        # Palette mode with possible transparency
        img = img.convert('RGBA')
        bg = Image.new('RGBA', img.size, (255, 255, 255, 255))
        bg.paste(img, mask=img.split()[3])
        bg = bg.convert('RGB')
        bg.save(path)
        print(f'Fixed palette transparency: {f}')
    else:
        print(f'OK ({img.mode}): {f}')
