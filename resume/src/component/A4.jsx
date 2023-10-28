export default function A4({children,id,paddingTB="0",paddingRL="0",bgColor=""}){
    return(
        <div className="a4" id={id} style={{paddingBottom:paddingTB,paddingLeft:paddingRL,paddingRight:paddingRL,background:bgColor}}>
                {children}
        </div>
    );
}