import A4 from '../component/A4.jsx';
import LayoutContainer from '../component/LayoutContainer.jsx';
import $ from 'jquery';
import { renderToString } from 'react-dom/server';
import ResumeLayouts from './ResumeLayouts.jsx';
export function myFunctions(){
}
export function addPage(e){
    let nextChild=true;
    var a4=$(e).parent().closest('div').closest('.a4');
    while(nextChild){
        nextChild=false;
        while(a4.prop('scrollHeight')>1100){
            if(a4.next().length===0){
                $('.a4').parent().append(renderToString(<A4><LayoutContainer></LayoutContainer></A4>));
            }
            var child=a4.children().children().children(':last-child');
            child.remove();
            a4.next().children().children().prepend(child);
        }
        if(a4.next().length!==0){
            a4=a4.next();
            nextChild=true;
        }
    }
}
export function addPage2(e){
    let nextchild=true;
    var a4=$(e).parent().closest('div').closest('.a4');
    let parent=$(e).parent().parent().parent();
    let workingPg=1;
    if(parent.next().length!==0){
        workingPg=0;
    }
    while(nextchild){
        nextchild=false;
        while(parent.children().prop('scrollHeight')>1100){
            var c=parent.children().children(':last-child');
            c.remove();
            if(a4.next().length===0){
                $('.a4Container').append(renderToString(<A4><LayoutContainer><ResumeLayouts col="4"></ResumeLayouts><ResumeLayouts col="8"></ResumeLayouts></LayoutContainer></A4>));
            }
            if(parent.next().length!==0){
                a4.next().children().children().children(':first-child').children().prepend(c);
            }
            else{
                a4.next().children().children().children(':last-child').children().prepend(c);
            }
        }
        console.log(workingPg);
        if(a4.next().length!==0){
            nextchild=true;
            if(workingPg===0){
                a4=a4.next();
                parent=a4.children().children().children(':first-child');
            }
            else{
                a4=a4.next();
                parent=a4.children().children().children(':last-child');
            }
        }
    }
}
//backup
export function addPage3(e){
    var a4=$(e).parent().closest('div').closest('.a4');
    let parent=$(e).parent().parent().parent();
    while(parent.children().prop('scrollHeight')>1100){
        var c=parent.children().children(':last-child');
        c.remove();
        if(parent.next().length===1){
            parent.next().children().prepend(c);
        }
        else{
            if(a4.next().length===0){
                $('.a4Container').append(renderToString(<A4><LayoutContainer /></A4>));
            }
            a4.next().children().children().children(':first-child').prepend(c);
        }
    }
}


export function onloadAddPage1(){
    $(document).ready(function(){
        var nextchild=true;
        var child=$('.a4Container').children(':first-child');
        while(nextchild){
            nextchild=false;
            while(child.prop('scrollHeight')>1100){
                if(child.next().length===0){
                    $('.a4Container').append(renderToString(<A4><LayoutContainer /></A4>));
                }
                var c=child.children().children().children(':last-child');
                c.remove();
                child.next().children().children().prepend(c);
            }
            if(child.next().length!==0){
                child=child.next();
                nextchild=true;
            }
        }
    });
}


//function has repeated code if have time redo
export function onloadAddPage2(){
    $(document).ready(function(){
        var nextchild=true;
        var parentChild=$('.a4Container').children(':first-child');
        while(nextchild){
            nextchild=false;
            while(parentChild.children().children().children(':first-child').children().prop('scrollHeight')>=1100){
                var c=parentChild.children().children().children(':first-child').children().children(':last-child');
                c.remove();
                if(parentChild.next().length===0){
                    $('.a4Container').append(renderToString(<A4><LayoutContainer><ResumeLayouts col="4"></ResumeLayouts><ResumeLayouts col="8"></ResumeLayouts></LayoutContainer></A4>));
                }
                parentChild.next().children().children().children(':first-child').children().prepend(c);

            }
            while(parentChild.children().children().children(':last-child').children().prop('scrollHeight')>=1100){
                if(parentChild.next().length===0){
                    $('.a4Container').append(renderToString(<A4><LayoutContainer><ResumeLayouts col="4"></ResumeLayouts><ResumeLayouts col="8"></ResumeLayouts></LayoutContainer></A4>));
                }
                var c1=parentChild.children().children().children(':last-child').children().children(':last-child');
                c1.remove();
                parentChild.next().children().children().children(':last-child').children().prepend(c1);
            }
            if(parentChild.next().length!==0){
                nextchild=true;
                parentChild=parentChild.next();
            }
        }
    });
}
//backup
export function onloadAddPage3(){
    $(document).ready(function(){
        var nextchild=true;
        var parentChild=$('.a4Container').children(':first-child');
        var child=parentChild.children().children();
        while(nextchild){
            nextchild=false;
            while(child.children(':first-child').children().prop('scrollHeight')>=1100){
                var c=child.children(':first-child').children().children(':last-child');
                c.remove();
                child.children(':last-child').children().prepend(c);
            }
            while(child.children(':last-child').children().prop('scrollHeight')>=1100){
                if(parentChild.next().length===0){
                    $('.a4Container').append(renderToString(<A4><LayoutContainer><ResumeLayouts col="4"></ResumeLayouts><ResumeLayouts col="8"></ResumeLayouts></LayoutContainer></A4>));
                }
                var c1=child.children(':last-child').children().children(':last-child');
                c1.remove();
                parentChild.next().children().children().children(':first-child').children().prepend(c1);
            }
            if(parentChild.next().length!==0){
                nextchild=true;
                parentChild=parentChild.next();
            }
        }
    });
}