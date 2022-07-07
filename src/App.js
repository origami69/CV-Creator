
import './App.css';
import React, { Component } from 'react';
import uniqid from "uniqid";


class App extends Component {
  constructor(props) {
    super(props);
 this.state={
  item:{
    title: '',
    text: '',
    id:uniqid()
  },
  levelUp:{
    skill: '',
    skillLevel: '',
    id:uniqid()
  },
  langHas:{
    language: '',
    langLevel: '',
    id:uniqid()
  },
  jobItem:{
    posistioner: '',
    company: '',
    start:'',
    end:'',
    jobSkill1:'',
    jobSkill2:'',
    jobSkill3:'',
    id:uniqid(),
  },
  school:{
    degree:'',
    schoolLoc:'',
    start:'',
    course:'',
    id:uniqid()
  },
  items:[],
  level:[],
  lang:[],
  job:[],
  education:[]
 }
 this.onChanger = this.onChanger.bind(this);
 this.onSame = this.onSame.bind(this)
 this.submitHandler = this.submitHandler.bind(this)
 this.onSkill=this.onSkill.bind(this)
 this.onLevel=this.onLevel.bind(this)
 this.levelSubmit=this.levelSubmit.bind(this)
 this.onLanguage=this.onLanguage.bind(this)
 this.onLanguageProf=this.onLanguageProf.bind(this)
 this.languageSub=this.languageSub.bind(this)
 this.submitExp=this.submitExp.bind(this)
 this.posChange=this.posChange.bind(this)
 this.compChange=this.compChange.bind(this)
 this.startChange=this.startChange.bind(this)
 this.endChange=this.endChange.bind(this)
 this.job1Change=this.job1Change.bind(this)
 this.job2Change=this.job2Change.bind(this)
 this.job3Change=this.job3Change.bind(this)
 this.schoolSub=this.schoolSub.bind(this)
 this.schoolChange=this.schoolChange.bind(this)
 this.start2Change=this.start2Change.bind(this)
 this.degreeChange=this.degreeChange.bind(this)
 this.courseChange=this.courseChange.bind(this)
  }

 displayer1(){
  document.querySelector('.popUp1').style.visibility='visible'
 }
 exit(e){
 const elem= e.target.parentElement
 elem.parentElement.style.visibility='hidden'
 }
 onChanger(e){
  this.setState({
    item : {
      title: e.target.value,
      text:this.state.item.text,
      id:this.state.item.id
    }
  });
 }
 onSame(e){
  this.setState({
    item : {
      title: this.state.item.title,
      text:e.target.value,
      id:this.state.item.id
    }
  });
 }

