import { useEffect, useState } from "react"



function Bullet({ setBulletHX, setBulletHY,characterX, characterY, mouseX, mouseY}){
    const [bulletX, setBulletX]=useState(characterX)
    const [bulletY, setBulletY]=useState(characterY)
    const [bulletXTrajectory, setBulletXTrajectory]= useState(characterX - mouseX)
    const [bulletYTrajectory, setBulletYTrajectory]= useState(characterY - mouseY)

    useEffect(()=>{
        let bulletXMove = bulletX - bulletXTrajectory/20;
        let bulletYMove = bulletY - bulletYTrajectory/20;

        if(bulletXTrajectory < 30 && bulletXTrajectory > -30 && bulletYTrajectory > -30 && bulletYTrajectory < 30)
{
    bulletXMove= bulletX - bulletXTrajectory;
    bulletYMove= bulletY - bulletYTrajectory;
}        
const bulletInterval = setInterval(function(){
    setBulletX(bulletXMove)
    setBulletY(bulletYMove)
    setBulletHX(()=>bulletXMove)
    setBulletHY(()=>bulletYMove)
            clearInterval(bulletInterval)
        })


    },[bulletX, bulletY])

    return <div className="bullet" style={{
        marginLeft: bulletX,
        marginTop: bulletY
    }}>

    </div>
}


export default Bullet