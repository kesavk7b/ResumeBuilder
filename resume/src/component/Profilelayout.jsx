import PhotoPicker from '../component/PhotoPicker';
import ResumeLayouts from '../component/ResumeLayouts';
import Heading from '../component/Heading';
import Content from '../component/Content';
import Line from '../component/Line';
export default function Profile({name="Kesavabharathi",addr=["+91673862189","resume@devs.com","143,lovely street,","heart-000143"],picPos='center',pos="top",email="",pic=1,obj="",func,paddingT="0",paddingR="0",paddingL="0",paddingB="0",bgColor="",picShape}){
    return (
        <ResumeLayouts col="12" paddingT={paddingT} paddingB={paddingB} paddingL={paddingL} paddingR={paddingR} bgColor={bgColor}>
            <div className='row' style={{paddingLeft:"10px",paddingRight:"10px"}}>
            <ResumeLayouts col='8' height="100%">
                {
                    pos==="top" && (<ResumeLayouts col='8'><Heading heading={name} func={func} classname="hello" /></ResumeLayouts>)
                }
                <Content func={func}>
                    {
                    obj ||(<><p style={{marginBottom:0}}>{addr[0]}</p><p style={{marginBottom:0}}>{addr[1]}</p><p style={{marginBottom:0}}>{addr[2]}</p></>)
                  }
                </Content>
                {
                    pos==="bottom" && (<ResumeLayouts col='8'><Heading heading={name} func={func} classname="justify-content-end" /></ResumeLayouts>)
                }
            </ResumeLayouts>
            <ResumeLayouts col='4' forPic={1} picPos={picPos}>
                { pic && <PhotoPicker picShape={picShape}/>}
            </ResumeLayouts>
            
            </div>
            <Line line={true}/>
        </ResumeLayouts>
    );
}