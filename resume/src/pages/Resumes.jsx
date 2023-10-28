import Nav from '../component/Nav';
import ResumeTemp from '../component/ResumeTemp';
export default function Resumes({data}){
    return(
        <>
            <Nav />
            <ResumeTemp data={data} />
        </>
    );
}