export default function LayoutsContainer({children,id}){
    return(
        <div className="container-fluid nonePadMar">
            <div className="row" id={id}>
                {children} 
            </div>
        </div>

    );
}