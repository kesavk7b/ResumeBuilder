

export default function TxtBtn({command,children}){
    function formatFun(){
        document.execCommand(command,false,null);
    }

    return(
        <button className="btn btn-light myBtn" onClick={formatFun}>{children}</button>
    );
}