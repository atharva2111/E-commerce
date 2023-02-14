from fastapi import APIRouter,Depends
import schemas,models,database
from hashing import hash
from sqlalchemy.orm import Session

router=APIRouter(tags=['Register'])
get_db=database.get_db

@router.post('/register')
def registerUser(request:schemas.Register,db:Session=Depends(get_db)):
    #if request.username in models.User.username or request.username in models.Seller.username:
        #return {"error":"user already exists"}
    if request.usertype=='buyer':
        new_User=models.User(
                    username=request.username,
                    password=hash.encrypt(request.password),
                    email=request.email
                    )
        db.add(new_User)
        db.commit()
        db.refresh(new_User)
        return new_User
    elif request.usertype=='seller':
        new_Seller=models.Seller(
                    username=request.username,
                    password=hash.encrypt(request.password),
                    email=request.email
                    )
        db.add(new_Seller)
        db.commit()
        db.refresh(new_Seller)
        return new_Seller