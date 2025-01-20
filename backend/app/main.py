from fastapi import FastAPI, Depends
from fastapi.staticfiles import StaticFiles
from sqlalchemy.orm import Session
import models, crud
from database import SessionLocal, engine

app = FastAPI()

# Serve Media Files
app.mount("/media", StaticFiles(directory="app/media"), name="media")

# Database Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/questions/")
def get_questions(db: Session = Depends(get_db)):
    return crud.get_questions(db)
