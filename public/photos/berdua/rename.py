import os
from PIL import Image
import pillow_heif

# =========================
# SETTING FOLDER
# =========================
# Isi dengan folder tempat file foto/video lu
folder_path = r"D:\Dev\project\webapp\birthday-gita\public\photos\berdua"

# =========================
# REGISTER HEIC SUPPORT
# =========================
pillow_heif.register_heif_opener()

# =========================
# FORMAT YANG DIDUKUNG
# =========================
image_extensions = [".jpg", ".jpeg", ".png", ".heic"]
video_extensions = [".mp4", ".mov", ".avi", ".mkv"]

# =========================
# AMBIL SEMUA FILE
# =========================
files = os.listdir(folder_path)

counter = 1

for file_name in files:
    old_path = os.path.join(folder_path, file_name)

    # Skip kalau bukan file
    if not os.path.isfile(old_path):
        continue

    ext = os.path.splitext(file_name)[1].lower()

    # =========================
    # HAPUS VIDEO
    # =========================
    if ext in video_extensions:
        os.remove(old_path)
        print(f"[VIDEO DIHAPUS] {file_name}")
        continue

    # =========================
    # CONVERT FOTO KE JPG
    # =========================
    if ext in image_extensions:
        try:
            img = Image.open(old_path).convert("RGB")

            new_name = f"{counter}.jpg"
            new_path = os.path.join(folder_path, new_name)

            img.save(new_path, "JPEG", quality=95)

            # Hapus file lama kalau beda nama/ext
            if old_path != new_path:
                os.remove(old_path)

            print(f"[BERHASIL] {file_name} -> {new_name}")

            counter += 1

        except Exception as e:
            print(f"[ERROR] {file_name} : {e}")

print("\nSELESAI BRO 🔥")