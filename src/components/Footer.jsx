export default function Footer(props){

    const {data,showModal,handleToggleModal}=props
    
    return(
        <footer>
            <div className="bgGradient">
                <h2>{data?.title}</h2>
                <h1>APOD PROJECT</h1>
            </div>
            <button onClick={handleToggleModal}>
            <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}