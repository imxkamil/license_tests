from sqlalchemy.orm import Session
from database import SessionLocal, engine
import models

# Create the database tables
models.Base.metadata.create_all(bind=engine)

# Sample questions
sample_questions = [
    {
        "category": "basic",
        "question_text": "Czy znak STOP wymaga całkowitego zatrzymania pojazdu?",
        "media_path": "stop_sign.jpg",
        "media_type": "image",
        "correct_answer": "yes",
        "explanation": "Znak STOP oznacza obowiązek zatrzymania się i upewnienia się, że droga jest wolna."
    },
    {
        "category": "basic",
        "question_text": "Czy można przekroczyć prędkość podczas wyprzedzania?",
        "media_path": "speeding.mp4",
        "media_type": "video",
        "correct_answer": "no",
        "explanation": "Przekroczenie prędkości jest zawsze zabronione, nawet podczas wyprzedzania."
    },
    {
        "category": "specialist",
        "question_text": "Czy na autostradzie można zatrzymać się na pasie awaryjnym bez uzasadnionej przyczyny?",
        "media_path": "highway_stop.jpg",
        "media_type": "image",
        "correct_answer": "no",
        "explanation": "Postój na pasie awaryjnym jest dozwolony tylko w przypadku awarii pojazdu."
    },
    {
        "category": "specialist",
        "question_text": "Czy w przedstawionej sytuacji odległość od znaku ostrzegawczego do miejsca niebezpiecznego wynosi do 100 metrów?",
        "media_path": "warning_sign.mp4",
        "media_type": "video",
        "correct_answer": "yes",
        "explanation": "Standardowa odległość znaku ostrzegawczego od miejsca niebezpiecznego to 100m."
    }
]

# Insert data into database
db: Session = SessionLocal()
for question in sample_questions:
    db.add(models.Question(**question))
db.commit()
db.close()

print("✅ Database seeded successfully!")
