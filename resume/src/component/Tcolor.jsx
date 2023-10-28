export default function Tcolor(){
    function txtcolor(e){
        document.execCommand('foreColor',false,e.value);
    }
    return(
        <input type="color" onChange={(e)=>txtcolor(e.target)} />
    );
}