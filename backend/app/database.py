from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# SQLite database URL
DATABASE_URL = "sqlite:///./test.db"

# Create an engine (connects to SQLite database)
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})

# Create a session (used to interact with the database)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
