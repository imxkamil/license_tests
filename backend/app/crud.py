from sqlalchemy.orm import Session
import models

def get_questions(db: Session, category: str = None):
    """
    Fetches all questions from the database.
    If `category` is specified, filters by category.
    """
    query = db.query(models.Question)
    if category:
        query = query.filter(models.Question.category == category)
    return query.all()  # Return all matching questions
