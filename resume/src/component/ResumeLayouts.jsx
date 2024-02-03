export default function ResumeLayouts({children,id,col="12",classname="",flex="",bgColor="",marginB="2px",paddingT="0",paddingB="0",paddingR="0",paddingL="0",height="",forPic=0,picPos="center"}){
    switch(col){
        case "1":
            classname+=" col-xs-1 col-sm-1 col-md-1 col-lg-1";
            break;
        case "2":
            classname+=" col-xs-2 col-sm-2 col-md-2 col-lg-2";
            break;
        case "3":
            classname+=" col-xs-3 col-sm-3 col-md-3 col-lg-3";
            break;
        case "4":
            classname+=" col-xs-4 col-sm-4 col-md-4 col-lg-4";
            break;
        case "5":
            classname+=" col-xs-5 col-sm-5 col-md-5 col-lg-5";
            break;
        case "6":
            classname+=" col-xs-6 col-sm-6 col-md-6 col-lg-6";
            break;
        case "7":
            classname+=" col-xs-7 col-sm-7 col-md-7 col-lg-7";
            break;
        case "8":
            classname+=" col-xs-8 col-sm-8 col-md-8 col-lg-8";
            break;
        case "9":
            classname+=" col-xs-9 col-sm-9 col-md-9 col-lg-9";
            break;
        case "10":
            classname+=" col-xs-10 col-sm-10 col-md-10 col-lg-10";
            break;
        case "11":
            classname+=" col-xs-11 col-sm-11 col-md-11 col-lg-11";
            break;
        default:
            classname+=" col-xs-12 col-sm-12 col-md-12 col-lg-12";
            break;
    }

    if(flex==="yes")
        flex="flex";
return(
        <div className={""+classname} id={"resumeLayout"+id} style={{marginBottom:marginB,paddingBottom:paddingT,paddingLeft:paddingL,paddingRight:paddingR,background:bgColor}}>
            <div className={flex+(forPic && "row justify-content-"+picPos)} style={{height:height}}>
                {children}
            </div>
        </div>
    );
}