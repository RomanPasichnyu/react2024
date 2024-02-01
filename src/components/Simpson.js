const Simpson = ({simpson}) => {
    const {name, surname, age, info, photo} = simpson;
    return (

        <div>
            <div>{name}</div>
            <div>{surname}</div>
            <div>{age}</div>
            <div>{info}</div>
            <img src={photo}/>
        </div>
    );
};

export {Simpson};