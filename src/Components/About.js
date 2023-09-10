import{BiCodeAlt} from 'react-icons/bi';


export const About =()=>{
    return(
        <div className="container-fix" id='pro1'>
            <div className="row">
            <h1 id="proje">My projects :</h1>
                <div className="col-3">
                    <img src="https://stickerswiki.ams3.cdn.digitaloceanspaces.com/MemojiiOS13/148933.512.webp" id="Img"/>
                </div>
                <div className="col-9" id="pro">
                            <div id="proj">
                            <h2>- Still now there is no project posted. <br/><BiCodeAlt id='Bi'/></h2>
                            </div>
                </div>
            </div>
        </div>
    );
}