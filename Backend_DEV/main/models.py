from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from database import Base
from enum import Enum 
from sqlalchemy.orm import relationship


class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    price = Column(Integer)
    description = Column (String)
    seller_id= Column(Integer,ForeignKey('sellers.id'))
    
    seller = relationship("Seller",back_populates="products")

class User(Base):
    __tablename__="users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String)
    email = Column(String)
    password = Column(String)

class Seller(Base):
    __tablename__="sellers"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String)
    email = Column(String)
    password = Column(String) 
    products = relationship("Product",back_populates="seller")


