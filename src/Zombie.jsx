import { useEffect, useState } from "react"
function Zombie ({characterX, characterY, setGameOver, bulletHX, bulletHY, setZombieCount, setFiring, setBulletHX}){

    const [zombieX, setZombieX]=useState(Math.random(.5)*500)
    const [zombieY, setZombieY]=useState(-40)
    const [deadZombie, setDeadZombie]=useState(false)
    const [bulletEffect, setBulletEffect]=useState(true)

   


    useEffect(()=>{
        const xDif= zombieX-characterX
        const yDif= zombieY-characterY
        const zombieMove= setInterval(function(){
            if(deadZombie===false){

                if(xDif>0){
                    setZombieX(x=>x-5)
                }
                if(xDif<0){
                    setZombieX(x=>x+5)
                }
                if(yDif>0){
                    setZombieY(y=>y-5)
                }
                if(yDif<0){
                    setZombieY(y=>y+5)
                }
                clearInterval(zombieMove)
            }
            if(deadZombie===true){
                clearInterval(zombieMove)
            }
        },1000)
    },[zombieX, zombieY])


    if(bulletHX-15<zombieX && bulletHX+15>zombieX && bulletHY-20<zombieY && bulletHY+20>zombieY){
        if(bulletEffect===true){
            console.log(
                "HIT"
            )
            setZombieCount(zombieCount=>zombieCount-.5)
            setBulletHX(()=>-1000)
            setZombieX(()=>2000)
            setFiring(()=>false)
            setDeadZombie(()=>true)
            setBulletEffect(()=>false)
        }
    }

    if(zombieX<characterX+15 && zombieX>characterX-15 && zombieY<characterY+20 && zombieY>characterY-20){
        setGameOver(()=>true)
    }


    return(<div className="zombie" style={{
        marginLeft: zombieX,
        marginTop: zombieY
    }}>

    </div>)
}


export default Zombie 
