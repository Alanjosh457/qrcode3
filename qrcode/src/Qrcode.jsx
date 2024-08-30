
import { useState } from 'react'
import './index.css'
export const Qrcode = () => {
   const [img,setImg] =useState("")
   const [load,setload] =useState(false)
   const [qimg, setqr]=useState("alan")
   async function almsg(){
    setload(true);
      try{
        const url=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qimg}
        `
        setImg(url)

      }
      catch(error){
        console.error("ERROR",error)

      }
      finally{
        setload(false)

      }
    }
    function down(){
        fetch(img) 
        .then((response)=>response.blob())
        .then((blob)=>{
            const link=document.createElement("a");
            link.href=URL.createObjectURL(blob);
            link.download='qr.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        )
        .catch((error) =>{
            console.error('Error downloading Qr code',error)
        })
    }
  return (
    <> <div className="qrcont">
        <h1>QR CODE GENERATOR</h1>
        {img && <img src={img} className='img1'/>}
       {load && <p>Loading image</p>}
        <div >
            <label className="datalab" htmlFor="dataInput"> Data for Qrcode </label>
            <input type="text" id="dataInput" placeholder="enter data for qrcode" value={qimg} onChange={(e)=>setqr(e.target.value)}></input>
            <label className="datalab" htmlFor="dataInput"> Image </label>
            <input type="text" id="qrimage" placeholder="Enter image size"></input>
            <button className='qr' onClick={almsg} disabled={load}>Generate QR</button>
            <button className='down' onClick={down}>Download</button>
          
            </div> 

            
    </div>
   
    </>
   
  )
}
