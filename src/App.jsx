import { useEffect, useState } from "react";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

function App() {
  const [showModal, setShowModel] = useState(false)
  const [data, setData] = useState(null)
  const [loadingState, setLoadingState] = useEffect(false)

  function handleToggleModal(){
      setShowModel(!showModal)
  }

  useEffect(() => {
    async function fetchAPIData(){
      const NASA_KEY =import.meta.env.VITE_NASA_API_KEY
      const url= 'https://api.nasa.gov/planetary/apod' + '?api_key=${NASA_KEY}'
      
      const today = (new Date()).toDateString()
      const localKey='NASA-${today}'
      if (localStorage.getItem(localKey)) {
        const apiData=JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log('fetched from API today')
        return
      }
      localStorage.clear()

      
      try {
        const res=await fetch(url)
        const apiData=await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log('DATA\n',apiData)
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchAPIData()
  }, [])

  return (
    <>
      {data ? (<Main  data={data} />) :
        (<div className="loadingState">
          <i className="fa-solid fa-gear"></i>
          </div>
      )}
      {showModal && (<SideBar data={data} handleToggleModal={handleToggleModal} />)}
      {data && ( <Footer data={data} handleToggleModal={handleToggleModal} />)} 
    </>
  );
}

export default App;
