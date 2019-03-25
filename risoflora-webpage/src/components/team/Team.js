import React, {Component} from 'react';
import './Team.css'

import Group from '../../utils/constants/Group'
import GroupImages from '../../utils/constants/GroupImages'

import forest2 from '../../res/img/forest2.jpg'
import Divider from "../divider/Divider";


class Team extends Component {

    constructor(props){
        super(props)



    }


    render() {
        return (

            <Divider  title="Equipe" bgImage={forest2} titleColor="#ffffff">

                <div style={{display:'flex',flexWrap: 'wrap'}}>
                    {
                        Group.map((people ,i)=> <People key={i} index={i} name={people.name} email={people.email} course={people.course}/>)
                    }
                </div>
            </Divider>

        );
    }
}



const People = ({index,name,email,course}) => {

    return (
        <div className='peopleWrapper' >
            <img src={GroupImages[index]} />
            <h3>{name}</h3>
            <h4>{course}</h4>
            <h5>{email}</h5>
        </div>
    );
};




export default Team;
