import Bullet from "./Bullet"
import Character from "./Character"
import { useState, useEffect } from "react"
import Zombie from "./Zombie"
function Console(){
    const [up, setUp]=useState(false)
    const [down, setDown]=useState(false)
    const [left, setLeft]=useState(false)
    const [right, setRight]=useState(false)
    const [characterY, setCharacterY]=useState(460)
    const [characterX, setCharacterX]=useState(335)
    const [mouseX, setMouseX]=useState()
    const [mouseY, setMouseY]=useState()
    const [firing, setFiring]=useState(false)
    const [gameOver, setGameOver]=useState(false)
    const [bulletHX, setBulletHX]=useState(null)
    const [bulletHY, setBulletHY]=useState(null)
    const [previous, setPrevious]=useState(0)
    const [zombieCount, setZombieCount]=useState(0)
    const zombies = []
    const [level, setLevel]=useState(0)
    function nextLevel(){
        let increment;
        if(level===0){
            increment=1
        }
        else{increment=2}
    setLevel(level=>level+1) 
    setPrevious(()=>level**2)//level is actually 1 but previous thinks level is 0
    setZombieCount(()=>level**2-previous+increment) // zombieCount thinks level is 0 and previous is zero at level 1
    
}

// if(zombieCount===0){nextLevel()}

    for(let i =0; i<level**2; i++){
        console.log(zombieCount)
        zombies.push(<Zombie setBulletHX={setBulletHX} setFiring={setFiring} setZombieCount={setZombieCount} setGameOver={setGameOver} characterX={characterX} characterY={characterY} bulletHX={bulletHX} bulletHY={bulletHY} key={i}/>)
    }

function fire(){
    setFiring(()=>true)
}

function ceaseFire(){
    setFiring(()=>false)
}


    useEffect(()=>{
        function update(e){
            setMouseX(e.clientX)
            setMouseY(e.clientY)
        }
        document.addEventListener("mousemove", update)
        return()=>{document.removeEventListener("mousemove", update)}
    })

    function move(e){
        if(e.key==="w"){
            setUp(up=>!up)
        }
        if(e.key==="s"){
            setDown(down=>!down)
        }
        if(e.key==="a"){
            setLeft(left=>!left)
        }
        if(e.key==="d"){
            setRight(right=>!right)
        }
    }
    
    function stopMove(e){
        if(e.key==="w"){
            setUp(()=>false)
        }
        if(e.key==="s"){
            setDown(()=>false)
        }
        if(e.key==="a"){
            setLeft(()=>false)
        }
        if(e.key==="d"){
            setLeft(()=>false)
        }
    }

    useEffect(()=>{
        if(down===true && characterY<660){
            setCharacterY(y=>y+10)
            setUp(()=>false)
        }
        if(up===true&& characterY>-20){
            setCharacterY(y=>y-10)
            setDown(()=>false)

        }
        if(left===true&&characterX>0){
            setCharacterX(x=>x-10)
            setRight(()=>false)
        }
        if(right===true&&characterX<685){
            setCharacterX(x=>x+10)
            setLeft(()=>false)

        }


    },[up, down, left, right])

    return(<div className="console" tabIndex={0} onKeyDown={move} onKeyUp={stopMove} onMouseUp={ceaseFire} onMouseDown={fire}>


        {gameOver ? <h1>GameOver</h1> :

            <>
            <button onClick={nextLevel}>nextLevel</button>
        <Character characterX={characterX} characterY={characterY} />
        {firing ?<Bullet setBulletHX={setBulletHX} setBulletHY={setBulletHY} characterX={characterX} characterY={characterY} mouseX={mouseX} mouseY={mouseY}/>: null}
        {zombies}
            </>
}
    </div>)
}

export default Console



