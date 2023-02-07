from fastapi import APIRouter,Depends,status
from fastapi.security import OAuth2PasswordRequestForm
import schemas,models,database,JWTtoken,oauth2
from hashing import hash
from typing import List
from sqlalchemy.orm import Session

router=APIRouter(
    tags=['sellers']
)
get_db=database.get_db

#sellers list with details
@router.get("/sellers",response_model=List[schemas.showSeller])
def fetch_sellers(db:Session = Depends(get_db)):
    sellers=db.query(models.Seller).all()
    return sellers

#function to add a new seller
@router.post('/sellers',status_code=status.HTTP_201_CREATED,response_model=schemas.showSeller)
def addseller(request:schemas.Seller,db:Session = Depends(get_db)):
    new_seller=models.Seller(
                    username=request.username,
                    password=hash.encrypt(request.password),
                    email=request.email
                    )
    db.add(new_seller)
    db.commit()
    db.refresh(new_seller)
    return new_seller


 

@router.post("/seller/login")
def login(request:schemas.Login,db:Session=Depends(get_db)):
    seller=db.query(models.Seller).filter(models.Seller.username==request.username).first()
    #return seller
    if not seller:
        return {"details":"seller does not exist"}
    if not hash.verify(request.password,seller.password):
        return {"details":"incorrect password"}

    access_token = JWTtoken.create_access_token(data={"sub": seller.username})
    return {"access_token": access_token,"token_type":"Bearer"}
        
#get a specific seller
@router.get("/sellers/{sellername}",response_model=schemas.showSeller) 
def seller_details(sellername:str,db:Session = Depends(get_db)):
    seller=db.query(models.Seller).filter(models.Seller.username==sellername).first()
    return seller

@router.get("/sellers/{sellername}/products")
def sellers_products(sellername:str,db:Session=Depends(get_db)):
    seller=db.query(models.Seller).filter(models.Seller.username==sellername).first()
    #products=seller.products
    return seller