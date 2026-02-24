import React from "react";
import './products.css';

const Products = () => {
    const [productList, setProductList] = React.useState([]);


    React.useEffect(() => {
        fetch('data.json') // Corrección: elimina la barra inicial
            .then(response => response.json())
            .then(data => setProductList(data.productos))
            .catch(error => console.error('Error al cargar los productos:', error));
    }, []);


    return (
        <>
            {/* ======== SECCIÓN PRODUCTOS ======== */}
            <section className="mb-5">


                {/* Grid de productos dinámicos */}
                <div className="row g-4">
                    {productList.length > 0 ? (
                        productList.map((product, idx) => (
                            <div key={idx} className="col-md-4 col-sm-6">
                                <div className="card h-100 shadow-sm product-card">
                                    <img src={product.imagen || "https://picsum.photos/300/200"} className="card-img-top" alt={product.nombre} />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{product.nombre}</h5>
                                        <p className="card-text fw-bold fs-5 mb-2">COP ${product.precio}</p>
                                        <span className={`badge mb-2 align-self-start ${product.stock > 0 ? 'bg-success' : 'bg-danger'}`}>{product.stock > 0 ? 'En stock' : 'Agotado'}</span>
                                        <div className="mt-auto d-flex gap-2">
                                            <button className="btn btn-sm btn-outline-primary">Editar</button>
                                            <button className="btn btn-sm btn-outline-danger">Eliminar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center text-muted">No hay productos disponibles.</div>
                    )}
                </div>
            </section>

            
        </>
    );
};

export default Products;
