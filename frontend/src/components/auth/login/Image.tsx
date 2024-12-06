import ecommeceImage from "../../../assets/charlesdeluvio-krsBQymp76k-unsplash.jpg"

const Image = () => {
     return (
          <div className="w-[50vw]">
               <img src={ecommeceImage} className="h-[100vh] w-full object-cover" alt="shop" />
          </div >
     )
}

export default Image