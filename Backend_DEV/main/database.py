from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from pydantic import PostgresDsn


#SQLALCHEMY_DATABASE_URL = "sqlite:///D:/POC _ E_COMMERCE/E_COMMERCE/code/Backend_DEV/sql_app.db"
SQLALCHEMY_DATABASE_URL = "postgresql://postgres:password@127.0.0.1:5432/e_commerce"
engine = create_engine(
    SQLALCHEMY_DATABASE_URL
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db= SessionLocal()
    try:
        yield db
    finally:
        db.close()