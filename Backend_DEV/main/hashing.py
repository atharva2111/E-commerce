from passlib.context import CryptContext

pwd_cxt=CryptContext(schemes=['bcrypt'],deprecated='auto')

class hash:
    def encrypt(password:str):
        return pwd_cxt.hash(password)

    def verify(new_password,hashed_password):
        return pwd_cxt.verify(new_password,hashed_password)
