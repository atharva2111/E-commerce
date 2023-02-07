from fastapi import APIRouter,Depends,status
import schemas,models,database,JWTtoken
from hashing import hash
from typing import List
from sqlalchemy.orm import Session

router=APIRouter(
    tags=['Users']
)
get_db=database.get_db

#users list with details
@router.get("/users",response_model=List[schemas.showUser])
def fetch_users(db:Session = Depends(get_db)):
    users=db.query(models.User).all()
    return users

#function to add a new user
@router.post('/users',status_code=status.HTTP_201_CREATED,response_model=schemas.User)
def addUser(request:schemas.User,db:Session = Depends(get_db)):
    new_User=models.User(
                    username=request.username,
                    password=hash.encrypt(request.password),
                    email=request.email
                    )
    db.add(new_User)
    db.commit()
    db.refresh(new_User)
    return new_User


#get a specific user
@router.get("/users/{username}",response_model=schemas.showUser) 
def user_details(username:str,db:Session = Depends(get_db)):
    user=db.query(models.User).filter(models.User.username==username).first()
    return user 

@router.post("/user/login")
def login(request:schemas.Login,db:Session=Depends(get_db)):
    seller=db.query(models.User).filter(models.User.username==request.username).first()
    #return seller
    if not seller:
        return {"details":"seller does not exist"}
    if not hash.verify(request.password,seller.password):
        return {"details":"incorrect password"}

    access_token = JWTtoken.create_access_token(data={"sub": seller.username})
    return {"access_token": access_token,"token_type":"Bearer"}