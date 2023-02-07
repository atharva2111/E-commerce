from fastapi import APIRouter,Depends,status,HTTPException
import schemas,models,database,oauth2
from typing import List
from sqlalchemy.orm import Session

router=APIRouter(
    tags=['Products']
)
get_db=database.get_db

#function to add a new product
@router.post('/products',status_code=status.HTTP_201_CREATED,response_model=schemas.showProduct)
def addProduct(request:schemas.AcceptProduct,db:Session = Depends(get_db)):
    seller=db.query(models.Seller).filter(models.Seller.username==request.sellername).first()
    new_Product=models.Product(
                            name=request.name,
                            price=request.price,
                            description=request.description,
                            seller_id=seller.id)
    db.add(new_Product)
    db.commit()
    db.refresh(new_Product)
    return new_Product

#products list with details
@router.get("/products",response_model=List[schemas.showProduct])
def fetch_products(db:Session = Depends(get_db)):
    products=db.query(models.Product).all()
    return products

#get a specific product
@router.get("/products/{name}") 
def product_details(name:str,db:Session = Depends(get_db)):
    product=db.query(models.Product).filter(models.Product.name==name).first()
    return product 

@router.delete("/products/{name}")
def delete(name:str,db:Session=Depends(get_db)):
    db.query(models.Product).filter(models.Product.name==name).delete()
    db.commit()
    #db.refresh()
    return {'status':'done'}

@router.put("/product/{name}")
def update(name:str,request:schemas.showProduct,db:Session=Depends(get_db)):
    db.query(models.Product).filter(models.Product.name==name).update({'name':request.name,'price':request.price,'description':request.description})
    db.commit()
    return 'done'