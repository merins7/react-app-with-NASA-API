export default function SideBar(props){

    const {handleToggleModal}=props

    return(
        <div className="sidebar">
            <div className="bgOverlay"></div>
             <div className="sidebarContents">
              <h2>The Brutal Landscape</h2>
               <div>
                <p>Description</p>
                <p>{data?.date}</p>
               </div>
               <button onClick={handleToggleModal}>
               <i className="fa-solid fa-arrow-right"></i>
               </button>
             </div>
        </div>
    )
}  