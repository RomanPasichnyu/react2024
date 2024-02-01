const RickAndMorty = ({personaj}) => {
    const {id, name, status, species, gender, image} = personaj;
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{status}</div>
            <div>{species}</div>
            <div>{gender}</div>
            <img src={image}/>
        </div>
    );
};

export {RickAndMorty};