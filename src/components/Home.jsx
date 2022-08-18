import Card from "./Card";
import list from "../data";


const Home =() => {
    return (  
        <>
        
        <div className="d-flex flex-wrap justify-content-center">
            {!list.length ? <div>Empty</div>: list.map(e => <Card title={e.title} id={e.id} img={e.img} price={e.price} key={e.id}/>)}
            
        </div>
        
        </>
    );
}

export default Home;