import pandas as pd
import os
from sqlalchemy import create_engine
from database import SessionLocal, engine
import models

# Ensure database tables exist before inserting data
models.Base.metadata.create_all(bind=engine)

# New Paths
EXCEL_FILE = "../qa.xlsx"
MEDIA_FOLDER = "media/assets" 

# Load Excel Data
df = pd.read_excel(EXCEL_FILE)

# Function to Validate Media File Paths
def check_media_file(filename):
    if pd.isna(filename) or not isinstance(filename, str):
        return False
    return os.path.exists(os.path.join(MEDIA_FOLDER, filename))

# Insert Questions into the Database
db = SessionLocal()

for index, row in df.iterrows():
    word_num = int(row["Numer pytania"]) if pd.notna(row["Numer pytania"]) else None 
    question_text = row["Pytanie"]
    answer_A = row["Odpowiedź A"] if pd.notna(row["Odpowiedź A"]) else None
    answer_B = row["Odpowiedź B"] if pd.notna(row["Odpowiedź B"]) else None
    answer_C = row["Odpowiedź C"] if pd.notna(row["Odpowiedź C"]) else None
    correct_answer = row["Poprawna odp"]
    
    # Update Media Path Check
    media_filename = row["Media"] if pd.notna(row["Media"]) else None
    media_path = media_filename if check_media_file(media_filename) else None

    category = row["Kategorie"]
    is_multichoice = bool(answer_A or answer_B or answer_C)
    media_type = "image" if media_path and media_path.endswith((".jpg", ".png")) else "audio" if media_path and media_path.endswith(".wav") else "none"

    new_question = models.Question(
        word_num=word_num,
        question_text=question_text,
        answer_A=answer_A,
        answer_B=answer_B,
        answer_C=answer_C,
        correct_answer=correct_answer,
        media_path=media_path,
        media_type=media_type,
        category=category,
        is_multichoice=is_multichoice
    )
    db.add(new_question)
    print(new_question)

db.commit()
db.close()
