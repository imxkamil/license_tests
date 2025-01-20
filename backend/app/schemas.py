from pydantic import BaseModel
from typing import Optional

class Question(BaseModel):
    """
    Defines the response format for a question.
    Used when fetching questions from the API.
    """
    id: int
    category: str
    question_text: str
    media_path: Optional[str]  # Image/video (can be None)
    media_type: Optional[str]  # Can be 'image' or 'video'
    correct_answer: str
    explanation: Optional[str]  # Explanation (nullable)

    class Config:
        orm_mode = True  # Enables conversion from database objects