 submitHandler(e){
  e.preventDefault()
  this.setState({
    items:this.state.items.concat(this.state.item),
    item:{
      title: '',
      text: '',
      id:uniqid()
    }
  })
  document.querySelector('.Pinfo').value=''
  document.querySelector('.PTinfo').value=''
  document.querySelector('.popUp1').style.visibility='hidden'
 }
display2(){
  document.querySelector('.popUp2').style.visibility='visible'
}
onSkill(e){
  this.setState({
    levelUp: {
      skill: e.target.value,
      skillLevel: this.state.levelUp.skillLevel,
      id: this.state.levelUp.id
    }
  });
 }
 onLevel(e){
  this.setState({
    levelUp: {
      skill: this.state.levelUp.skill,
      skillLevel:e.target.value,
      id: this.state.levelUp.id
    }
  });
 }
levelSubmit(e){
  e.preventDefault()
  this.setState({
    level:this.state.level.concat(this.state.levelUp),
    levelUp:{
      skill: '',
      skillLevel: '',
      id:uniqid()
    },
  })
  document.querySelector('.skills').value=''
  document.querySelector('.proficent').value=''
  document.querySelector('.popUp2').style.visibility='hidden'
}
oNlanguageDisplay(){
document.querySelector('.popUp3').style.visibility='visible'
}
onLanguage(e){
  this.setState({
    langHas: {
      language: e.target.value,
      langLevel:this.state.langHas.langLevel,
      id: this.state.langHas.id
    }
  });
 }
 onLanguageProf(e){
  this.setState({
    langHas: {
      language: this.state.langHas.language,
      langLevel:e.target.value,
      id: this.state.langHas.id
    }
  });
 }
languageSub(e){
  e.preventDefault()
  this.setState({
    lang:this.state.lang.concat(this.state.langHas),
    langHas:{
      language: '',
      langLevel: '',
      id:uniqid()
    },
  })
  document.querySelector('.lang').value=''
  document.querySelector('.langProf').value=''
  document.querySelector('.popUp3').style.visibility='hidden'
}
display4(){
document.querySelector('.popUp4').style.visibility='visible'
}
submitExp(e){
  e.preventDefault()
this.setState({
  job:this.state.job.concat(this.state.jobItem),
  jobItem:{
    posistioner: '',
    company: '',
    start:'',
    end:'',
    jobSkill1:'',
    jobSkill2:'',
    jobSkill3:'',
    id:uniqid(),
  },
})
document.querySelector('.posistion').value=''
document.querySelector('.nameULoc').value=''
document.querySelector('.start').value=''
document.querySelector('.end').value=''
document.querySelector('.point1').value=''
document.querySelector('.point2').value=''
document.querySelector('.point3').value=''
document.querySelector('.popUp4').style.visibility='hidden'
}
posChange(e){
  this.setState({
    jobItem:{
      posistioner: e.target.value,
      company: this.state.jobItem.company,
      start:this.state.jobItem.start,
      end:this.state.jobItem.end,
      jobSkill1:this.state.jobItem.jobSkill1,
      jobSkill2:this.state.jobItem.jobSkill2,
      jobSkill3:this.state.jobItem.jobSkill3,
      id:this.state.jobItem.id,
    },
  })
}
compChange(e){
  this.setState({
    jobItem:{
      posistioner: this.state.jobItem.posistioner,
      company: e.target.value,
      start:this.state.jobItem.start,
      end:this.state.jobItem.end,
      jobSkill1:this.state.jobItem.jobSkill1,
      jobSkill2:this.state.jobItem.jobSkill2,
      jobSkill3:this.state.jobItem.jobSkill3,
      id:this.state.jobItem.id,
    },
  })
}
startChange(e){
  this.setState({
    jobItem:{
      posistioner: this.state.jobItem.posistioner,
      company: this.state.jobItem.company,
      start:e.target.value,
      end:this.state.jobItem.end,
      jobSkill1:this.state.jobItem.jobSkill1,
      jobSkill2:this.state.jobItem.jobSkill2,
      jobSkill3:this.state.jobItem.jobSkill3,
      id:this.state.jobItem.id,
    },
  })
}
endChange(e){
  this.setState({
    jobItem:{
      posistioner: this.state.jobItem.posistioner,
      company: this.state.jobItem.company,
      start:this.state.jobItem.start,
      end:e.target.value,
      jobSkill1:this.state.jobItem.jobSkill1,
      jobSkill2:this.state.jobItem.jobSkill2,
      jobSkill3:this.state.jobItem.jobSkill3,
      id:this.state.jobItem.id,
    },
  })
}
job1Change(e){
  this.setState({
    jobItem:{
      posistioner: this.state.jobItem.posistioner,
      company: this.state.jobItem.company,
      start:this.state.jobItem.start,
      end:this.state.jobItem.end,
      jobSkill1:e.target.value,
      jobSkill2:this.state.jobItem.jobSkill2,
      jobSkill3:this.state.jobItem.jobSkill3,
      id:this.state.jobItem.id,
    },
  })
}
job2Change(e){
  this.setState({
    jobItem:{
      posistioner: this.state.jobItem.posistioner,
      company: this.state.jobItem.company,
      start:this.state.jobItem.start,
      end:this.state.jobItem.end,
      jobSkill1:this.state.jobItem.jobSkill1,
      jobSkill2:e.target.value,
      jobSkill3:this.state.jobItem.jobSkill3,
      id:this.state.jobItem.id,
    },
  })
}
job3Change(e){
  this.setState({
    jobItem:{
      posistioner: this.state.jobItem.posistioner,
      company: this.state.jobItem.company,
      start:this.state.jobItem.start,
      end:this.state.jobItem.end,
      jobSkill1:this.state.jobItem.jobSkill1,
      jobSkill2:this.state.jobItem.jobSkill2,
      jobSkill3:e.target.value,
      id:this.state.jobItem.id,
    },
  })
}
display5(){
  document.querySelector('.popUp5').style.visibility='visible'
}
schoolSub(e){
  e.preventDefault()
  this.setState({
    education:this.state.education.concat(this.state.school),
    school:{
      degree:'',
      schoolLoc:'',
      start:'',
      course:'',
      id:uniqid()
    },
  })
  document.querySelector('.popUp5').style.visibility='hidden'
}
degreeChange(e){
  this.setState({
    school:{
      degree:e.target.value,
      schoolLoc:this.state.school.schoolLoc,
      start:this.state.school.start,
      course:this.state.school.course,
      id:uniqid()
    },
  })
}
schoolChange(e){
  this.setState({
    school:{
      degree:this.state.school.degree,
      schoolLoc:e.target.value,
      start:this.state.school.start,
      course:this.state.school.course,
      id:uniqid()
    },
  })
}
start2Change(e){
  this.setState({
    school:{
      degree:this.state.school.degree,
      schoolLoc:this.state.school.schoolLoc,
      start:e.target.value,
      course:this.state.school.course,
      id:uniqid()
    },
  })
}
courseChange(e){
  this.setState({
    school:{
      degree:this.state.school.degree,
      schoolLoc:this.state.school.schoolLoc,
      start:this.state.school.start,
      course:e.target.value,
      id:uniqid()
    },
  })
}
  render() {
    return (
      <div className='container'>  
      <div className='popUp1'><div className='popElem1'><button className='exitOut' onClick={this.exit}>X</button> 
      <form className='formi'>
        <label htmlFor='PTinfo'>Type of Info</label>
        <input name='PTinfo' type='text' className='PTinfo' onChange={this.onChanger}/>
        <label htmlFor='Pinfo'>Info</label>
       <input name='Pinfo' type='text' className='Pinfo' onChange={this.onSame}/> 
       <button type='submit'className='submitter' onClick={this.submitHandler}>Submit Query</button>
        </form>
        </div>
        </div>  
        <div className='popUp2'><div className='popElem1'><button className='exitOut' onClick={this.exit}>X</button> 
      <form className='formi'>
        <label htmlFor='skills'>Skills</label>
        <input name='skills' type='text' className='skills' onChange={this.onSkill}/>
        <label htmlFor='proficent'>Proficiencies</label>
       <input name='proficent' type='text' className='proficent' onChange={this.onLevel}/> 
       <button type='submit'className='submitter' onClick={this.levelSubmit}>Submit Query</button>
        </form>
        </div>
        </div>  
        <div className='popUp3'><div className='popElem1'><button className='exitOut' onClick={this.exit}>X</button> 
      <form className='formi'>
        <label htmlFor='language'>Language</label>
        <input name='language' type='text' className='lang' onChange={this.onLanguage}/>
        <label htmlFor='proficent'>Proficiency</label>
       <input name='proficent' type='text' className='langProf' onChange={this.onLanguageProf}/> 
       <button type='submit'className='submitter' onClick={this.languageSub}>Submit Query</button>
        </form>
        </div>
        </div>
        <div className='popUp4'><div className='popElem2'><button className='exitOut' onClick={this.exit}>X</button> 
      <form className='formi'>
        <label htmlFor='posistion'>Job Posistion/Project</label>
        <input name='posistion' type='text' className='posistion' onChange={this.posChange}/>
        <label htmlFor='nameULoc'>Company Name and Location/Project Details</label>
       <input name='nameULoc' type='text' className='nameULoc' onChange={this.compChange}/> 
       <label htmlFor='start'>Start Date</label>
       <input name='start' type='text' className='start' onChange={this.startChange}/> 
       <label htmlFor='end'>End Date</label>
       <input name='end' type='text' className='end' onChange={this.endChange}/> 
       <label htmlFor='point1'>Job/Project Skill</label>
       <input name='point1' type='text' className='point1' onChange={this.job1Change}/> 
       <label htmlFor='point2'>Job/Project Skill</label>
       <input name='point2' type='text' className='point2' onChange={this.job2Change}/> 
       <label htmlFor='point3'>Job/Project Skill</label>
       <input name='point3' type='text' className='point3' onChange={this.job3Change}/> 
       <button type='submit'className='submitter' onClick={this.submitExp}>Submit Query</button>
        </form>
        </div>
        </div>
          <div className='popUp5'><div className='popElem2'><button className='exitOut' onClick={this.exit}>X</button> 
      <form className='formi'>
        <label htmlFor='posistion'>Degree and Major</label>
        <input name='posistion' type='text' className='posistion' onChange={this.degreeChange}/>
        <label htmlFor='nameULoc'>School and Location</label>
       <input name='nameULoc' type='text' className='nameULoc' onChange={this.schoolChange}/> 
       <label htmlFor='start'>Start Date</label>
       <input name='start' type='text' className='start' onChange={this.start2Change}/> 
       <label htmlFor='point1'>Relevant CourseWork</label>
       <input name='point1' type='text' className='point1' onChange={this.courseChange}/> 
       <button type='submit'className='submitter' onClick={this.schoolSub}>Submit Query</button>
        </form>
        </div>
        </div>
      <div className='left'></div>
      <div className='containCV'>
        <div className='leftCV'>
          <input className='name' type='text' defaultValue='Enter A Name'/>
          <input className='title' type='text' defaultValue='Enter A Title'/>
          <div className='personalContain'>    
      <div className='outisde'> <button className='info' onClick={this.displayer1}>Personal Info</button></div>
      </div>
          <div className='personalOut'>
          {this.state.items.map((item) => {
        return(<React.Fragment key={item.id}>
          <input type='text'defaultValue={item.title} className='titleCha'/>
          <input type='text' className='infoCha'defaultValue={item.text}/>
        </React.Fragment>)
      })}
</div>
<div className='personalContain'>    
      <div className='outisde'> <button className='info' onClick={this.display2}>Skills</button></div>
      </div>
      <div className='personalOut'>
          {this.state.level.map((item) => {
        return(<React.Fragment key={item.id}>
          <input type='text'defaultValue={item.skill} className='titleCha'/>
          <input type='text' className='infoCha'defaultValue={item.skillLevel}/>
        </React.Fragment>)
      })}
</div>
<div className='personalContain'>    
      <div className='outisde'> <button className='info' onClick={this.oNlanguageDisplay}>Languages</button></div>    
      </div>
      <div className='personalOut'>
          {this.state.lang.map((item) => {
        return(<React.Fragment key={item.id}>
          <input type='text'defaultValue={item.language} className='titleCha'/>
          <input type='text' className='infoCha'defaultValue={item.langLevel}/>
        </React.Fragment>)
      })}
</div>
  
        </div>
        <div className='rightCV'>
          <div className='holder'> <button className='jobExp' onClick={this.display4}>Experience</button></div>
          <div className='rightOutput'>
          {this.state.job.map((item) => {
        return(<React.Fragment key={item.id}>
          <div className='slaves'><div className='startEnd'><input className='startWorld' defaultValue={item.start+' - '}/><br/><input className='endWorld' defaultValue={item.end}/></div>
        <div className='jobDet'><input className='lifePos' defaultValue={item.posistioner}/><input className='companyPos' defaultValue={item.company}/><ul className='niceDot'><li><input defaultValue={item.jobSkill1}/></li>
        <li><input defaultValue={item.jobSkill2}/></li>
        <li><input defaultValue={item.jobSkill3}/></li></ul></div>
        </div>
        </React.Fragment>)
      })}
          </div>
  <div className='holder'>  <button className='educationExp' onClick={this.display5}>Educational Experience</button></div>
        <div className='rightOutput'>{this.state.education.map((item) => {
        return(<React.Fragment key={item.id}>
          <div className='slaves'><div className='startEnd'><input className='startWorld' defaultValue={item.start}/></div>
        <div className='jobDet'><input className='lifePos' defaultValue={item.degree}/><input className='companyPos' defaultValue={item.schoolLoc}/> <input defaultValue={'Relevent Course Work: '+item.course}/></div>
        </div>
        </React.Fragment>)
      })}</div>
       
        </div>
      </div>
      <div className='right'></div>
      </div>
    );
  }
}

  
  export default App;
