import { useState } from "react";
import $ from 'jquery';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
export default function DownloadBtn(){

    const [loader, setLoader] = useState(false);
  
    const downloadPDF = () =>{
      const capture1= $('.a4');
      setLoader(true);
      const doc = new jsPDF('p', 'mm', 'a4'); 
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
        for(let i=capture1.length-1;i>=0;i--){
            html2canvas(capture1[i]).then((canvas)=>{
                const imgData = canvas.toDataURL('img/png',1.0);
                doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
                if(i===0)
                doc.save('resume.pdf');
                doc.addPage();
            });
        }
        setLoader(false);
    
    }
    
    return (
        <button
            className="btn"
            onClick={downloadPDF}
            disabled={!(loader===false)}
            >
            {loader?(
                <span>Downloading</span>
            ):(
                <span>Download</span>
            )}
        </button> 
    );
}