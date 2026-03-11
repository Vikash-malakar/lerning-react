import {toast} from 'react-toastify'


function App(){
  function demo(){
     toast("successfulllly ",{
      type:"success",
      position:"top-center",
      autoClose:2000,
      hideProgressBar:false,
      closeOnClick:true,
      pauseOnHover:true,
      draggable:true,
      progress:undefined,
      theme:"light",
      
      

      
    

     })
}
 
  return (
    <>
    <button onClick={demo}>click here </button>
      
    </>
  )

}
export default App
