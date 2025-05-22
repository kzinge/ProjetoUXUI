import "./Card.css"

export default function Card({ imageUrl, title }){

    return(
        
        <div>
            <figure>
                <img src={imageUrl} alt={title} className="w-full h-32 object-cover" />
            </figure>
        </div>


    )
}