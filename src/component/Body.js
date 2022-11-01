import React from 'react';
import githubIcon from '../images/Icon (1).svg';
import slackIcon from '../images/icons8-slack-new.svg';
import Pop from './Pop'


const Body = () => {
  return (
    <div>
        <div className="bodybox">
           <Pop link={'https://twitter.com/'} id={'twitter'} linkName={'Twitter'} />
           <Pop link={'https://training.zuri.team/'} id={'btn_zuri'} linkName={'Zuri Team'} />
           <Pop link={'https://books.zuri.team/'} id={'books'} linkName = {'Books'} />
           <Pop link={'https://books.zuri.team/'} id={'books_python'} linkName = {'Python Books'} />
           <Pop link={'https://background.zuri.team/'} id={'pitch'} linkName= {'Background Check for Coders'} />
           <Pop link={'https://books.zuri.team/design-rules'} id={'books__design'} linkName= {'Design Books'} />
       </div> 

       <div className='slack-giticons'>
          <img src={slackIcon} alt='' className='slackicon' />
          <img src={githubIcon} alt='' className='github' />
       </div>
    </div>
  )
}

export default Body