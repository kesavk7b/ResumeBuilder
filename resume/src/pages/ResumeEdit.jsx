import '../App.css';
import Nav from '../component/Nav.jsx';
import A4Container from '../component/A4Container.jsx';
import ToolNav from '../component/ToolNav.jsx';
import Line from '../component/Line.jsx';
import Heading from '../component/Heading';
import ResumeLayouts from '../component/ResumeLayouts';
import DownloadBtn from '../component/DownloadBtn';
import LayoutContainer from '../component/LayoutContainer';
import Profile from '../component/Profilelayout';
import Content from '../component/Content';
import React from 'react';
import { useParams } from 'react-router-dom';
import A4 from '../component/A4.jsx';
import TxtBtn from '../component/TxtBtn';
import TxtSize from '../component/TxtSize';
import Tcolor from '../component/Tcolor';
import Modal from '../component/Modal';
import FillForm from '../component/FillForm';
import PhotoPicker from '../component/PhotoPicker';

function ResumeEdit({data}) {
   var param=useParams();
    var content=data[param.id].data;
    var content2=data[param.id].data2;
    var profile=data[param.id].profData;
    var style=data[param.id];
    var page=data[param.id].page;
    const onpgContent=content.map(content=>
      <ResumeLayouts key={content.id} col="12" id={content.id} paddingL={style.paddingL} paddingR={style.paddingR} >
        <Heading heading={content.heading} data-placeholder={content.placeHolder} containerId={"a4Cont"+param.tagId} func={page}/>
        <Line line={true} />
        <Content contentType={content.contentType} containerId={"a4Cont"+param.tagId} func={page}>{content.content}</Content>
      </ResumeLayouts>
      );
      
      function Pg({id}){
        // var param=useParams();
        if(page===1){
          return(
            <LayoutContainer id={"a4container"+param.tagId} >
            {/* head */}
            <Profile name={profile.name} obj={profile.obj} addr={profile.addr} pos={profile.namePos} func={page} bgColor={style.bgColor} paddingT={style.paddingT} paddingB={style.paddingB} paddingL={style.paddingL} paddingR={style.paddingR} />
            {/* body */}
            {onpgContent}
          </LayoutContainer>
        );
      }
      if(page===2){
        const onpgContent1=content.map(content=>
          < div >
            <Heading heading={content.heading} data-placeholder={content.placeHolder}  func={page} />
            <Line line={true} />
            <Content contentType={content.contentType} func={page} >{content.content}</Content>
          </div>
        );
        const onpgContent2=content2.map(content=>
          <div>
            <Heading heading={content.heading} data-placeholder={content.placeHolder}  func={page} />
            <Line line={true} />
            <Content contentType={content.contentType} func={page} >{content.content}</Content>
          </div>
        );
        return(
          <LayoutContainer>
            <ResumeLayouts col="4" bgColor='green' paddingL={style.paddingL} paddingR={style.paddingR} paddingT={style.paddingT} paddingB={style.paddingB} height='1100px'>
              <ResumeLayouts col='12' forPic={1}>
                  <PhotoPicker picShape={profile.picShape}/>
              </ResumeLayouts>
              {onpgContent1}
            </ResumeLayouts>
            <ResumeLayouts col="8"paddingL={style.paddingL1} paddingR={style.paddingR1} paddingT={style.paddingL1} paddingB={style.paddingL1}>
              {onpgContent2}
            </ResumeLayouts>
          </LayoutContainer>
        );
      }
    }

    return(

      <>
        <Nav />
        <ToolNav>
          <TxtBtn command={"bold"} ><span>B</span></TxtBtn>
          <TxtBtn command={"underline"}>U</TxtBtn>
          <TxtBtn command={"italic"}>i</TxtBtn>
          <Modal></Modal>
          <FillForm></FillForm>
          <Tcolor />
          <TxtSize  />
          <DownloadBtn />
        </ToolNav>
        <A4Container containerId={"a4Cont"+param.tagId} page={page}>
          <A4 id={"a4Cont"+param.tagId}>
            <Pg id={"a4Cont"+param.tagId}/>
          </A4>
        </A4Container>
      </>
    );
  }
  
  export default ResumeEdit;
  