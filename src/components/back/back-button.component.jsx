import { useNavigate } from "react-router-dom"
import { BackButton } from "./back-button.style"

const Back = ()=>{
    const navigate = useNavigate();
    return <BackButton onClick={()=>navigate(-1)}>Back</BackButton>;
    
}

export default Back;