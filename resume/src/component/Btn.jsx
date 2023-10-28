export default function Btn({btnFun,btnTitle}){
    return(
        <button onClick={btnFun}>{btnTitle}</button>
    );
}