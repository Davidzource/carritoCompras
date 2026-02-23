import './footer.css'
export default function Footer() {
  // ======== FOOTER ========
    return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5">
        <div className="container">
        <div className="row">
            <div className="col-md-4 mb-4">
                <h5 className="fw-bold mb-3">Carrito de Compras</h5>
                <p>Maquetación en Bootstrap para futura implementación en React. Proyecto de práctica.</p>
            </div>
            <div className="col-md-4 mb-4">
                <h5 className="fw-bold mb-3">Enlaces rápidos</h5>
                <ul className="list-unstyled">
                        <li><a href="#" className="text-white-50 text-decoration-none">Inicio</a></li>
                        <li><a href="/" className="text-white-50 text-decoration-none">Productos</a></li>
                        <li><a href="#" className="text-white-50 text-decoration-none">Ofertas</a></li>
                        <li><a href="#" className="text-white-50 text-decoration-none">Contacto</a></li>
                </ul>
            </div>
            <div className="col-md-4 mb-4">
                <h5 className="fw-bold mb-3">Contacto</h5>
                <ul className="list-unstyled text-white-50">
                    <li><i className="fas fa-map-marker-alt me-2"></i> Medellin, Colombia</li>
                    <li><i className="fas fa-phone me-2"></i> +57 123 456 7890</li>
                    <li><i className="fas fa-envelope me-2"></i> info@carritocompras.com</li>
                </ul>
            </div>
        </div>
        <hr className="border-secondary" />
            <div className="text-center text-white-50 small">
            &copy; 2025 Carrito de Compras. Todos los derechos reservados.
            </div>
        </div>
    </footer>
    );
}
