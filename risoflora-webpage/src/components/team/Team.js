import React, {Component} from 'react';
import './Team.css'

import Group from '../../utils/constants/Group'
import GroupImages from '../../utils/constants/GroupImages'

import forest2 from '../../res/img/forest2.jpg'


class Team extends Component {

    constructor(props){
        super(props)


    }


    render() {
        return (
            <div id="team_wrapper" style={{paddingTop:"30px",backgroundImage:`url(${forest2})`}}>
                <h2 style={{fontSize:'40px',marginBottom:'30px'}}>Time</h2>
                <div style={{display:'flex',flexWrap: 'wrap'}}>
                    {
                        Group.map((people ,i)=> <People key={i} index={i} name={people.name} email={people.email} course={people.course}/>)
                    }
                </div>
            </div>
        );
    }
}



const People = ({index,name,email,course}) => {

    return (
        <div className='peopleWrapper' style={{textAlign:'center',flex: '1 0 21%'}}>
            <img src={GroupImages[index]} style={{maxWidth:'200px', borderRadius: '50%'}}/>
            <h3>{name}</h3>
            <h4>{course}</h4>
            <h5>{email}</h5>
        </div>
    );
};




export default Team;
