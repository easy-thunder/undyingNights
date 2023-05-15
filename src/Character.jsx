function Character({characterX, characterY}){




    return(
    <div className="character" style={{
        marginTop: `${characterY}px`,
        marginLeft: `${characterX}px`,
    }}>
    </div>)
}


export default Character
