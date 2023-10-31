export default function LayoutsContainer({children,id}){
    return(
        <div className="container-fluid nonePadMar">
            <div className="row" id={id} style={{paddingRight:"12px",paddingLeft:"12px"}}>
                {children} 
            </div>
        </div>

    );
}