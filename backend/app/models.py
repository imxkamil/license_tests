from sqlalchemy import Column, Integer, String, Enum, Boolean
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Question(Base):
    """
    Database model for questions.
    - Multi-choice (A, B, C) or Yes/No
    - Media file support
    """
    __tablename__ = "questions"

    id = Column(Integer, primary_key=True, index=True)
    word_num = Column(Integer, unique=True, nullable=False)  # ✅ New column for internal question number
    question_text = Column(String, nullable=False)
    answer_A = Column(String, nullable=True)
    answer_B = Column(String, nullable=True)
    answer_C = Column(String, nullable=True)
    correct_answer = Column(String, nullable=False)
    media_path = Column(String, nullable=True)
    media_type = Column(Enum("image", "audio", "none", name="media_type"), nullable=False, default="none")
    category = Column(String, nullable=True)
    is_multichoice = Column(Boolean, default=False)
