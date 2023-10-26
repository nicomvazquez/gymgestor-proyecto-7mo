function ProductCard({product}){
    return (
        <div>
            <h1>{product.nombre}</h1>
            <p>{product.descripcion}</p>
        </div>
    )
}