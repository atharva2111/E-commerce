from pydantic import BaseModel
from typing import Optional,List



class User(BaseModel):
    username:str
    password:str
    email:Optional[str] = None

    class Config():
        orm_mode=True

class showUser(BaseModel):
    username:str
    email:str
    
    class Config():
        orm_mode=True 




class Seller(BaseModel):
    username:str
    password:str
    email:Optional[str] = None
    
    class Config():
        orm_mode=True


class Product(BaseModel):
    name:str
    price:int
    description:str
    seller_id:int
    
    class Config():
        orm_mode=True
        
class AcceptProduct(BaseModel):
    name:str
    price:int
    description:str
    sellername:str
    
    class Config():
        orm_mode=True

class showSeller(BaseModel):
    username:str
    email:str
    products : List[Product]

    class Config():
        orm_mode=True 


class showProduct(BaseModel):

    name:str
    price:int
    description:str
    
    class Config():
        orm_mode=True


class Login(BaseModel):
    username:str
    password:str


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: Optional[str]=None

class Register(BaseModel):
    username:str
    email:str
    password:str
    usertype:str
    
    class config():
        orm_mode=True


