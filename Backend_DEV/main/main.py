from fastapi import FastAPI
import models 
from database import engine,get_db

from starlette.middleware.cors import CORSMiddleware

from routers import user,product,seller,register

app=FastAPI()

models.Base.metadata.create_all(bind=engine)


origins = [
    "http://localhost",
    "http://localhost:4200",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user.router)
app.include_router(product.router)
app.include_router(seller.router)
app.include_router(register.router)

 
  